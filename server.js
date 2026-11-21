const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const BASE_DIR = path.join(ROOT_DIR, 'basement.studio');
const EXTERNAL_DIR = path.join(ROOT_DIR, '_external');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.ktx2': 'image/ktx2',
  '.wasm': 'application/wasm',
  '.bin': 'application/octet-stream',
  '.tsx': 'text/plain; charset=utf-8'
};

function resolveFile(pathname) {
  let cleanPath = pathname.replace(/^\/+/, '');
  
  if (!cleanPath) {
    const candidate = path.join(BASE_DIR, 'index.html');
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }

  const searchCandidates = [];

  // If path starts with _external
  if (cleanPath.startsWith('_external/')) {
    searchCandidates.push(path.join(EXTERNAL_DIR, cleanPath.slice('_external/'.length)));
    searchCandidates.push(path.join(ROOT_DIR, cleanPath));
  }

  // If path starts with basement.studio
  if (cleanPath.startsWith('basement.studio/')) {
    searchCandidates.push(path.join(ROOT_DIR, cleanPath));
    searchCandidates.push(path.join(BASE_DIR, cleanPath.slice('basement.studio/'.length)));
  }

  // Primary: basement.studio subdirectory (including arena-assets, 3d, etc.)
  searchCandidates.push(path.join(BASE_DIR, cleanPath));
  searchCandidates.push(path.join(BASE_DIR, cleanPath + '.html'));
  searchCandidates.push(path.join(BASE_DIR, cleanPath, 'index.html'));

  // Fallback: root directory
  searchCandidates.push(path.join(ROOT_DIR, cleanPath));
  searchCandidates.push(path.join(ROOT_DIR, cleanPath + '.html'));

  for (const candidate of searchCandidates) {
    try {
      if (fs.existsSync(candidate)) {
        const stat = fs.statSync(candidate);
        if (stat.isFile()) {
          return candidate;
        }
      }
    } catch (e) {}
  }

  return null;
}

function serveLocalFile(req, res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      return;
    }

    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

      if (start >= stats.size || end >= stats.size || start > end) {
        res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
        res.end();
        return;
      }

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': end - start + 1,
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache'
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    }
  });
}

function proxyExternalUrl(req, res, targetUrl) {
  console.log(`[PROXY_EXT] ${targetUrl}`);
  try {
    const urlObj = new URL(targetUrl);
    const client = urlObj.protocol === 'http:' ? http : https;

    const proxyReq = client.request(targetUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://basement.studio/'
      }
    }, (proxyRes) => {
      const ext = path.extname(urlObj.pathname).toLowerCase();
      const contentType = proxyRes.headers['content-type'] || MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(proxyRes.statusCode, {
        ...proxyRes.headers,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });

      proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
      console.error(`[PROXY_EXT ERROR] ${err.message}`);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Proxy failed', message: err.message }));
    });

    proxyReq.end();
  } catch (err) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid URL');
  }
}

// Fallback proxy to live site for dynamic APIs and any runtime missing assets
function proxyToLive(req, res, targetPath) {
  const targetUrl = `https://basement.studio${targetPath}`;
  console.log(`[PROXY] ${req.method} ${targetUrl}`);

  const options = {
    method: req.method,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://basement.studio/'
    }
  };

  const proxyReq = https.request(targetUrl, options, (proxyRes) => {
    const ext = path.extname(targetPath.split('?')[0]).toLowerCase();
    const contentType = proxyRes.headers['content-type'] || MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(proxyRes.statusCode, {
      ...proxyRes.headers,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    // Cache static assets locally if successful
    if (proxyRes.statusCode === 200 && !targetPath.startsWith('/api/')) {
      const cleanPath = targetPath.split('?')[0].replace(/^\/+/, '');
      const localSavePath = path.join(BASE_DIR, cleanPath);
      try {
        fs.mkdirSync(path.dirname(localSavePath), { recursive: true });
        const fileStream = fs.createWriteStream(localSavePath);
        proxyRes.pipe(fileStream);
      } catch (e) {}
    }

    proxyRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    console.error(`[PROXY ERROR] ${err.message}`);
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Proxy failed', message: err.message }));
  });

  req.pipe(proxyReq);
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch (err) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad Request');
    return;
  }

  const fullPath = parsedUrl.pathname + parsedUrl.search;
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // Dynamic API routes proxying
  if (pathname.startsWith('/api/')) {
    proxyToLive(req, res, fullPath);
    return;
  }

  // Handle Next.js Image Optimization endpoint
  if (pathname === '/_next/image') {
    const imageUrl = parsedUrl.searchParams.get('url');
    if (imageUrl) {
      if (imageUrl.includes('cdn.sanity.io/images/')) {
        const parts = imageUrl.split('cdn.sanity.io/');
        const candidate = path.join(EXTERNAL_DIR, 'cdn.sanity.io', parts[1].split('?')[0]);
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          serveLocalFile(req, res, candidate);
          return;
        }
      }

      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        proxyExternalUrl(req, res, imageUrl);
        return;
      }

      const localFile = resolveFile(imageUrl.split('?')[0]);
      if (localFile) {
        serveLocalFile(req, res, localFile);
        return;
      }
    }
  }

  const filePath = resolveFile(pathname);

  if (!filePath) {
    // Check if it's an asset (has an extension or starts with /3d/)
    if (pathname.includes('.') || pathname.startsWith('/3d/')) {
      proxyToLive(req, res, fullPath);
      return;
    }
    console.log(`[404] ${req.method} ${pathname}`);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>The path <code>${pathname}</code> was not found on this server.</p></body></html>`);
    return;
  }

  serveLocalFile(req, res, filePath);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=========================================`);
  console.log(`  Arena Studio is running locally!       `);
  console.log(`  URL: http://localhost:${PORT}          `);
  console.log(`  3D Office, Physics & APIs: ONLINE     `);
  console.log(`=========================================`);
});
