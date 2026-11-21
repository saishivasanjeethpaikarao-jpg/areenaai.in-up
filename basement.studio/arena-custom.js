// Arena Studio Client Customizations
// Runs cleanly after DOMContentLoaded and hydration

(function () {
  function applyArena() {
    try {
      // 1. Set Title and Meta
      if (document.title !== "Arena Studio | Your work, finished sharper.") {
        document.title = "Arena Studio | Your work, finished sharper.";
      }
    } catch (e) {
      console.warn("Title error:", e);
    }

    try {
      // 2. Navigation Brand Logo
      const logoLinks = document.querySelectorAll('a[aria-label="Home"], header a[href="/"], nav a[href="/"]');
      logoLinks.forEach(link => {
        if (!link.dataset.arenaBranded) {
          link.dataset.arenaBranded = "true";
          link.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
              <img src="/arena-assets/arena-a.png" alt="Arena" style="height:22px; width:auto; object-fit:contain;" />
              <span style="font-family:var(--font-geist-mono, monospace); font-weight:800; font-size:16px; letter-spacing:-0.03em; color:#fff;">arena<span style="color:#ff5c00;">.</span></span>
            </div>
          `;
        }
      });
    } catch (e) {
      console.warn("Nav logo error:", e);
    }

    try {
      // 3. Hero Section Headline & Subhead (NO OVERLAPPING TEXT)
      const h1 = document.querySelector('h1');
      if (h1 && !h1.dataset.arenaBranded) {
        h1.dataset.arenaBranded = "true";
        h1.innerHTML = 'Resume, PPT, website design and AI automation services in India';
        h1.style.lineHeight = '1.15';
        h1.style.marginBottom = '1.25rem';

        // Check if subhead container exists
        let subContainer = h1.nextElementSibling;
        if (subContainer && !subContainer.dataset.arenaSub) {
          subContainer.dataset.arenaSub = "true";
          subContainer.innerHTML = `
            <p style="font-size:clamp(1rem, 1.8vw, 1.25rem); color:#a1a1aa; max-width:44rem; line-height:1.6; margin-bottom:1.5rem;">
              Arena is an online execution studio. Send your raw brief on WhatsApp, review the finished deliverable, and pay only when satisfied.
            </p>
            <div id="arena-hero-cta" style="display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin-top:1rem; margin-bottom:2rem;">
              <a href="https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20help%20with%20a%20task" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:10px; background:#ff5c00; color:#000; font-weight:800; font-size:13px; text-transform:uppercase; padding:12px 24px; border-radius:4px; text-decoration:none; box-shadow:0 0 20px rgba(255,92,0,0.35); transition:transform 0.2s;">
                <span>Order on WhatsApp &rarr;</span>
              </a>
              <span style="font-family:monospace; font-size:12px; color:#71717a;">Resumes from ₹199 &bull; PPTs from ₹249 &bull; Websites from ₹499 &bull; AI from ₹2,999</span>
            </div>
          `;
        }
      }
    } catch (e) {
      console.warn("Hero error:", e);
    }

    try {
      // 4. Trusted Platforms & Real Arena Ecosystem Logos
      const h2List = Array.from(document.querySelectorAll('h2'));
      const trustedH2 = h2List.find(el => {
        const txt = (el.innerText || '').toLowerCase();
        return txt.includes('trusted by') || txt.includes('verified platforms');
      });

      if (trustedH2 && !trustedH2.dataset.arenaBranded) {
        trustedH2.dataset.arenaBranded = "true";
        trustedH2.innerText = "Verified Platforms & Proof";

        // Find the sibling container with the logo grid
        const parentRow = trustedH2.parentElement;
        const logoContainer = parentRow ? parentRow.nextElementSibling : null;
        if (logoContainer && !logoContainer.dataset.arenaGrid) {
          logoContainer.dataset.arenaGrid = "true";
          logoContainer.innerHTML = `
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px; width:100%; padding:20px 0;">
              <a href="https://github.com/saishivasanjeethpaikarao-jpg/ai--assistant" target="_blank" rel="noopener noreferrer" style="border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); padding:20px; border-radius:10px; text-decoration:none; display:flex; flex-direction:column; gap:8px; transition:all 0.2s;">
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                  <span style="font-size:11px; text-transform:uppercase; color:#a855f7; font-weight:800; letter-spacing:0.06em;">Flagship Build</span>
                  <span style="font-size:11px; color:#a1a1aa; font-family:monospace;">GitHub</span>
                </div>
                <span style="font-size:16px; font-weight:700; color:#fff;">AIRIS AI Assistant</span>
                <span style="font-size:12px; color:#a1a1aa; line-height:1.5;">Web-first AI personal assistant with automated trading and autonomous workflow system.</span>
              </a>

              <a href="https://www.skills.google/public_profiles/5aea6363-ee65-4721-b3db-1759dc8b7da4" target="_blank" rel="noopener noreferrer" style="border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); padding:20px; border-radius:10px; text-decoration:none; display:flex; flex-direction:column; gap:8px; transition:all 0.2s;">
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                  <span style="font-size:11px; text-transform:uppercase; color:#22c55e; font-weight:800; letter-spacing:0.06em;">Credentials</span>
                  <span style="font-size:11px; color:#a1a1aa; font-family:monospace;">Google</span>
                </div>
                <span style="font-size:16px; font-weight:700; color:#fff;">Google Skills Profile</span>
                <span style="font-size:12px; color:#a1a1aa; line-height:1.5;">Verified Google skill badges and cloud architecture learning achievements.</span>
              </a>

              <a href="https://github.com/saishivasanjeethpaikarao-jpg" target="_blank" rel="noopener noreferrer" style="border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); padding:20px; border-radius:10px; text-decoration:none; display:flex; flex-direction:column; gap:8px; transition:all 0.2s;">
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                  <span style="font-size:11px; text-transform:uppercase; color:#ff5c00; font-weight:800; letter-spacing:0.06em;">Open Source</span>
                  <span style="font-size:11px; color:#a1a1aa; font-family:monospace;">@saishivasanjeeth</span>
                </div>
                <span style="font-size:16px; font-weight:700; color:#fff;">GitHub Repositories</span>
                <span style="font-size:12px; color:#a1a1aa; line-height:1.5;">Full-stack projects, AI agents, automation pipelines, and developer portfolios.</span>
              </a>

              <a href="https://www.linkedin.com/in/sai-shiva-sanjeeth-paikarao-0534323bb" target="_blank" rel="noopener noreferrer" style="border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); padding:20px; border-radius:10px; text-decoration:none; display:flex; flex-direction:column; gap:8px; transition:all 0.2s;">
                <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                  <span style="font-size:11px; text-transform:uppercase; color:#0a66c2; font-weight:800; letter-spacing:0.06em;">Founder</span>
                  <span style="font-size:11px; color:#a1a1aa; font-family:monospace;">LinkedIn</span>
                </div>
                <span style="font-size:16px; font-weight:700; color:#fff;">Sai Shiva Sanjeeth</span>
                <span style="font-size:12px; color:#a1a1aa; line-height:1.5;">Founder & Lead Architect at Arena Studio. Direct client satisfaction guarantee.</span>
              </a>
            </div>
          `;
        }
      }
    } catch (e) {
      console.warn("Trusted by error:", e);
    }

    try {
      // 5. Featured Projects -> Real Arena Deliverables (Titles, Descriptions, Images, Links)
      const projectConfigs = [
        {
          key: "vercel-ship",
          title: "Career & ATS Resume Studio",
          desc: "Engineered single-page and executive resumes formatted specifically for ATS screening algorithms with recruiter-tested typography.",
          img: "/arena-assets/resume.png",
          cat: "Career · ATS Resume (From ₹199)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20an%20ATS%20Resume"
        },
        {
          key: "daylight",
          title: "Investor Pitch Decks & Keynotes",
          desc: "High-stakes PowerPoint and pitch deck presentations designed from raw briefs with structured storytelling and visual data.",
          img: "/arena-assets/deck.png",
          cat: "Design · Pitch Decks (From ₹249)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Pitch%20Deck"
        },
        {
          key: "kidsuper",
          title: "Excel Dashboards & Data Engine",
          desc: "Automated KPI dashboards, advanced formula modeling, pivot analysis, and messy raw dataset restructuring.",
          img: "/arena-assets/excel.png",
          cat: "Business · Data & Excel (From ₹99)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20an%20Excel%20Dashboard"
        },
        {
          key: "mrbeast",
          title: "Modern Web Presence & Portfolios",
          desc: "Ultra-fast developer portfolios, high-conversion landing pages, and responsive business websites built end-to-end.",
          img: "/arena-assets/portfolio-hero.png",
          cat: "Web · Modern Sites (From ₹499)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Website"
        }
      ];

      projectConfigs.forEach(config => {
        const links = document.querySelectorAll(`a[href*="${config.key}"]`);
        links.forEach(link => {
          // Update title spans
          const textSpan = Array.from(link.querySelectorAll('span')).find(s => s.innerText && !s.children.length);
          if (textSpan && textSpan.innerText !== config.title) {
            textSpan.innerText = config.title;
            textSpan.style.fontSize = "clamp(1.15rem, 1.75vw, 1.6rem)";
            textSpan.style.lineHeight = "1.2";
            textSpan.style.display = "block";
            textSpan.style.whiteSpace = "normal";
          }

          // Adjust link styling for desktop
          link.style.maxWidth = "280px";

          // Update image
          const img = link.querySelector('img');
          if (img && img.src !== config.img && !img.src.includes(config.img)) {
            img.src = config.img;
            img.srcset = "";
            img.style.objectFit = "cover";
            img.style.width = "100%";
            img.style.height = "100%";
          }

          // Update WhatsApp link
          link.href = config.wa;
          link.target = "_blank";
          link.rel = "noopener noreferrer";

          // Update description in neighboring container
          const cardContainer = link.closest('.grid-layout') || link.parentElement;
          if (cardContainer) {
            const p = cardContainer.querySelector('p.text-f-h4-mobile, p');
            if (p && p.innerText !== config.desc && !p.dataset.arenaDesc) {
              p.dataset.arenaDesc = "true";
              p.innerText = config.desc;
              p.style.maxWidth = "290px";
              p.style.fontSize = "0.92rem";
              p.style.lineHeight = "1.5";
            }
          }
        });
      });
    } catch (e) {
      console.warn("Featured projects error:", e);
    }

    try {
      // 6. Execution Studios Cards
      const h3s = Array.from(document.querySelectorAll('h3')).filter(h => {
        const text = (h.innerText || '').toLowerCase();
        return text.includes('studio') || text.includes('engineering') || text.includes('design') || text.includes('marketing') || text.includes('branding');
      });

      if (h3s.length >= 4) {
        const studios = [
          {
            name: "AI & Automation Studio",
            price: "From ₹2,999",
            desc: "Custom AI chatbots, WhatsApp business automation, lead routing, and hands-free automated workflows trained on your business data.",
            wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20want%20to%20build%20an%20AI%20Automation"
          },
          {
            name: "Web Presence Studio",
            price: "From ₹499",
            desc: "High-performance portfolio sites, conversion-focused landing pages, and multi-page business websites with responsive mobile craft.",
            wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Website"
          },
          {
            name: "Design & Deck Studio",
            price: "From ₹49",
            desc: "Investor pitch decks, executive PowerPoint presentations, social media creatives, flyers, posters, and print-ready certificates.",
            wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Pitch%20Deck%20or%20Design"
          },
          {
            name: "Career & Data Studio",
            price: "From ₹99",
            desc: "ATS resume making, LinkedIn profile makeover, Excel dashboards, automated formulas, messy data cleanup, and PDF to Word.",
            wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20an%20ATS%20Resume"
          }
        ];

        h3s.forEach((h3, i) => {
          if (i < 4 && !h3.dataset.arenaStudiosDone) {
            h3.dataset.arenaStudiosDone = "true";
            const s = studios[i];
            h3.innerText = s.name;

            const card = h3.parentElement;
            if (card) {
              const p = card.querySelector('p');
              if (p) p.innerText = s.desc;

              if (!card.querySelector('.arena-badge')) {
                const badge = document.createElement('div');
                badge.className = 'arena-badge';
                badge.style = "display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:800; color:#ff5c00; background:rgba(255,92,0,0.12); border:1px solid rgba(255,92,0,0.3); padding:3px 10px; margin-bottom:8px; width:fit-content; text-transform:uppercase; letter-spacing:0.04em;";
                badge.innerText = s.price;
                card.prepend(badge);

                const ctaBtn = document.createElement('a');
                ctaBtn.className = 'arena-card-cta';
                ctaBtn.href = s.wa;
                ctaBtn.target = "_blank";
                ctaBtn.rel = "noopener noreferrer";
                ctaBtn.style = "display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:11px; font-weight:700; color:#fff; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); padding:8px 14px; margin-top:12px; width:100%; text-transform:uppercase; text-decoration:none; transition:all 0.2s;";
                ctaBtn.innerHTML = '<span>Book Studio &rarr;</span>';
                card.appendChild(ctaBtn);
              }
            }
          }
        });
      }
    } catch (e) {
      console.warn("Studios error:", e);
    }

    try {
      // 7. Contact Section (STRICTLY TARGET ONLY FOOTER / CONTACT SECTION)
      const footerContact = document.querySelector('footer, #contact');
      if (footerContact) {
        const emailLinks = footerContact.querySelectorAll('a[href*="mailto:"], a[href*="hello@"]');
        emailLinks.forEach(link => {
          if (!link.dataset.arenaContact) {
            link.dataset.arenaContact = "true";
            link.href = "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20help%20with%20a%20task";
            link.target = "_blank";
            link.innerHTML = `
              <span style="color:#ff5c00; font-size:clamp(1.75rem, 4vw, 3.25rem); font-weight:800; display:block;">+91 78420 76378</span>
              <span style="font-size:0.95rem; color:#a1a1aa; font-weight:500; display:block; margin-top:4px;">(WhatsApp &bull; ai.withaura23@gmail.com)</span>
            `;
          }
        });

        const pTags = Array.from(footerContact.querySelectorAll('p'));
        pTags.forEach(p => {
          const txt = p.innerText || '';
          if (txt.includes('basement vibe') || txt.includes('cool shit')) {
            p.innerText = "Ready to get your work finished sharper? Connect with Arena Studio directly on WhatsApp or email.";
          }
          if (txt.includes('basement.studio LLC')) {
            p.innerText = "© Arena Studio 2026 all rights reserved. Founded by Sai Shiva Sanjeeth Paikarao (@ai.withaura)";
          }
        });
      }
    } catch (e) {
      console.warn("Footer contact error:", e);
    }

    try {
      // 8. Footer Wordmark
      const footerWordmarks = document.querySelectorAll('footer h2, footer [class*="wordmark"]');
      footerWordmarks.forEach(wm => {
        const txt = (wm.innerText || '').toLowerCase();
        if (!wm.dataset.arenaWordmark && (txt.includes('basement') || wm.tagName === 'SVG')) {
          wm.dataset.arenaWordmark = "true";
          const div = document.createElement('div');
          div.style = "font-family:var(--font-geist-mono, monospace); font-weight:900; font-size:clamp(2rem, 8vw, 6rem); letter-spacing:-0.05em; color:#fff; text-align:center; padding:2rem 0;";
          div.innerHTML = 'ARENA<span style="color:#ff5c00;">.</span> STUDIO';
          wm.replaceWith(div);
        }
      });
    } catch (e) {
      console.warn("Wordmark error:", e);
    }
  }

  // Run on load and after hydration
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyArena);
  } else {
    applyArena();
  }

  // Periodic poll to ensure client-rendered elements maintain Arena branding
  setInterval(applyArena, 1500);
})();
