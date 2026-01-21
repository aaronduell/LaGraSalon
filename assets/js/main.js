(function () {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Set active nav link based on current page
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav-link]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  // Contact form: if no backend is configured, open a mailto fallback
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      const action = (form.getAttribute('action') || '').trim();
      if (!action || action === '#') {
        e.preventDefault();
        const fd = new FormData(form);
        const name = fd.get('name') || '';
        const email = fd.get('email') || '';
        const phone = fd.get('phone') || '';
        const service = fd.get('service') || '';
        const message = fd.get('message') || '';
        const subject = encodeURIComponent('Website Inquiry - LaGra Salon and Day Spa');
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Interest: ${service}\n\nMessage:\n${message}\n`
        );
        const to = (form.getAttribute('data-email-to') || '').trim();
        if (!to) {
          alert('Please set a contact email address in contact.html (data-email-to).');
          return;
        }
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }
    });
  }
})();