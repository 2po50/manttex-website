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

// ── Plaukiojantis mygtukas + konsultacijos forma ─────────────
(function () {
  var floatBtn = document.createElement('button');
  floatBtn.id = 'floatBtn';
  floatBtn.className = 'float-btn';
  floatBtn.setAttribute('aria-label', 'Užsakyti išmatavimą');
  floatBtn.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>' +
    '<span class="float-btn-text">Užsakyti išmatavimą</span>';
  document.body.appendChild(floatBtn);

  var overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'popupTitle');
  overlay.innerHTML =
    '<div class="popup-box">' +
      '<button class="popup-close" id="popupClose" type="button" aria-label="Uždaryti">&times;</button>' +
      '<div class="popup-layout">' +
        '<aside class="popup-trust-panel">' +
          '<span class="popup-eyebrow">Manttex konsultacija</span>' +
          '<h2>Nemokamas vizitas į namus</h2>' +
          '<p>Išmatuosime langus, atsivešime audinių pavyzdžius ir padėsime išsirinkti tinkamiausią sprendimą.</p>' +
          '<ul><li>&#10003; Matavimas – 0 €</li><li>&#10003; Be įsipareigojimų</li><li>&#10003; Audinių pavyzdžiai vietoje</li></ul>' +
          '<small>Vizito laiką suderinsime telefonu.</small>' +
        '</aside>' +
        '<div id="popupFormWrap" class="popup-form-panel">' +
          '<div class="popup-step-nav" aria-live="polite"><span id="popupStepNavContact" class="active">Kontaktai</span><span class="popup-step-arrow">&#8594;</span><span id="popupStepNavNeeds">Poreikiai</span></div>' +
          '<form class="popup-form" id="popupForm" novalidate>' +
          '<div class="popup-step is-active" id="popupStep1">' +
            '<h3 class="popup-step-title">Kur galime atvykti?</h3>' +
            '<p class="popup-step-sub">Palikite telefono numerį ir miestą. Visa kita suderinsime kartu.</p>' +
            '<div class="popup-fields-grid">' +
              '<div class="popup-field"><label class="popup-label" for="p-tel">Telefonas</label><input class="popup-input" id="p-tel" name="phone" type="tel" placeholder="+370 ..." autocomplete="tel" inputmode="tel" aria-describedby="p-tel-error"><span class="popup-error" id="p-tel-error"></span></div>' +
              '<div class="popup-field"><label class="popup-label" for="p-miestas">Miestas</label><input class="popup-input" id="p-miestas" name="city" type="text" placeholder="Pvz. Kaunas" autocomplete="address-level2" aria-describedby="p-miestas-error"><span class="popup-error" id="p-miestas-error"></span></div>' +
            '</div>' +
            '<button class="popup-btn" id="popupContinue" type="button">Tęsti &#8594;</button>' +
            '<p class="popup-trust">Užtruks mažiau nei minutę.</p>' +
          '</div>' +
          '<div class="popup-step" id="popupStep2" hidden>' +
            '<h3 class="popup-step-title">Trumpai apie jūsų langus</h3>' +
            '<p class="popup-step-sub">Pasakykite, kuo domitės – likusias detales ir vizito laiką suderinsime telefonu.</p>' +
            '<div class="popup-field"><label class="popup-label" for="p-vardas">Vardas</label><input class="popup-input" id="p-vardas" name="name" type="text" placeholder="Jūsų vardas" autocomplete="name" aria-describedby="p-vardas-error"><span class="popup-error" id="p-vardas-error"></span></div>' +
            '<fieldset class="popup-choice-group"><legend class="popup-label">Kas jus domina?</legend><div class="popup-product-grid" data-choice="productInterest"><button type="button" class="popup-product-card" data-value="Roletai">Roletai<span>&#10003;</span></button><button type="button" class="popup-product-card" data-value="Žaliuzės">Žaliuzės<span>&#10003;</span></button><button type="button" class="popup-product-card" data-value="Tinkleliai">Tinkleliai<span>&#10003;</span></button><button type="button" class="popup-product-card" data-value="Dar renkuosi">Dar renkuosi<span>&#10003;</span></button></div><span class="popup-choice-error" id="p-product-error"></span></fieldset>' +
            '<button class="popup-note-toggle" id="popupNoteToggle" type="button">＋ Pridėti komentarą</button>' +
            '<div class="popup-field popup-note-field" id="popupNoteField" hidden><label class="popup-label" for="p-pastaba">Komentaras <span>(nebūtina)</span></label><textarea class="popup-input popup-note" id="p-pastaba" name="note" rows="2" maxlength="500" placeholder="Pvz. domina 3 svetainės langai"></textarea></div>' +
            '<div class="popup-step-actions"><button class="popup-back" id="popupBack" type="button">&#8592; Atgal</button><button class="popup-btn" id="popupSubmit" type="submit">Rezervuoti nemokamą vizitą &#8594;</button></div>' +
            '<p class="popup-trust">Nemokamai · Be įsipareigojimų</p><p class="popup-privacy">Laiką suderinsime telefonu. Jūsų duomenis naudosime tik dėl šios užklausos.</p>' +
          '</div>' +
          '</form>' +
        '</div>' +
        '<div class="popup-success" id="popupSuccess" hidden><div class="popup-success-icon">&#10003;</div><h3>Vizito užklausa gauta!</h3><p id="popupSuccessText">Ačiū! Netrukus susisieksime telefonu ir suderinsime jums patogų laiką.</p><div class="popup-summary" id="popupSummary"></div><button class="popup-btn popup-success-close" id="popupSuccessClose" type="button">Uždaryti</button></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  var formState = { name: '', phone: '', city: '', productInterest: '', note: '' };
  var lastTrigger = null;
  var step = 1;
  var formWrap = document.getElementById('popupFormWrap');
  var form = document.getElementById('popupForm');
  var success = document.getElementById('popupSuccess');

  function field(id) { return document.getElementById(id); }
  function setError(id, message) {
    var input = field(id);
    var error = field(id + '-error');
    input.classList.toggle('error', Boolean(message));
    error.textContent = message || '';
  }
  function updateProgress() {
    field('popupStepNavContact').classList.toggle('active', step === 1);
    field('popupStepNavContact').classList.toggle('complete', step === 2);
    field('popupStepNavNeeds').classList.toggle('active', step === 2);
  }
  function showStep(nextStep) {
    step = nextStep;
    field('popupStep1').hidden = step !== 1;
    field('popupStep2').hidden = step !== 2;
    updateProgress();
    setTimeout(function () { field(step === 1 ? 'p-tel' : 'p-vardas').focus(); }, 50);
  }
  function resetPopup() {
    step = 1;
    formState = { name: '', phone: '', city: '', productInterest: '', note: '' };
    form.reset();
    formWrap.hidden = false;
    success.hidden = true;
    document.querySelectorAll('.popup-error').forEach(function (error) { error.textContent = ''; });
    document.querySelectorAll('.popup-input').forEach(function (input) { input.classList.remove('error'); });
    document.querySelectorAll('.popup-product-card').forEach(function (card) { card.classList.remove('selected'); card.setAttribute('aria-pressed', 'false'); });
    field('popupNoteField').hidden = true;
    field('popupNoteToggle').textContent = '＋ Pridėti komentarą';
    field('p-product-error').textContent = '';
    updateProgress();
  }
  function openPopup() {
    lastTrigger = document.activeElement;
    resetPopup();
    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    setTimeout(function () { field('p-tel').focus(); }, 50);
  }
  function closePopup() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
    resetPopup();
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  }
  function validateStep1() {
    var phone = field('p-tel').value.trim();
    var city = field('p-miestas').value.trim();
    var valid = true;
    setError('p-tel', ''); setError('p-miestas', '');
    if (!phone) { setError('p-tel', 'Įveskite telefono numerį.'); valid = false; }
    else if (!/^(?:\+370|370|8)[\s-]?\d[\s\d-]{6,13}$/.test(phone)) { setError('p-tel', 'Įveskite galiojantį telefono numerį.'); valid = false; }
    if (!city) { setError('p-miestas', 'Įveskite miestą.'); valid = false; }
    if (valid) { formState.phone = phone; formState.city = city; }
    return valid;
  }
  function renderSummary() {
    var summary = field('popupSummary');
    summary.textContent = '';
    [['Telefonas', formState.phone], ['Miestas', formState.city], ['Domina', formState.productInterest]].forEach(function (item) {
      var row = document.createElement('span');
      var label = document.createElement('strong');
      label.textContent = item[0];
      row.appendChild(label);
      row.appendChild(document.createTextNode(item[1]));
      summary.appendChild(row);
    });
  }

  floatBtn.addEventListener('click', openPopup);
  field('popupClose').addEventListener('click', closePopup);
  field('popupSuccessClose').addEventListener('click', closePopup);
  field('popupContinue').addEventListener('click', function () { if (validateStep1()) showStep(2); });
  field('popupBack').addEventListener('click', function () { showStep(1); });
  field('popupNoteToggle').addEventListener('click', function () {
    var noteField = field('popupNoteField');
    noteField.hidden = !noteField.hidden;
    this.textContent = noteField.hidden ? '＋ Pridėti komentarą' : '− Paslėpti komentarą';
    if (!noteField.hidden) field('p-pastaba').focus();
  });
  overlay.addEventListener('click', function (event) { if (event.target === overlay) closePopup(); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && overlay.classList.contains('open')) closePopup(); });
  document.querySelectorAll('.popup-product-card').forEach(function (card) {
    card.setAttribute('aria-pressed', 'false');
    card.addEventListener('click', function () {
      document.querySelectorAll('.popup-product-card').forEach(function (item) { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
      card.classList.add('selected');
      card.setAttribute('aria-pressed', 'true');
      formState.productInterest = card.getAttribute('data-value');
      field('p-product-error').textContent = '';
    });
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = field('p-vardas').value.trim();
    setError('p-vardas', '');
    if (!name) { setError('p-vardas', 'Įveskite vardą.'); field('p-vardas').focus(); return; }
    if (!formState.productInterest) { field('p-product-error').textContent = 'Pasirinkite, kuo labiausiai domitės.'; return; }
    formState.name = name;
    formState.note = field('p-pastaba').value.trim();
    var submit = field('popupSubmit');
    submit.disabled = true;
    submit.textContent = 'Siunčiama...';
    setTimeout(function () {
      submit.disabled = false;
      submit.textContent = 'Rezervuoti nemokamą vizitą →';
      formWrap.hidden = true;
      field('popupSuccessText').textContent = 'Ačiū, ' + formState.name + '. Netrukus susisieksime telefonu ir suderinsime jums patogų laiką.';
      renderSummary();
      success.hidden = false;
    }, 650);
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

// ── Produkto foto albumas ─────────────────────────────────────
(function () {
  var wrap = document.querySelector('.pdp-gallery');
  if (!wrap) return;

  var mainImg  = wrap.querySelector('.pdp-gallery-img');
  if (!mainImg) return;
  var thumbs   = Array.from(wrap.querySelectorAll('.pdp-thumb'));
  var prevBtn  = wrap.querySelector('.pdp-gbtn-prev');
  var nextBtn  = wrap.querySelector('.pdp-gbtn-next');
  var counter  = wrap.querySelector('.pdp-gcounter');
  var srcs     = thumbs.map(function (t) { return t.src; });
  var cur      = 0;

  if (srcs.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    if (counter) counter.style.display = 'none';
  }

  var thumbsEl = wrap.querySelector('.pdp-thumbs');
  var mainEl   = wrap.querySelector('.pdp-gallery-main');

  var bgEl = document.createElement('div');
  bgEl.className = 'pdp-gallery-bg';
  mainEl.insertBefore(bgEl, mainEl.firstChild);
  function updateBg(src) { bgEl.style.backgroundImage = 'url(' + src + ')'; }
  updateBg(mainImg.src);

  function goTo(i) {
    cur = (i + srcs.length) % srcs.length;
    mainImg.style.opacity = '0';
    setTimeout(function () {
      mainImg.src = srcs[cur];
      updateBg(srcs[cur]);
      mainImg.style.opacity = '1';
    }, 150);
    thumbs.forEach(function (t, idx) { t.classList.toggle('active', idx === cur); });
    if (counter) counter.textContent = (cur + 1) + ' / ' + srcs.length;
  }

  thumbs.forEach(function (t, i) { t.addEventListener('click', function () { goTo(i); }); });
  if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(cur - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(cur + 1); });

  function fitThumbs() {
    if (!thumbsEl || !mainEl) return;
    thumbsEl.style.maxWidth = mainEl.offsetWidth + 'px';
  }
  fitThumbs();
  window.addEventListener('resize', fitThumbs);

  wrap.querySelector('.pdp-gallery-main').addEventListener('click', function () { openLb(cur); });

  function openLb(start) {
    var idx = start;
    var lb = document.createElement('div');
    lb.className = 'lightbox-overlay';
    lb.innerHTML =
      '<button class="lightbox-close">&times;</button>' +
      '<button class="lightbox-arrow lightbox-prev">&#10094;</button>' +
      '<img class="lightbox-img" src="' + srcs[idx] + '" alt="">' +
      '<button class="lightbox-arrow lightbox-next">&#10095;</button>' +
      '<div class="lightbox-info">' + (idx + 1) + ' / ' + srcs.length + '</div>';
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';
    setTimeout(function () { lb.classList.add('open'); }, 10);

    var lbImg  = lb.querySelector('.lightbox-img');
    var lbInfo = lb.querySelector('.lightbox-info');

    function lbGo(i) {
      idx = (i + srcs.length) % srcs.length;
      lbImg.src = srcs[idx];
      lbInfo.textContent = (idx + 1) + ' / ' + srcs.length;
    }
    function closeLb() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(function () { lb.remove(); }, 300);
    }

    lb.querySelector('.lightbox-close').addEventListener('click', closeLb);
    lb.querySelector('.lightbox-prev').addEventListener('click', function (e) { e.stopPropagation(); lbGo(idx - 1); });
    lb.querySelector('.lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); lbGo(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });

    var tx = 0;
    lb.addEventListener('touchstart', function (e) { tx = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) lbGo(dx < 0 ? idx + 1 : idx - 1);
    });
    document.addEventListener('keydown', function kh(e) {
      if (!lb.parentNode) { document.removeEventListener('keydown', kh); return; }
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') lbGo(idx - 1);
      if (e.key === 'ArrowRight') lbGo(idx + 1);
    });
  }
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

  // Dropdown accordion (kitiem puslapiams – index.html naudoja main.js)
  if (!window.__navDone) {
    document.querySelectorAll('.nav-item > a').forEach(function (link) {
      var oh = link.getAttribute('href');
      link.removeAttribute('href');
      link.style.cursor = 'pointer';
      link.addEventListener('click', function () {
        if (window.innerWidth > 900) { window.location.href = oh; return; }
        var item = link.closest('.nav-item');
        var was = item.classList.contains('dd-open');
        document.querySelectorAll('.nav-item.dd-open').forEach(function (el) { el.classList.remove('dd-open'); });
        if (!was) item.classList.add('dd-open');
      });
    });
  }

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
