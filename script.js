// Jednoduché JS: menu toggle, rok ve footeru
document.addEventListener('DOMContentLoaded', function() {
  // rokučení v patice
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Menu toggle (pokud je)
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
});

// Sméřování kliků na tlačít ka (CTA)
document.querySelectorAll('[data-action]').forEach(btn => {
  btn.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    if (action === 'contact') {
      window.location.href = 'mailto:info@sgen.cz';
    } else if (action === 'learn') {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Přípojené logi ke snímkům pro animace při scrollování
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}
