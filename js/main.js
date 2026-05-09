/* ══════════════════════════════════════════════════════
   ▶ STYLE DE NAVIGATION — modifiez UNIQUEMENT cette ligne
   'classic' → barre pleine largeur (recommandé notaire)
   'pill'    → barre flottante arrondie (moderne/tech)
══════════════════════════════════════════════════════ */
document.documentElement.dataset.nav = 'classic';

/* ===========================
   MOBILE NAV
=========================== */
const burger = document.getElementById('nav-burger');
const menu   = document.getElementById('nav-menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ===========================
   HEADER SCROLL SHADOW
=========================== */
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===========================
   ACTIVE NAV LINK
=========================== */
const currentFile = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentFile) {
    link.classList.add('active');
  }
});

/* ===========================
   SCROLL REVEAL
=========================== */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===========================
   ACCESSIBILITÉ
=========================== */
document.querySelectorAll(
  '.service-card__icon svg, .info-card__icon svg, .value-item__icon svg, ' +
  '.contact-info-item__icon svg, .footer-contact-item svg, ' +
  '.service-card__link svg, .text-link svg, .map-placeholder svg'
).forEach(svg => svg.setAttribute('aria-hidden', 'true'));

document.querySelectorAll('.service-card__link').forEach(link => {
  const heading = link.closest('.service-card')?.querySelector('h3');
  if (heading) link.setAttribute('aria-label', 'En savoir plus : ' + heading.textContent.trim());
});

document.querySelectorAll('.news-card .text-link, .news-full-card .text-link').forEach(link => {
  const heading = link.closest('.news-card, .news-full-card')?.querySelector('h3');
  if (heading) link.setAttribute('aria-label', 'Lire la suite : ' + heading.textContent.trim());
});

/* ===========================
   CONTACT FORM VALIDATION
=========================== */
const form = document.getElementById('contact-form');
if (form) {
  const validateField = (field) => {
    const group = field.closest('.form-group');
    const error = group?.querySelector('.field-error');
    const empty = !field.value.trim();
    const badEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());

    const invalid = empty || badEmail;
    field.classList.toggle('error', invalid);
    if (error) error.classList.toggle('show', invalid);
    return !invalid;
  };

  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll('[required]')];
    const allValid = fields.map(validateField).every(Boolean);

    if (allValid) {
      form.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) success.style.display = 'block';
    } else {
      const firstError = form.querySelector('.error');
      firstError?.focus();
    }
  });
}
