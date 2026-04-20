/* ================================================================
   MAIN.JS — AFRIK FEU ET SERVICES
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────
     1. NAVBAR — Scroll + Active link
  ────────────────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const sections  = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Shrink topbar on scroll
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Active link highlight
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 110) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  }, { passive: true });


  /* ──────────────────────────────────────
     2. HAMBURGER — Mobile drawer
  ────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('nav-drawer');

  window.toggleMenu = function () {
    const open = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  // Close drawer on outside click
  document.addEventListener('click', (e) => {
    if (
      drawer.classList.contains('open') &&
      !drawer.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });


  /* ──────────────────────────────────────
     3. SCROLL REVEAL — Intersection Observer
  ────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Ne déclencher qu'une fois
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ──────────────────────────────────────
     4. FORMULAIRE — Validation + Feedback
  ────────────────────────────────────── */
  window.submitForm = function () {
    const nom     = document.getElementById('f-nom').value.trim();
    const tel     = document.getElementById('f-tel').value.trim();
    const message = document.getElementById('f-msg').value.trim();
    const btn     = document.getElementById('submit-btn');

    // Reset errors
    document.querySelectorAll('.field-error').forEach(e => e.remove());

    let valid = true;
    const showError = (id, msg) => {
      const field = document.getElementById(id);
      const err   = document.createElement('span');
      err.className   = 'field-error';
      err.textContent = msg;
      err.style.cssText = 'display:block;color:#E8620A;font-size:12px;margin-top:4px;font-weight:600;';
      field.parentNode.appendChild(err);
      field.style.borderColor = '#E8620A';
      valid = false;
    };

    if (!nom)     showError('f-nom', '⚠ Le nom est requis');
    if (!tel)     showError('f-tel', '⚠ Le téléphone est requis');
    if (!message) showError('f-msg', '⚠ Le message est requis');

    if (!valid) return;

    // Feedback visuel
    btn.textContent = '⏳ Envoi en cours...';
    btn.disabled    = true;

    setTimeout(() => {
      btn.textContent = '✅ Message envoyé !';
      btn.style.background = '#16a34a';

      // Reset form
      ['f-nom','f-tel','f-email','f-ville','f-service','f-msg'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });

      setTimeout(() => {
        btn.textContent    = 'Envoyer la demande →';
        btn.style.background = '';
        btn.disabled       = false;
      }, 4000);
    }, 1200);
  };


  /* ──────────────────────────────────────
     5. SMOOTH SCROLL — Drawer links
  ────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      // Close drawer if open
      if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
      const offset = navbar.offsetHeight + 8;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ──────────────────────────────────────
     6. COUNTER ANIMATION — Hero stats
  ────────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const end   = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step  = Math.ceil(end / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 30);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => countObserver.observe(c));

});
