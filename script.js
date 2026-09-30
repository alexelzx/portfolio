(function () {
  'use strict';
  var D = DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var safeUrl = function (u) { return /^(https?:|mailto:|assets\/|\.\/|\/)/i.test(u) || /^[\w./-]+\.(?:pdf|mp3|mov|mp4|webm|png|jpg|jpeg|svg)$/i.test(u) ? u : '#'; };

  document.title = D.name + ' — ' + D.role;
  $('#footName').textContent = '© ' + new Date().getFullYear() + ' ' + D.name;

  /* ---------- Nav ---------- */
  var sections = [['hey', 'Hey'], ['about', 'About'], ['work', 'Work'], ['media', 'Media'], ['stack', 'Stack'], ['certs', 'Certs'], ['contact', 'Chat']];
  $('#navLinks').innerHTML = sections.map(function (s) {
    return '<a href="#' + s[0] + '" data-s="' + s[0] + '">' + s[1] + '</a>';
  }).join('');
  var links = document.querySelectorAll('#navLinks a');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) {
          var on = a.dataset.s === e.target.id;
          a.classList.toggle('on', on);
          if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(function (s) { var el = document.getElementById(s[0]); if (el) io.observe(el); });

  $('#themeBtn').addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---------- Hero ---------- */
  $('#heroLine').innerHTML = D.intro;
  var actions = '<a class="btn ember" href="#work">See my work</a><a class="btn light" href="#contact">Get in touch</a>';
  if (D.cv) actions += '<a class="btn light" href="' + esc(safeUrl(D.cv)) + '" download>Download CV</a>';
  $('#heroActions').innerHTML = actions;

  var words = D.name.split(' ');
  var lines = words.length > 2 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : words;
  var nameEl = $('#heroName');
  nameEl.innerHTML = lines.map(function (l) { return '<span class="ln"><span>' + esc(l) + '</span></span>'; }).join('');
  nameEl.setAttribute('aria-label', D.name);
  function fitName() {
    nameEl.style.fontSize = '100px';
    var box = nameEl.clientWidth, widest = 1;
    nameEl.querySelectorAll('.ln > span').forEach(function (s) { widest = Math.max(widest, s.offsetWidth); });
    nameEl.style.fontSize = Math.min(100 * box / widest, 300) + 'px';
  }
  fitName();
  window.addEventListener('resize', fitName);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);

  /* ---------- About ---------- */
  $('#statement').innerHTML = D.statement;
  $('#aboutText').innerHTML = D.about.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  $('#facts').innerHTML = D.facts.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('');
  function timeline(items) {
    return items.map(function (x) {
      var meta = [x.org, x.place, x.period].filter(Boolean).map(esc).join(' • ');
      var pts = x.points ? '<ul>' + x.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '';
      return '<li><div class="t-role">' + esc(x.role) + '</div><div class="t-meta">' + meta + '</div>' + pts + '</li>';
    }).join('');
  }
  $('#experience').innerHTML = timeline(D.experience);
  $('#education').innerHTML = timeline(D.education);
  $('#languages').innerHTML = D.languages.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('');
  $('#interests').innerHTML = D.interests.map(function (i) { return '<li><b>' + esc(i[0]) + '</b><span>' + esc(i[1]) + '</span></li>'; }).join('');
  $('#workload').innerHTML = (D.workload || []).map(function (w) {
    return '<article class="workload-item"><strong>' + esc(w[0]) + '</strong><div><b>' + esc(w[1]) + '</b><span>' + esc(w[2]) + '</span></div></article>';
  }).join('');

  /* ---------- Chips helper ---------- */
  function chipGroup(mount, labels, onPick) {
    mount.innerHTML = labels.map(function (l, i) {
      return '<button class="chip" type="button" aria-pressed="' + (i === 0) + '">' + esc(l) + '</button>';
    }).join('');
    mount.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      mount.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c === b); });
      onPick(b.textContent);
    });
  }

  /* ---------- Work workspace ---------- */
  var P = D.projects, side = $('#wsTabs'), panel = $('#wsPanel');
  var groupsSeen = [], sideHTML = '';
  P.forEach(function (p, i) {
    if (groupsSeen.indexOf(p.group) < 0) { groupsSeen.push(p.group); sideHTML += '<p class="ws-group" role="presentation">' + esc(p.group) + '</p>'; }
    var sub = [p.status, p.year].filter(Boolean).map(esc).join(' · ');
    sideHTML += '<button class="ws-tab" role="tab" id="tab' + i + '" data-i="' + i + '" aria-controls="wsPanel" aria-selected="false" tabindex="-1"><b>' + esc(p.title) + '</b><small>' + sub + '</small></button>';
  });
  side.innerHTML = sideHTML;
  var tabs = side.querySelectorAll('.ws-tab');

  function showProject(i, focus) {
    var p = P[i];
    tabs.forEach(function (t, k) { t.setAttribute('aria-selected', k === i); t.tabIndex = k === i ? 0 : -1; });
    panel.setAttribute('aria-labelledby', 'tab' + i);
    var notes = (p.notes || []).map(function (n) { return '<div class="note">' + esc(n) + '</div>'; }).join('');
    var stack = (p.stack || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');
    var image = p.image ? '<figure class="p-image"><img src="' + esc(safeUrl(p.image)) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy"></figure>' : '';
    var lk = (p.links || []).map(function (l, k) {
      return '<a class="btn ' + (k ? 'line' : '') + '" href="' + esc(safeUrl(l[1])) + '" target="_blank" rel="noopener">' + esc(l[0]) + '</a>';
    }).join('');
    panel.innerHTML = '<div class="p-in">' + image + '<div class="p-title"><h3>' + esc(p.title) + '</h3>' +
      (p.status ? '<span class="badge">' + esc(p.status) + '</span>' : '') + (p.year ? '<span class="p-year">' + esc(p.year) + '</span>' : '') + '</div>' +
      '<p class="p-desc">' + esc(p.desc) + '</p>' +
      (notes ? '<div class="notes">' + notes + '</div>' : '') +
      (stack ? '<ul class="p-stack">' + stack + '</ul>' : '') +
      (lk ? '<div class="p-links">' + lk + '</div>' : '') + '</div>';
    if (focus) tabs[i].focus();
  }
  side.addEventListener('click', function (e) { var b = e.target.closest('.ws-tab'); if (b) showProject(+b.dataset.i); });
  side.addEventListener('keydown', function (e) {
    var cur = +document.activeElement.dataset.i, n = P.length, nx = null;
    if (isNaN(cur)) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nx = (cur + 1) % n;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') nx = (cur - 1 + n) % n;
    else if (e.key === 'Home') nx = 0; else if (e.key === 'End') nx = n - 1;
    if (nx !== null) { e.preventDefault(); showProject(nx, true); }
  });
  showProject(0);

  /* ---------- Media ---------- */
  var mediaMount = $('#mediaGrid');
  var mediaHTML = '';
  mediaHTML += (D.media.audio || []).map(function (a) {
    var landing = a.file.toLowerCase().indexOf('landing') > -1;
    var art = landing ? 'LANDING' : 'DAY<br>ENDS';
    return '<article class="media-card media-audio"><div class="audio-art"><span>alexelzx</span><b' + (landing ? ' class="art-landing"' : '') + '>' + art + '</b></div><div class="media-copy"><span class="media-kind">Music production</span><h3>' + esc(a.title) + '</h3><p>' + esc(a.description) + '</p><audio controls preload="metadata" src="' + esc(safeUrl(a.file)) + '"></audio></div></article>';
  }).join('');
  function imageCarousel(items, kind, id) {
    var cards = (items || []).map(function (item) {
      return '<button class="media-card image-card" type="button" data-media-src="' + esc(safeUrl(item.file)) + '" data-media-title="' + esc(item.title) + '" data-media-description="' + esc(item.description || '') + '"><img src="' + esc(safeUrl(item.file)) + '" alt="' + esc(item.title) + '" loading="lazy"><span class="media-copy"><span class="media-kind">' + esc(kind) + '</span><strong>' + esc(item.title) + '</strong>' + (item.description ? '<span class="image-caption">' + esc(item.description) + '</span>' : '') + '</span></button>';
    }).join('');
    return '<section class="media-carousel" aria-labelledby="' + id + '-title"><div class="media-carousel-head"><div><span class="media-kind">' + esc(kind) + '</span><h3 id="' + id + '-title">Selected work</h3></div><div class="media-controls"><button class="carousel-btn" type="button" data-carousel="prev" aria-label="Previous ' + esc(kind.toLowerCase()) + '">←</button><button class="carousel-btn" type="button" data-carousel="next" aria-label="Next ' + esc(kind.toLowerCase()) + '">→</button></div></div><div class="media-rail" data-carousel-rail>' + cards + '</div></section>';
  }
  mediaHTML += imageCarousel(D.media.adWork, 'Example advertising', 'ad-work');
  mediaHTML += imageCarousel(D.media.photos, 'Photography', 'photography');
  var equipment = (D.media.equipment || []).map(function (e) { return '<li><b>' + esc(e[0]) + '</b><span>' + esc(e[1]) + '</span></li>'; }).join('');
  mediaHTML += '<article class="media-card kit-card"><div class="media-copy"><span class="media-kind">Field kit</span><h3>Capture the moment</h3><p>Equipment for documenting people, places and ideas.</p><ul class="kit-list">' + equipment + '</ul></div></article>';
  mediaHTML += '<a class="media-card podcast-card" href="' + esc(safeUrl(D.podcast)) + '" target="_blank" rel="noopener"><span class="media-kind">Listen on Spotify</span><h3>My podcast</h3><p>Conversations, ideas and subjects worth staying with.</p><span class="podcast-arrow">↗</span></a>';
  mediaMount.innerHTML = mediaHTML;
  mediaMount.addEventListener('click', function (e) {
    var control = e.target.closest('[data-carousel]');
    if (control) {
      var rail = control.closest('.media-carousel').querySelector('[data-carousel-rail]');
      rail.scrollBy({ left: (control.dataset.carousel === 'next' ? 1 : -1) * rail.clientWidth * .82, behavior: 'smooth' });
      return;
    }
    var card = e.target.closest('.image-card');
    if (!card) return;
    $('#mediaBody').innerHTML = '<div class="media-dialog-image"><img src="' + esc(card.dataset.mediaSrc) + '" alt="' + esc(card.dataset.mediaTitle) + '"></div><div class="dlg-meta"><h3>' + esc(card.dataset.mediaTitle) + '</h3>' + (card.dataset.mediaDescription ? '<p>' + esc(card.dataset.mediaDescription) + '</p>' : '') + '</div>';
    $('#mediaDialog').showModal();
  });
  $('#mediaClose').addEventListener('click', function () { $('#mediaDialog').close(); });
  $('#mediaDialog').addEventListener('click', function (e) { if (e.target === $('#mediaDialog')) $('#mediaDialog').close(); });

  /* ---------- Skills ---------- */
  var skillMount = $('#skills');
  function iconTone(name) {
    var n = name.toLowerCase();
    if (n.indexOf('adobe') > -1) return '#ed1c24';
    if (n.indexOf('microsoft') > -1 || n.indexOf('power bi') > -1) return '#0078d4';
    if (n.indexOf('google') > -1 || n.indexOf('gemini') > -1 || n.indexOf('looker') > -1) return '#4285f4';
    if (n.indexOf('zoho') > -1) return '#e42527';
    if (n.indexOf('atlassian') > -1 || n.indexOf('jira') > -1 || n.indexOf('confluence') > -1 || n.indexOf('loom') > -1) return '#1868db';
    if (n.indexOf('meta') > -1) return '#0866ff';
    if (n.indexOf('canva') > -1) return '#00c4cc';
    if (n.indexOf('cloudflare') > -1) return '#f48120';
    if (n.indexOf('github') > -1) return '#24292f';
    if (n.indexOf('firebase') > -1) return '#ffca28';
    if (n.indexOf('auth0') > -1) return '#eb5424';
    return '#6d5dfc';
  }
  function initials(name) {
    var words = name.replace(/[/-]/g, ' ').split(/\s+/).filter(Boolean);
    return (words.length > 1 ? words.slice(0, 3).map(function (w) { return w.charAt(0); }).join('') : name.slice(0, 2)).toUpperCase();
  }
  function renderSkills(cat) {
    skillMount.innerHTML = D.skills[cat].map(function (s) {
      var tone = iconTone(s.name), mark = initials(s.name);
      var fallback = '<div class="fallback" style="--brand:' + tone + '">' + esc(mark) + '</div>';
      var src = s.logo || (s.slug ? 'https://cdn.simpleicons.org/' + encodeURIComponent(s.slug) + '/' + tone.slice(1) : '');
      if (!src) return '<div class="logo">' + fallback + '<span>' + esc(s.name) + '</span></div>';
      return '<div class="logo"><img src="' + esc(src) + '" alt="" loading="lazy" width="44" height="44"' + (s.mono ? ' class="mono"' : '') + ' data-fb="' + esc(mark) + '" data-brand="' + esc(tone) + '"><span>' + esc(s.name) + '</span></div>';
    }).join('');
    skillMount.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function () {
        var f = document.createElement('div'); f.className = 'fallback'; f.style.setProperty('--brand', img.dataset.brand); f.textContent = img.dataset.fb; img.replaceWith(f);
      });
    });
  }
  var cats = Object.keys(D.skills);
  chipGroup($('#skillTabs'), cats, renderSkills);
  renderSkills(cats[0]);

  /* ---------- Certificates ---------- */
  function fmtDate(d) {
    if (!d) return '';
    var p = d.split('-'); var dt = new Date(+p[0], (+p[1] || 1) - 1, +(p[2] || 1));
    var options = { month: 'short', year: 'numeric' }; if (p[2]) options.day = 'numeric';
    return isNaN(dt) ? d : dt.toLocaleDateString('en-GB', options);
  }
  var certs = D.certificates.slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
  var certState = { cat: 'All', q: '' };
  function certMeta(c) { return [c.issuer, fmtDate(c.date), c.validUntil ? 'Valid until ' + fmtDate(c.validUntil) : ''].filter(Boolean).map(esc).join(' · '); }
  function certFace(c) {
    if (c.image) return '<img src="' + esc(c.image) + '" alt="' + esc(c.title) + ' certificate" loading="lazy">';
    return '<figure class="gen"><small>Certificate of completion</small><strong>' + esc(c.title) + '</strong><span>' + certMeta(c) + '</span></figure>';
  }
  function renderCerts() {
    var q = certState.q.toLowerCase();
    var list = certs.filter(function (c) {
      return (certState.cat === 'All' || c.category === certState.cat) &&
        (!q || (c.title + ' ' + c.issuer + ' ' + c.category).toLowerCase().indexOf(q) > -1);
    });
    $('#certs-grid').innerHTML = list.map(function (c) {
      return '<button class="cert" type="button" data-i="' + certs.indexOf(c) + '"><div class="cert-face"><div class="cert-thumb">' + certFace(c) + '</div></div>' +
        '<div class="cert-info"><b>' + esc(c.title) + '</b><span>' + certMeta(c) + '</span></div></button>';
    }).join('');
    $('#certEmpty').hidden = list.length > 0;
  }
  var certCats = ['All'];
  certs.forEach(function (c) { if (c.category && certCats.indexOf(c.category) < 0) certCats.push(c.category); });
  chipGroup($('#certFilters'), certCats, function (cat) { certState.cat = cat; renderCerts(); });
  $('#certSearch').addEventListener('input', function (e) { certState.q = e.target.value; renderCerts(); });
  renderCerts();
  if (D.moreCerts && D.moreCerts.count) {
    $('#certMore').innerHTML = '+ ' + D.moreCerts.count + ' more certifications. <a href="' + esc(safeUrl(D.moreCerts.url)) + '" target="_blank" rel="noopener">See the full list on LinkedIn</a>';
  }
  var dlg = $('#certDialog');
  $('#certs-grid').addEventListener('click', function (e) {
    var b = e.target.closest('.cert'); if (!b) return;
    var c = certs[+b.dataset.i];
    $('#certBody').innerHTML = '<div class="dlg-view"><div class="cert-thumb">' + certFace(c) + '</div></div>' +
      '<div class="dlg-meta"><h3>' + esc(c.title) + '</h3><p>' + certMeta(c) + (c.id ? ' · ID ' + esc(c.id) : '') + '</p>' +
      (c.url ? '<a class="btn" href="' + esc(safeUrl(c.url)) + '" target="_blank" rel="noopener">Verify credential</a>' : '') + '</div>';
    dlg.showModal();
  });
  $('#certClose').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- Contact ---------- */
  $('#contactLede').textContent = 'Have a project, a role or a question? Reach me through my university address or LinkedIn.';
  var mail = $('#mailBtn'); mail.textContent = D.email; mail.href = 'mailto:' + D.email;
  var labels = { linkedin: 'LinkedIn', github: 'GitHub', x: 'X', instagram: 'Instagram', website: 'Website', efprp: 'EFPRP website', bookings: 'Book a Teams call' };
  var socialIcons = { linkedin: 'assets/linkedin.png', github: 'assets/github.png', x: 'assets/x.png', instagram: 'assets/instagram.png', efprp: 'assets/efprp.png', bookings: 'assets/video-call.png' };
  var soc = Object.keys(D.social).map(function (k) {
    var label = labels[k] || (k.charAt(0).toUpperCase() + k.slice(1));
    var icon = socialIcons[k] ? '<img src="' + esc(socialIcons[k]) + '" alt="" width="22" height="22">' : '';
    var call = k === 'bookings';
    return '<li><a class="' + (call ? 'social-call' : 'social-icon') + '" href="' + esc(safeUrl(D.social[k])) + '" target="_blank" rel="noopener" aria-label="' + esc(label) + '" title="' + esc(label) + '">' + icon + (call ? '<span>' + label + '</span>' : '') + '</a></li>';
  });
  $('#socials').innerHTML = soc.join('');

  /* Dark grass tufts rising into the contact section */
  (function () {
    var s = 7, r = function () { s = (s * 16807) % 2147483647; return s / 2147483647; };
    var d = '';
    for (var i = 0; i < 110; i++) {
      var x = r() * 1440, h = 20 + r() * 88, w = 5 + r() * 14, lean = (r() - .5) * 40;
      d += 'M' + (x - w / 2).toFixed(1) + ' 121Q' + (x - w / 2 + lean * .3).toFixed(1) + ' ' + (121 - h * .6).toFixed(1) + ' ' + (x + lean).toFixed(1) + ' ' + (121 - h).toFixed(1) +
           'Q' + (x + w / 2 + lean * .3).toFixed(1) + ' ' + (121 - h * .6).toFixed(1) + ' ' + (x + w / 2).toFixed(1) + ' 121Z';
    }
    $('#tufts').innerHTML = '<path d="' + d + '"/><rect y="118" width="1440" height="4"/>';
  })();

  /* Reveal content as it enters the viewport, with a short stagger within each group. */
  (function () {
    var selectors = [
      '.band .wrap', '.path > div', '#work > .h2', '#work > .lede', '.ws',
      '#media > .h2', '#media > .lede', '.media-card', '#stack > .h2', '#stack > .chips',
      '#skills .logo', '#certs > .h2', '.cert-tools', '.cert', '#contact .wrap > *'
    ];
    var targets = document.querySelectorAll(selectors.join(','));
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var reveal = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', (i % 6) * 0.06 + 's');
      reveal.observe(el);
    });
  })();
})();
