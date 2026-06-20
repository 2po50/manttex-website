// ── Spalvų žemėlapis ─────────────────────────────────────────
var SPALVOS = {
  blue:   { tag: "#dbeafe", tagText: "#1d4ed8", bg: "linear-gradient(135deg,#1d4ed8,#3b82f6)" },
  purple: { tag: "#ede9fe", tagText: "#6d28d9", bg: "linear-gradient(135deg,#6d28d9,#8b5cf6)" },
  green:  { tag: "#d1fae5", tagText: "#047857", bg: "linear-gradient(135deg,#047857,#10b981)" },
  red:    { tag: "#fee2e2", tagText: "#b91c1c", bg: "linear-gradient(135deg,#b91c1c,#ef4444)" },
  amber:  { tag: "#fef3c7", tagText: "#b45309", bg: "linear-gradient(135deg,#b45309,#f59e0b)" },
  cyan:   { tag: "#cffafe", tagText: "#0e7490", bg: "linear-gradient(135deg,#0e7490,#06b6d4)" },
};

var IKONU_SVG = {
  blue:   '<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="5" width="40" height="5" rx="2" fill="#2563eb"/><rect x="14" y="10" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="16" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="22" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="28" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="34" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="40" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="46" width="32" height="3" rx="1" fill="#9ca3af"/></svg>',
  purple: '<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="5" width="40" height="5" rx="2" fill="#7c3aed"/><rect x="14" y="10" width="32" height="5" rx="1" fill="#e5e7eb"/><rect x="14" y="18" width="32" height="3" rx="1" fill="#6b7280"/><rect x="14" y="24" width="32" height="5" rx="1" fill="#e5e7eb"/><rect x="14" y="32" width="32" height="3" rx="1" fill="#6b7280"/><rect x="14" y="38" width="32" height="5" rx="1" fill="#e5e7eb"/><rect x="14" y="46" width="32" height="3" rx="1" fill="#6b7280"/></svg>',
  green:  '<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="5" width="40" height="4" rx="2" fill="#059669"/><rect x="14" y="12" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="19" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="26" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="33" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="40" width="32" height="3" rx="1" fill="#9ca3af"/><rect x="14" y="47" width="32" height="3" rx="1" fill="#9ca3af"/></svg>',
  red:    '<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="5" width="40" height="4" rx="2" fill="#dc2626"/><rect x="14" y="10" width="32" height="30" rx="2" fill="#e5e7eb"/><line x1="14" y1="18" x2="46" y2="18" stroke="#9ca3af" stroke-width="2"/><line x1="14" y1="26" x2="46" y2="26" stroke="#9ca3af" stroke-width="2"/><line x1="14" y1="34" x2="46" y2="34" stroke="#9ca3af" stroke-width="2"/><path d="M14 40 Q30 50 46 40" fill="#d1d5db"/></svg>',
  amber:  '<svg viewBox="0 0 60 60" fill="none"><rect x="10" y="5" width="40" height="4" rx="2" fill="#d97706"/><rect x="14" y="10" width="32" height="40" rx="2" fill="none" stroke="#9ca3af" stroke-width="1.5"/><line x1="22" y1="10" x2="22" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="30" y1="10" x2="30" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="38" y1="10" x2="38" y2="50" stroke="#9ca3af" stroke-width="1"/><line x1="14" y1="20" x2="46" y2="20" stroke="#9ca3af" stroke-width="1"/><line x1="14" y1="30" x2="46" y2="30" stroke="#9ca3af" stroke-width="1"/><line x1="14" y1="40" x2="46" y2="40" stroke="#9ca3af" stroke-width="1"/></svg>',
  cyan:   '<svg viewBox="0 0 60 60" fill="none"><rect x="5" y="5" width="50" height="8" rx="3" fill="#0891b2"/><rect x="8" y="13" width="44" height="35" rx="2" fill="none" stroke="#9ca3af" stroke-width="1.5"/><path d="M8 13 L30 35 L52 13" stroke="#9ca3af" stroke-width="1.5" fill="none"/></svg>',
};

function set(id, tekstas) {
  var el = document.getElementById(id);
  if (el) el.textContent = tekstas;
}

function html(id, kodas) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = kodas;
}

// ── Pildome iš TURINYS ───────────────────────────────────────
function uzpildytiPuslapį() {
  var T = TURINYS;

  // Topbar
  set('tb-valandos', T.darbo_valandos_tekstas);
  var tbTel = document.getElementById('tb-telefonas');
  if (tbTel) { tbTel.textContent = T.telefonas; tbTel.href = 'tel:' + T.telefonas.replace(/\s/g, ''); }

  // Nav CTA
  set('nav-cta', T.nav_cta);

  // Hero
  set('hero-badge',    T.hero.badge);
  html('hero-antraste', T.hero.antraste.replace(/\n/g, '<br/>'));
  html('hero-aprasymas', T.hero.aprasymas.replace(/\n/g, '<br/>'));
  set('hero-btn1',     T.hero.mygtukas1);
  set('hero-btn2',     T.hero.mygtukas2);

  // Produktų kortelės
  var korteles = document.getElementById('produktu-korteles');
  if (korteles) {
    korteles.innerHTML = T.produktai.map(function(p) {
      return '<a href="' + p.id + '.html" class="product-card">' +
        '<div class="product-icon">' + (IKONU_SVG[p.spalva] || '') + '</div>' +
        '<h3>' + p.pavadinimas + '</h3>' +
        '<p>' + p.aprasymas + '</p>' +
        '<span class="card-link">Sužinoti daugiau →</span>' +
        '</a>';
    }).join('');
  }

  // Privalumai
  set('priv-antraste',  T.privalumai.antraste);
  set('priv-aprasymas', T.privalumai.aprasymas);
  var privGrid = document.getElementById('privalumai-grid');
  if (privGrid) {
    privGrid.innerHTML = T.privalumai.sarasas.map(function(b) {
      return '<div class="benefit-item">' +
        '<div class="benefit-icon">' + b.ikona + '</div>' +
        '<h3>' + b.pavadinimas + '</h3>' +
        '<p>' + b.aprasymas + '</p>' +
        '</div>';
    }).join('');
  }

  // Forma
  set('forma-antraste',  T.forma.antraste);
  set('forma-aprasymas', T.forma.aprasymas);
  set('lbl-vardas',      T.forma.laukai.vardas + ' *');
  set('lbl-email',       T.forma.laukai.el_pastas + ' *');
  set('lbl-telefonas',   T.forma.laukai.telefonas);
  set('lbl-produktas',   T.forma.laukai.produktas);
  set('lbl-zinute',      T.forma.laukai.zinute + ' *');
  set('forma-mygtukas',  T.forma.mygtukas);
  set('formSuccess',     T.forma.sekme);

  var sel = document.getElementById('produktas');
  if (sel) {
    T.forma.produktu_sarašas.forEach(function(p) {
      var opt = document.createElement('option');
      opt.textContent = p;
      sel.appendChild(opt);
    });
  }

  // Kontaktai
  set('kontaktai-antraste', T.kontaktai.antraste);
  set('k-adresas', T.adresas);
  set('k-laikas',  T.darbo_laikas);
  var kTel = document.getElementById('k-telefonas');
  if (kTel) { kTel.textContent = T.telefonas; kTel.href = 'tel:' + T.telefonas.replace(/\s/g, ''); }
  var kEmail = document.getElementById('k-email');
  if (kEmail) { kEmail.textContent = T.el_pastas; kEmail.href = 'mailto:' + T.el_pastas; }

  // Poraštė
  set('footer-tekstas', T.porastė.tekstas);
}

// ── Sticky header ────────────────────────────────────────────
var header = document.getElementById('header');
window.addEventListener('scroll', function() {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ── Burger meniu ─────────────────────────────────────────────
var burger = document.getElementById('burger');
var navRow = document.getElementById('nav');
burger.addEventListener('click', function() {
  navRow.classList.toggle('open');
});
document.addEventListener('click', function(e) {
  if (!navRow.contains(e.target) && !burger.contains(e.target)) {
    navRow.classList.remove('open');
  }
});

// ── Forma ────────────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var success = document.getElementById('formSuccess');
  success.classList.add('show');
  this.reset();
  success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ── Mobilaus meniu accordion ─────────────────────────────────
document.querySelectorAll('.nav-item > a').forEach(function(link) {
  var oh = link.getAttribute('href');
  link.removeAttribute('href');
  link.style.cursor = 'pointer';
  link.addEventListener('click', function() {
    if (window.innerWidth > 900) { window.location.href = oh; return; }
    var item = link.closest('.nav-item');
    var was = item.classList.contains('dd-open');
    document.querySelectorAll('.nav-item.dd-open').forEach(function(el) { el.classList.remove('dd-open'); });
    if (!was) item.classList.add('dd-open');
  });
});
window.__navDone = true;

// ── Paleisti ─────────────────────────────────────────────────
uzpildytiPuslapį();
