/* Dusk grass hero: sky + far grass behind the name, near grass in front.
   Grass bends away from the pointer. Embers drift up. Pauses off-screen. */
(function () {
  'use strict';
  var hero = document.getElementById('hey');
  var sky = document.getElementById('sky'), fg = document.getElementById('grass');
  if (!hero || !sky || !fg || !sky.getContext) return;
  var sc = sky.getContext('2d'), fc = fg.getContext('2d');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  var W = 0, H = 0, dpr = 1, blades = [], embers = [], t0 = performance.now();
  var ptr = { x: -9999, y: -9999 };

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function make() {
    blades = [];
    var layers = [
      { n: W / 7,  y0: .63, y1: .70, h0: .035, h1: .075, w0: 2,  w1: 4,  col: 'rgba(60,84,140,.55)',  ctx: 'sky', k: .25 },
      { n: W / 11, y0: .70, y1: .82, h0: .07,  h1: .14,  w0: 3,  w1: 7,  col: 'rgba(9,18,42,.85)',    ctx: 'sky', k: .5 },
      { n: W / 34, y0: .98, y1: 1.06, h0: .16, h1: .40,  w0: 12, w1: 30, col: '#01030a',              ctx: 'fg',  k: 1 }
    ];
    layers.forEach(function (L) {
      for (var i = 0; i < L.n; i++) {
        blades.push({
          x: rnd(-20, W + 20), y: rnd(L.y0, L.y1) * H, h: rnd(L.h0, L.h1) * H,
          w: rnd(L.w0, L.w1), lean: rnd(-.22, .22), ph: rnd(0, 6.28), sp: rnd(.6, 1.3),
          col: L.col, ctx: L.ctx, k: L.k, push: 0
        });
      }
    });
    blades.sort(function (a, b) { return a.y - b.y; });
    embers = [];
    for (var j = 0; j < 30; j++) embers.push(ember(true));
  }
  function ember(init) {
    return { x: rnd(0, W), y: init ? rnd(.5, 1) * H : H * rnd(.85, 1.02), r: rnd(.8, 2.2), v: rnd(.15, .5), ph: rnd(0, 6.28), a: rnd(.25, .9) };
  }

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth; H = hero.clientHeight;
    [sky, fg].forEach(function (c) { c.width = W * dpr; c.height = H * dpr; });
    sc.setTransform(dpr, 0, 0, dpr, 0, 0); fc.setTransform(dpr, 0, 0, dpr, 0, 0);
    make(); frame(performance.now());
  }

  function drawSky(t) {
    var hz = H * .63;
    var g = sc.createLinearGradient(0, 0, 0, hz);
    g.addColorStop(0, '#071026'); g.addColorStop(.5, '#1b3160'); g.addColorStop(.9, '#4d628f'); g.addColorStop(1, '#8b8aa0');
    sc.fillStyle = g; sc.fillRect(0, 0, W, hz + 1);
    // horizon glow
    var hg = sc.createLinearGradient(0, hz - H * .09, 0, hz + H * .02);
    hg.addColorStop(0, 'rgba(255,182,72,0)'); hg.addColorStop(1, 'rgba(255,182,72,.42)');
    sc.fillStyle = hg; sc.fillRect(0, hz - H * .09, W, H * .11);
    // ground
    var gg = sc.createLinearGradient(0, hz, 0, H);
    gg.addColorStop(0, '#182a52'); gg.addColorStop(.35, '#0a1430'); gg.addColorStop(1, '#02040c');
    sc.fillStyle = gg; sc.fillRect(0, hz, W, H - hz);
    // sun
    var sx = W * .27, sy = H * .2, pulse = 1 + Math.sin(t * .0012) * .04, R = Math.max(150, W * .12) * pulse;
    var sg = sc.createRadialGradient(sx, sy, 0, sx, sy, R);
    sg.addColorStop(0, 'rgba(255,255,255,1)'); sg.addColorStop(.06, 'rgba(255,240,205,.95)');
    sg.addColorStop(.22, 'rgba(255,190,110,.35)'); sg.addColorStop(1, 'rgba(255,182,72,0)');
    sc.fillStyle = sg; sc.fillRect(sx - R, sy - R, R * 2, R * 2);
  }

  function drawBlade(ctx, b, t) {
    var sway = Math.sin(t * .001 * b.sp + b.ph) * b.h * .05 * b.k;
    var dx = b.x - ptr.x, dy = b.y - b.h * .5 - ptr.y, d = Math.sqrt(dx * dx + dy * dy), reach = 170 + b.h * .3;
    var target = d < reach ? (dx / (d || 1)) * (1 - d / reach) * b.h * .55 : 0;
    b.push += (target - b.push) * .08;
    var bend = b.lean * b.h + sway + b.push;
    ctx.beginPath();
    ctx.moveTo(b.x - b.w / 2, b.y);
    ctx.quadraticCurveTo(b.x - b.w / 2 + bend * .25, b.y - b.h * .6, b.x + bend, b.y - b.h);
    ctx.quadraticCurveTo(b.x + b.w / 2 + bend * .25, b.y - b.h * .6, b.x + b.w / 2, b.y);
    ctx.closePath(); ctx.fillStyle = b.col; ctx.fill();
  }

  function frame(t) {
    drawSky(t);
    // embers behind name
    for (var i = 0; i < embers.length; i++) {
      var e = embers[i];
      e.y -= e.v * (reduce ? 0 : 1); e.x += Math.sin(t * .001 + e.ph) * .25 * (reduce ? 0 : 1);
      if (e.y < H * .25) Object.assign(e, ember(false));
      var fade = Math.min(1, (e.y - H * .25) / (H * .3)) * e.a;
      sc.beginPath(); sc.arc(e.x, e.y, e.r, 0, 6.283);
      sc.fillStyle = 'rgba(255,190,90,' + fade.toFixed(3) + ')'; sc.shadowColor = 'rgba(255,160,40,.9)'; sc.shadowBlur = 8; sc.fill(); sc.shadowBlur = 0;
    }
    fc.clearRect(0, 0, W, H);
    for (var k = 0; k < blades.length; k++) drawBlade(blades[k].ctx === 'sky' ? sc : fc, blades[k], t);
  }

  var running = false, raf = 0;
  function loop(t) { frame(t); raf = requestAnimationFrame(loop); }
  function start() { if (!running && !reduce) { running = true; raf = requestAnimationFrame(loop); } }
  function stop() { running = false; cancelAnimationFrame(raf); }

  hero.addEventListener('pointermove', function (e) { var r = hero.getBoundingClientRect(); ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top; });
  hero.addEventListener('pointerleave', function () { ptr.x = ptr.y = -9999; });
  new IntersectionObserver(function (en) { en[0].isIntersecting ? start() : stop(); }).observe(hero);
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 120); });
  size();
})();
