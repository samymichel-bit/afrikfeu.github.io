'use strict';

/* ================================================================
   MAIN.JS — AFRIK FEU ET SERVICES (version optimisée)
================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────
     1. NAVBAR — Scroll + Active link
  ────────────────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const sections  = document.querySelectorAll('section[id]');

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        // Ajout/suppression de la classe 'scrolled'
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active link highlight
        let current = '';
        sections.forEach(s => {
          if (window.scrollY >= s.offsetTop - 110) current = s.id;
        });
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });

        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  /* ──────────────────────────────────────
     2. HAMBURGER — Mobile drawer
  ────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('nav-drawer');

  function openDrawer() {
    drawer.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.toggleMenu = () => {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  };

  // Fermer le drawer si clic en dehors
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') &&
        !drawer.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeDrawer();
    }
  });

  /* ──────────────────────────────────────
     3. SCROLL REVEAL — Intersection Observer
  ────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ──────────────────────────────────────
     4. FORMULAIRE — Validation + Feedback
  ────────────────────────────────────── */
  const clearFieldErrors = () => {
    document.querySelectorAll('.field-error').forEach(e => e.remove());
    const fields = ['f-nom', 'f-tel', 'f-msg'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.borderColor = '';
    });
  };

  window.submitForm = () => {
    const nom     = document.getElementById('f-nom').value.trim();
    const tel     = document.getElementById('f-tel').value.trim();
    const message = document.getElementById('f-msg').value.trim();
    const btn     = document.getElementById('submit-btn');

    clearFieldErrors();

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

      // Nettoyer les erreurs après succès
      clearFieldErrors();

      setTimeout(() => {
        btn.textContent    = 'Envoyer la demande →';
        btn.style.background = '';
        btn.disabled       = false;
      }, 4000);
    }, 1200);
  };

  /* ──────────────────────────────────────
     5. SMOOTH SCROLL — Tous les liens #anchor
  ────────────────────────────────────── */
  const scrollToTarget = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (hash === '#') return;
      e.preventDefault();
      // Fermer le drawer si ouvert
      if (drawer.classList.contains('open')) closeDrawer();
      scrollToTarget(hash);
    });
  });

  /* ──────────────────────────────────────
     6. COUNTER ANIMATION — Hero stats
  ────────────────────────────────────── */
  const easeOutQuad = t => t * (2 - t); // fonction d'easing

  const animateCounter = (el, end, suffix, duration = 1500) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.round(easeOutQuad(progress) * end);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = end + suffix; // assure la valeur finale exacte
      }
    };
    requestAnimationFrame(step);
  };

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const end    = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      animateCounter(el, end, suffix);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(c => countObserver.observe(c));
});