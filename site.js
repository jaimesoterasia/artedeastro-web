/* artedeastro.com: aparición al bajar, menú, WhatsApp, el ojo que sigue al cursor y las cartas que se giran. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Los enlaces con data-wa abren WhatsApp con el mensaje ya escrito para Eva.
  $$('a[data-wa]').forEach(a => { a.href = `https://wa.me/34686156081?text=${encodeURIComponent(a.dataset.wa)}`; });

  // Aparición al hacer scroll
  const els = $$('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) els.forEach(e => e.classList.add('in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => { e.style.transitionDelay = (e.dataset.delay || 0) + 'ms'; io.observe(e); });
  }

  // Menú
  const btn = document.querySelector('[data-menu]');
  const setMenu = open => {
    document.documentElement.classList.toggle('menu-open', open);
    if (btn) { btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? 'Cerrar' : 'Menú'; }
  };
  if (btn) btn.addEventListener('click', () => setMenu(!document.documentElement.classList.contains('menu-open')));
  $$('.menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // El ojo sigue al cursor
  const pupil = document.querySelector('#pupil'), eye = document.querySelector('.eye');
  if (pupil && eye && !reduce) addEventListener('pointermove', e => {
    const r = eye.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const a = Math.atan2(e.clientY - cy, e.clientX - cx), d = Math.min(9, Math.hypot(e.clientX - cx, e.clientY - cy) / 30);
    pupil.setAttribute('transform', `translate(${Math.cos(a) * d} ${Math.sin(a) * d * .6})`);
  });

  // Las cartas de sesiones se giran al tocarlas
  $$('.card').forEach(c => {
    const flip = () => { const on = c.classList.toggle('flip'); c.setAttribute('aria-pressed', String(on)); };
    c.addEventListener('click', flip);
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
  });
})();
