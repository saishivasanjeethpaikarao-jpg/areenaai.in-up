// Arena Studio Master Customization Script
// Rebrands basement.studio completely into Arena Studio (arenaai.in)
// Runs idempotently on load and after hydration

(function () {
  'use strict';

  function applyArena() {
    try {
      // 1. Page Title & Meta
      if (document.title !== "Arena Studio | Your work, finished sharper.") {
        document.title = "Arena Studio | Your work, finished sharper.";
      }
    } catch (e) {
      console.warn("Title error:", e);
    }

    try {
      // 2. Navigation Brand Logo & Nav Links
      const logoLinks = document.querySelectorAll('a[aria-label="Home"], header a[href="/"], nav a[href="/"]');
      logoLinks.forEach(link => {
        if (link.dataset.arenaBranded !== "true") {
          link.dataset.arenaBranded = "true";
          link.innerHTML = `
            <div style="display:inline-flex; align-items:center; gap:8px;">
              <img src="/arena-assets/arena-a.png" alt="Arena" style="height:22px; width:auto; object-fit:contain;" />
              <span style="font-family:var(--font-geist-mono, monospace); font-weight:800; font-size:16px; letter-spacing:-0.03em; color:#fff;">arena<span style="color:#ff5c00;">.</span></span>
            </div>
          `;
        }
      });

      // Update Contact link in nav
      document.querySelectorAll('a[href*="/contact"]').forEach(a => {
        a.href = "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20help%20with%20a%20task";
        a.target = "_blank";
        a.innerText = "Order on WhatsApp";
        a.style.color = "#ff5c00";
        a.style.fontWeight = "700";
      });
    } catch (e) {
      console.warn("Nav error:", e);
    }

    try {
      // 3. Hero Section Headline & Subhead (CLEAN & NON-OVERLAPPING)
      const h1 = document.querySelector('h1');
      if (h1) {
        if (h1.dataset.arenaBranded !== "true") {
          h1.dataset.arenaBranded = "true";
          h1.innerHTML = 'Resume, PPT, website design and AI automation services in India';
          h1.style.lineHeight = '1.15';
          h1.style.marginBottom = '1.25rem';
        }

        const heroParent = h1.parentElement;
        if (heroParent && heroParent.dataset.arenaClean !== "true") {
          heroParent.dataset.arenaClean = "true";

          let actionBlock = document.getElementById('arena-hero-action-block');
          if (!actionBlock) {
            actionBlock = document.createElement('div');
            actionBlock.id = 'arena-hero-action-block';
            actionBlock.style = "margin-top:1.25rem; margin-bottom:2rem;";
            actionBlock.innerHTML = `
              <p style="font-size:clamp(1rem, 1.8vw, 1.25rem); color:#a1a1aa; max-width:44rem; line-height:1.6; margin-bottom:1.5rem;">
                Arena is an online execution studio. Send your raw brief on WhatsApp, review the finished deliverable, and pay only when satisfied.
              </p>
              <div style="display:flex; flex-wrap:wrap; align-items:center; gap:14px; margin-top:1rem; margin-bottom:1.5rem;">
                <a href="https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20help%20with%20a%20task" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:10px; background:#ff5c00; color:#000; font-weight:800; font-size:13px; text-transform:uppercase; padding:12px 24px; border-radius:4px; text-decoration:none; box-shadow:0 0 20px rgba(255,92,0,0.35); transition:transform 0.2s;">
                  <span>Order on WhatsApp &rarr;</span>
                </a>
                <a href="tel:+917842076378" style="font-family:monospace; font-size:14px; font-weight:700; color:#fff; text-decoration:none; border:1px solid rgba(255,255,255,0.2); padding:10px 18px; border-radius:4px;">
                  +91 78420 76378
                </a>
              </div>
              <div style="font-family:monospace; font-size:12px; color:#a1a1aa; display:flex; flex-wrap:wrap; gap:10px;">
                <span style="color:#ff5c00;">&bull;</span> Resumes from &#8377;199
                <span style="color:#ff5c00;">&bull;</span> PPTs from &#8377;249
                <span style="color:#ff5c00;">&bull;</span> Websites from &#8377;499
                <span style="color:#ff5c00;">&bull;</span> AI from &#8377;2,999
              </div>
            `;
            h1.insertAdjacentElement('afterend', actionBlock);
          }
        }
      }
    } catch (e) {
      console.warn("Hero error:", e);
    }

    try {
      // 4. "Trusted by" Section -> Replace with ONLY 4 Arena Ecosystem Cards
      const h2List = Array.from(document.querySelectorAll('h2'));
      const trustedH2 = h2List.find(el => {
        const txt = (el.innerText || '').toLowerCase();
        return txt.includes('trusted by') || txt.includes('verified platforms');
      });

      if (trustedH2) {
        trustedH2.innerHTML = `Verified Platforms <span style="color:#ff5c00;">&amp; Proof</span>`;

        const sectionContainer = trustedH2.closest('section') || trustedH2.parentElement?.parentElement;
        if (sectionContainer) {
          const logoGrid = sectionContainer.querySelector('.grid-cols-6, .grid-rows-auto, [class*="grid-cols"]');
          if (logoGrid && logoGrid.dataset.arenaGridDone !== "true") {
            logoGrid.dataset.arenaGridDone = "true";
            logoGrid.style.display = "grid";
            logoGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(260px, 1fr))";
            logoGrid.style.gap = "16px";
            logoGrid.style.width = "100%";
            logoGrid.style.padding = "20px 0";

            logoGrid.innerHTML = `
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
            `;
          }
        }
      }
    } catch (e) {
      console.warn("Trusted by error:", e);
    }

    try {
      // 5. Featured Projects: Update Images & Links cleanly
      const projects = [
        {
          keys: ["vercel-ship", "vercel"],
          title: "Career & ATS Resume Studio",
          desc: "Engineered single-page and executive resumes formatted specifically for ATS screening algorithms with recruiter-tested typography.",
          img: "/arena-assets/resume.png",
          cat: "Career · ATS Resume (From ₹199)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20an%20ATS%20Resume"
        },
        {
          keys: ["daylight"],
          title: "Investor Pitch Decks & Keynotes",
          desc: "High-stakes PowerPoint and pitch deck presentations designed from raw briefs with structured storytelling and visual data.",
          img: "/arena-assets/deck.png",
          cat: "Design · Pitch Decks (From ₹249)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Pitch%20Deck"
        },
        {
          keys: ["kidsuper"],
          title: "Excel Dashboards & Data Engine",
          desc: "Automated KPI dashboards, advanced formula modeling, pivot analysis, and messy raw dataset restructuring.",
          img: "/arena-assets/excel.png",
          cat: "Business · Data & Excel (From ₹99)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20an%20Excel%20Dashboard"
        },
        {
          keys: ["mrbeast"],
          title: "Modern Web Presence & Portfolios",
          desc: "Ultra-fast developer portfolios, high-conversion landing pages, and responsive business websites built end-to-end.",
          img: "/arena-assets/portfolio-hero.png",
          cat: "Web · Modern Sites (From ₹499)",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Website"
        }
      ];

      projects.forEach(p => {
        p.keys.forEach(k => {
          document.querySelectorAll(`a[href*="${k}"] img`).forEach(img => {
            img.src = p.img;
            img.srcset = "";
            img.style.objectFit = "cover";
          });

          document.querySelectorAll(`a[href*="${k}"]`).forEach(a => {
            a.href = p.wa;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          });
        });
      });

      const projectTitles = [
        "ATS Resume Studio",
        "Pitch Decks & Keynotes",
        "Excel Dashboards",
        "Modern Web Portfolios"
      ];
      const desktopTitleSpans = document.querySelectorAll('.translate-x-6, [class*="group-hover:translate-x-0"]');
      desktopTitleSpans.forEach((span, i) => {
        if (i < projectTitles.length) {
          span.innerText = projectTitles[i];
          span.style.fontSize = "1.1rem";
        }
      });
    } catch (e) {
      console.warn("Featured projects error:", e);
    }

    try {
      // 6. Capabilities Section -> Arena Execution Studios (4 Cards)
      const capHeading = Array.from(document.querySelectorAll('p, h2, h3')).find(el => {
        return (el.innerText || '').trim() === 'Capabilities';
      });

      if (capHeading) {
        capHeading.innerHTML = `<span style="color:#ff5c00; font-family:monospace; text-transform:uppercase; font-size:13px; font-weight:800; letter-spacing:0.08em;">Execution Studios</span>`;

        const section = capHeading.closest('section') || capHeading.parentElement;
        if (section) {
          const intro = section.querySelector('div.flex-col, div');
          if (intro && intro.innerText.includes('extraordinary')) {
            intro.innerHTML = `
              <p style="font-size:clamp(1.75rem, 3.5vw, 2.75rem); font-weight:800; color:#fff; line-height:1.2; margin-bottom:0.75rem;">
                Clear pricing. Zero fluff. Preview before payment.
              </p>
              <p style="color:#a1a1aa; font-size:clamp(0.95rem, 1.4vw, 1.15rem); line-height:1.6; max-width:44rem;">
                Arena is the dedicated execution arm for your work. Send your raw files on WhatsApp, receive professional output within hours, and pay only after you approve the results.
              </p>
            `;
          }
        }
      }

      const studioMap = [
        {
          trigger: "Websites & Features",
          title: "AI & Automation Studio",
          price: "From ₹2,999",
          desc: "Custom AI chatbots, WhatsApp business automation, lead routing, and hands-free automated workflows trained on your business data.",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20want%20to%20build%20an%20AI%20Automation"
        },
        {
          trigger: "Visual Branding",
          title: "Web Presence Studio",
          price: "From ₹499",
          desc: "High-performance portfolio sites, conversion-focused landing pages, and multi-page business websites with responsive mobile craft.",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Website"
        },
        {
          trigger: "IRL Experience Design",
          title: "Design & Deck Studio",
          price: "From ₹249",
          desc: "Investor pitch decks, executive PowerPoint presentations, social media creatives, flyers, posters, and print-ready certificates.",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20a%20Pitch%20Deck%20or%20Design"
        },
        {
          trigger: "Marketing Execution",
          title: "Career & Data Studio",
          price: "From ₹99",
          desc: "ATS resume making, LinkedIn profile makeover, Excel dashboards, automated formulas, messy data cleanup, and PDF to Word.",
          wa: "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20an%20ATS%20Resume"
        }
      ];

      studioMap.forEach(s => {
        const matches = Array.from(document.querySelectorAll('span, h3, a')).filter(el => {
          return (el.innerText || '').trim() === s.trigger;
        });

        matches.forEach(m => {
          m.innerText = s.title;

          const card = m.closest('.flex-col') || m.parentElement?.parentElement;
          if (card && card.dataset.arenaStudioReady !== "true") {
            card.dataset.arenaStudioReady = "true";

            const descP = card.querySelector('p');
            if (descP) descP.innerText = s.desc;

            if (!card.querySelector('.arena-studio-cta')) {
              const badge = document.createElement('div');
              badge.style = "display:inline-flex; align-items:center; gap:6px; font-size:11px; font-weight:800; color:#ff5c00; background:rgba(255,92,0,0.12); border:1px solid rgba(255,92,0,0.3); padding:3px 10px; margin-bottom:8px; width:fit-content; text-transform:uppercase; letter-spacing:0.04em; border-radius:2px;";
              badge.innerText = s.price;
              card.prepend(badge);

              const btn = document.createElement('a');
              btn.className = 'arena-studio-cta';
              btn.href = s.wa;
              btn.target = "_blank";
              btn.rel = "noopener noreferrer";
              btn.style = "display:inline-flex; align-items:center; justify-content:center; gap:6px; font-size:11px; font-weight:700; color:#fff; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); padding:8px 14px; margin-top:12px; width:100%; text-transform:uppercase; text-decoration:none; border-radius:4px; transition:all 0.2s;";
              btn.innerHTML = '<span>Book Studio &rarr;</span>';
              card.appendChild(btn);
            }
          }
        });
      });
    } catch (e) {
      console.warn("Studios error:", e);
    }

    try {
      // 7. Footer / Contact Section
      const footer = document.querySelector('footer, #contact');
      if (footer) {
        // Replace mailto/email links
        const emailLinks = footer.querySelectorAll('a[href*="mailto:"], a[href*="hello@"]');
        emailLinks.forEach(link => {
          if (link.dataset.arenaContact !== "true") {
            link.dataset.arenaContact = "true";
            link.href = "https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20help%20with%20a%20task";
            link.target = "_blank";
            link.innerHTML = `
              <span style="color:#ff5c00; font-size:clamp(1.75rem, 4vw, 3.25rem); font-weight:800; display:block;">+91 78420 76378</span>
              <span style="font-size:0.95rem; color:#a1a1aa; font-weight:500; display:block; margin-top:4px;">(WhatsApp &bull; ai.withaura23@gmail.com)</span>
            `;
          }
        });

        // Replace footer paragraphs
        const pTags = Array.from(footer.querySelectorAll('p'));
        pTags.forEach(p => {
          const txt = p.innerText || '';
          if (txt.includes('basement vibe') || txt.includes('cool shit')) {
            p.innerText = "Ready to get your work finished sharper? Connect with Arena Studio directly on WhatsApp or email.";
          }
          if (txt.includes('basement.studio LLC') || txt.includes('all rights reserved')) {
            p.innerText = "© Arena Studio 2026 all rights reserved. Founded by Sai Shiva Sanjeeth Paikarao (@ai.withaura)";
          }
        });

        // Replace wordmark SVGs cleanly with exactly ONE crisp ARENA. STUDIO wordmark
        const wordmarkSvgs = footer.querySelectorAll('svg');
        let replacedOne = false;
        wordmarkSvgs.forEach(svg => {
          const viewBox = svg.getAttribute('viewBox') || '';
          if (viewBox.includes('1673') || viewBox.includes('356') || svg.querySelector('title')?.innerText.includes('basement')) {
            if (!replacedOne) {
              replacedOne = true;
              const div = document.createElement('div');
              div.style = "font-family:var(--font-geist-mono, monospace); font-weight:900; font-size:clamp(3rem, 10vw, 9rem); letter-spacing:-0.05em; color:#fff; text-align:left; padding:1.5rem 0; width:100%; border-bottom:1px solid rgba(255,255,255,0.2); margin-bottom:1.5rem;";
              div.innerHTML = 'ARENA<span style="color:#ff5c00;">.</span> STUDIO';
              svg.replaceWith(div);
            } else {
              svg.remove();
            }
          }
        });

        // Update footer navigation links
        footer.querySelectorAll('a').forEach(a => {
          const txt = (a.innerText || '').trim();
          if (txt === 'Services') a.innerText = 'Studios';
          if (txt === 'Showcase') a.innerText = 'Deliverables';
          if (txt.includes('Ventures')) {
            a.innerText = 'AIRIS AI ↗';
            a.href = 'https://github.com/saishivasanjeethpaikarao-jpg/ai--assistant';
            a.target = '_blank';
          }
          if (txt === 'Contact Us') {
            a.innerText = 'WhatsApp ↗';
            a.href = 'https://wa.me/917842076378?text=Hi%20Arena%2C%20I%20need%20help%20with%20a%20task';
            a.target = '_blank';
          }
        });
      }
    } catch (e) {
      console.warn("Footer error:", e);
    }

    try {
      // 8. General Text Replacement Sweep
      const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          const tag = node.parentElement.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'noscript') {
            return NodeFilter.FILTER_REJECT;
          }
          if (/basement\.studio|basement studio|basement/i.test(node.nodeValue)) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      });

      let node;
      while ((node = walk.nextNode())) {
        node.nodeValue = node.nodeValue
          .replace(/basement\.studio/gi, 'arenaai.in')
          .replace(/basement studio/gi, 'Arena Studio')
          .replace(/\bbasement\b/gi, 'Arena');
      }
    } catch (e) {
      console.warn("Text sweep error:", e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyArena);
  } else {
    applyArena();
  }

  setInterval(applyArena, 1000);
})();
