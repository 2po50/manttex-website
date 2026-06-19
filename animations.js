(function () {
  // Intersection Observer scroll reveal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function addReveal(selector, stagger) {
    var els = document.querySelectorAll(selector);
    els.forEach(function (el, i) {
      el.classList.add('reveal');
      if (stagger && i < 6) el.classList.add('d' + (i + 1));
      observer.observe(el);
    });
  }

  // Section antraštės
  addReveal('.section-header');

  // Produktų kortelės (su stagger)
  addReveal('.product-card', true);

  // Benefit kortelės (su stagger)
  addReveal('.benefit-item', true);

  // Kontaktų kortelės
  addReveal('.contact-item', true);

  // Atsiliepimų kortelės (su stagger)
  addReveal('.review-card', true);

  // Galerijos kortelės
  addReveal('.gallery-item', true);

  // Produkto detalė
  addReveal('.product-detail-text');
  addReveal('.product-detail-img');

  // Rating banner
  addReveal('.rating-banner');

  // Breadcrumb
  addReveal('.breadcrumb-bar');

  // Footer
  addReveal('.footer-inner');

  // Smooth scroll mygtukams su #
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// ── Plaukiojantis mygtukas + Popup forma ─────────────────────
(function () {
  // Floating button
  var floatBtn = document.createElement('button');
  floatBtn.id = 'floatBtn';
  floatBtn.className = 'float-btn';
  floatBtn.setAttribute('aria-label', 'Gauti pasiūlymą');
  floatBtn.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.18 7.59a16 16 0 006.23 6.23l1.45-1.25a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z"/></svg>' +
    '<span class="float-btn-text">Gauti pasiūlymą</span>';
  document.body.appendChild(floatBtn);

  // Popup overlay
  var overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML =
    '<div class="popup-box">' +
      '<button class="popup-close" id="popupClose" aria-label="Uždaryti">&times;</button>' +
      '<div id="popupFormWrap">' +
        '<h2 class="popup-title">Pamatuosime jūsų langus. Nemokamai.</h2>' +
        '<p class="popup-sub">15 minučių. Be įsipareigojimų. Vakare jau turėsite sąmatą.</p>' +
        '<div class="popup-blocks">' +
          '<div class="popup-block popup-block-left">' +
            '<p class="popup-block-title">KĄ ATVEŽAME PARODYTI:</p>' +
            '<ul class="popup-list">' +
              '<li><span class="popup-check">&#10003;</span>Pilną audinių pavyzdžių kolekciją</li>' +
              '<li><span class="popup-check">&#10003;</span>Skirtingus roletų mechanizmus</li>' +
              '<li><span class="popup-check">&#10003;</span>Spalvų ir tekstūrų variantus</li>' +
            '</ul>' +
          '</div>' +
          '<div class="popup-block popup-block-right">' +
            '<p class="popup-block-title">KO JUMS NEREIKĖS:</p>' +
            '<ul class="popup-list">' +
              '<li><span class="popup-check">&#10003;</span>Niekur važiuoti</li>' +
              '<li><span class="popup-check">&#10003;</span>Nieko mokėti už išmatavimą</li>' +
              '<li><span class="popup-check">&#10003;</span>Iš karto apsispręsti</li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="popup-form">' +
          '<input class="popup-input" id="p-vardas" type="text" placeholder="Jūsų vardas" autocomplete="given-name">' +
          '<input class="popup-input" id="p-tel" type="tel" placeholder="+370 ..." autocomplete="tel">' +
          '<select class="popup-input" id="p-miestas">' +
            '<option value="">Miestas</option>' +
            '<option value="Kaunas">Kaunas</option>' +
            '<option value="Klaipeda">Klaipėda</option>' +
            '<option value="Kitas">Kitas</option>' +
          '</select>' +
          '<button class="popup-btn" id="popupSubmit">UŽSAKYTI IŠMATAVIMĄ</button>' +
          '<p class="popup-trust">Susisieksime per 2 valandas darbo metu.</p>' +
        '</div>' +
      '</div>' +
      '<div class="popup-success" id="popupSuccess">' +
        '<div class="popup-success-icon">&#10003;</div>' +
        '<h3>Ačiū!</h3>' +
        '<p>Susisieksime su jumis artimiausiu metu.</p>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  function openPopup() {
    overlay.classList.add('open');
    setTimeout(function () { document.getElementById('p-vardas').focus(); }, 50);
  }
  function closePopup() {
    overlay.classList.remove('open');
    setTimeout(function () {
      document.getElementById('popupFormWrap').style.display = '';
      document.getElementById('popupSuccess').classList.remove('show');
      document.getElementById('p-vardas').value = '';
      document.getElementById('p-tel').value = '';
      document.getElementById('p-miestas').value = '';
      ['p-vardas', 'p-tel'].forEach(function (id) {
        document.getElementById(id).classList.remove('error');
      });
    }, 300);
  }

  floatBtn.addEventListener('click', openPopup);
  document.getElementById('popupClose').addEventListener('click', closePopup);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closePopup();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopup();
  });

  document.getElementById('popupSubmit').addEventListener('click', function () {
    var vardas = document.getElementById('p-vardas');
    var tel    = document.getElementById('p-tel');
    var valid  = true;
    [vardas, tel].forEach(function (f) { f.classList.remove('error'); });
    if (!vardas.value.trim()) { vardas.classList.add('error'); vardas.focus(); valid = false; }
    if (!tel.value.trim())   { tel.classList.add('error'); if (valid) tel.focus(); valid = false; }
    if (!valid) return;

    document.getElementById('popupFormWrap').style.display = 'none';
    document.getElementById('popupSuccess').classList.add('show');
    setTimeout(closePopup, 2800);
  });
})();

// ── Cookie consent banner ────────────────────────────────────
(function () {
  if (localStorage.getItem('manttex_cookie')) return;

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML =
    '<p>Ši svetainė naudoja funkcinius slapukus, kurie reikalingi tinkamam jos veikimui. ' +
    'Paspaudus "Sutinku", sutinkate su slapukų naudojimu.</p>' +
    '<div class="cookie-btns">' +
    '<button class="cookie-btn-accept" id="cookieAccept">Sutinku</button>' +
    '<button class="cookie-btn-reject" id="cookieReject">Atmesti</button>' +
    '</div>';
  document.body.appendChild(banner);

  document.getElementById('cookieAccept').addEventListener('click', function () {
    localStorage.setItem('manttex_cookie', 'accepted');
    banner.remove();
  });
  document.getElementById('cookieReject').addEventListener('click', function () {
    localStorage.setItem('manttex_cookie', 'rejected');
    banner.remove();
  });
})();

// ── Galerijos Lightbox ────────────────────────────────────────
(function () {
  var items = document.querySelectorAll('.gallery-grid .gallery-item');
  if (!items.length) return;

  var imgs = Array.from(items).map(function (item) {
    return { src: item.querySelector('img').src, label: (item.querySelector('.gallery-item-label') || {}).textContent || '', item: item };
  });
  var current = 0;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Uždaryti">&times;</button>' +
    '<button class="lightbox-arrow lightbox-prev" aria-label="Ankstesnis">&#10094;</button>' +
    '<img class="lightbox-img" src="" alt="">' +
    '<button class="lightbox-arrow lightbox-next" aria-label="Kitas">&#10095;</button>' +
    '<div class="lightbox-info"></div>';
  document.body.appendChild(overlay);

  var imgEl   = overlay.querySelector('.lightbox-img');
  var infoEl  = overlay.querySelector('.lightbox-info');

  function getVisible() {
    return imgs.filter(function (d) { return d.item.style.display !== 'none'; });
  }

  function show(globalIdx) {
    current = globalIdx;
    imgEl.src = imgs[current].src;
    imgEl.alt = imgs[current].label;
    var vis = getVisible();
    var pos = vis.indexOf(imgs[current]) + 1;
    infoEl.textContent = imgs[current].label + (vis.length > 1 ? '  ' + pos + ' / ' + vis.length : '');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function step(dir) {
    var vis = getVisible();
    var idx = vis.indexOf(imgs[current]);
    if (idx === -1) idx = 0;
    var next = (idx + dir + vis.length) % vis.length;
    show(imgs.indexOf(vis[next]));
  }

  items.forEach(function (item, i) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function () { show(i); });
  });

  overlay.querySelector('.lightbox-close').addEventListener('click', close);
  overlay.querySelector('.lightbox-prev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  overlay.querySelector('.lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  // Swipe (mobilus)
  var touchX = 0;
  overlay.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  });
})();

// ── Mobilaus meniu tobulinimas ────────────────────────────────
(function () {
  var burger = document.getElementById('burger');
  var nav    = document.getElementById('nav');
  if (!burger || !nav) return;

  // Pašaliname visus senuosius burger klausytojus (klonavimo triukas)
  var fresh = burger.cloneNode(true);
  burger.parentNode.replaceChild(fresh, burger);
  burger = fresh;

  function closeMenu() {
    nav.classList.remove('open');
    burger.classList.remove('open');
    document.querySelectorAll('.nav-item.dd-open').forEach(function (item) {
      item.classList.remove('dd-open');
    });
  }

  // Burger – pilnas valdymas
  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    var opening = !nav.classList.contains('open');
    nav.classList.toggle('open');
    burger.classList.toggle('open');
    if (!opening) {
      document.querySelectorAll('.nav-item.dd-open').forEach(function (item) {
        item.classList.remove('dd-open');
      });
    }
  });

  // Dropdown accordion – klausomės ant .nav-item (ne ant link'o)
  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (window.innerWidth > 900) return;
      if (!nav.classList.contains('open')) return;
      if (e.target.closest('.dropdown')) return;
      var isOpen = item.classList.contains('dd-open');
      document.querySelectorAll('.nav-item.dd-open').forEach(function (other) {
        other.classList.remove('dd-open');
      });
      if (!isOpen) item.classList.add('dd-open');
    });
  });

  // Uždarymas spaudžiant šalia
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });
})();

// ── Darbo valandų indikatorius ────────────────────────────────
(function () {
  var now  = new Date();
  var day  = now.getDay();   // 0=Sekmadienis, 1=Pirmadienis ... 5=Penktadienis, 6=Šeštadienis
  var hour = now.getHours();
  var isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 18;
  if (!isOpen) {
    var dot = document.querySelector('.dot');
    if (dot) dot.classList.add('closed');
  }
})();
