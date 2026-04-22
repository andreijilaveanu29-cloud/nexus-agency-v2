/* shared-nav.js — inject navbar & footer into every page */
(function(){
  const page = document.body.dataset.page || '';

  const navLinks = [
    {href:'index.html',     label:'Home'},
    {href:'services.html',  label:'Services'},
    {href:'process.html',   label:'Process'},
    {href:'pricing.html',   label:'Pricing'},
    {href:'contact.html',   label:'Contact'},
    {href:'free-audit.html',label:'Free Audit'},
  ];

  const logoSVG = `<svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="6"  r="3"   fill="#C9A84C"/>
    <circle cx="30" cy="24" r="3"   fill="#C9A84C"/>
    <circle cx="6"  cy="24" r="3"   fill="#C9A84C"/>
    <line x1="18" y1="9"  x2="6"  y2="21" stroke="#C9A84C" stroke-width="1.2" opacity="0.7"/>
    <line x1="18" y1="9"  x2="30" y2="21" stroke="#C9A84C" stroke-width="1.2" opacity="0.7"/>
    <line x1="6"  y1="24" x2="30" y2="24" stroke="#C9A84C" stroke-width="1.2" opacity="0.7"/>
    <circle cx="18" cy="19" r="3"   fill="none" stroke="#C9A84C" stroke-width="1.2"/>
    <circle cx="18" cy="19" r="1.2" fill="#C9A84C"/>
  </svg>`;

  const navHTML = `<nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        ${logoSVG}
        <div class="navbar-logo-text">
          <div class="name">NEXUS</div>
          <div class="tagline">Digital Agency</div>
        </div>
      </a>
      <ul class="navbar-nav" id="navMenu">
        ${navLinks.map(l=>`<li><a href="${l.href}" ${l.href===page+'.html'?'class="active"':''}>${l.label}</a></li>`).join('')}
      </ul>
      <a href="free-audit.html" class="navbar-cta">Free Audit</a>
      <div class="hamburger" id="hamburger" onclick="document.getElementById('navMenu').classList.toggle('open')">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;

  const footerHTML = `<footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:.5rem">
            ${logoSVG}
            <span style="font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:#fff">NEXUS</span>
            <span style="font-size:.6rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#C9A84C;align-self:flex-end;padding-bottom:2px">Digital Agency</span>
          </div>
          <p>Full-service digital marketing for B2B and B2C brands. Performance, transparency, and results that compound.</p>
          <p style="margin-top:.75rem"><a href="mailto:info@nexusdigital.agency" style="color:#C9A84C;font-size:.85rem">info@nexusdigital.agency</a></p>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="services.html">Google Ads</a></li>
            <li><a href="services.html">Meta Advertising</a></li>
            <li><a href="services.html">LinkedIn Ads</a></li>
            <li><a href="services.html">TikTok Ads</a></li>
            <li><a href="services.html">Email Marketing</a></li>
            <li><a href="services.html">SEO &amp; SEM</a></li>
            <li><a href="services.html">Web Design</a></li>
            <li><a href="services.html">Copywriting</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="process.html">Our Process</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Started</h4>
          <ul class="footer-links">
            <li><a href="free-audit.html">Free Audit</a></li>
            <li><a href="contact.html">Get a Quote</a></li>
            <li><a href="contact.html">Warsaw, Poland</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Nexus Digital Agency. All rights reserved.</p>
        <p>Privacy Policy &nbsp;·&nbsp; Terms of Service</p>
      </div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
