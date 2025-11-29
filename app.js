/* Minimal interactive behavior: nav toggle, contact form (mailto fallback), year */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.gap = '8px';
  navLinks.style.background = 'rgba(255,255,255,0.95)';
  navLinks.style.position = 'absolute';
  navLinks.style.right = '18px';
  navLinks.style.top = '60px';
  navLinks.style.padding = '10px';
  navLinks.style.borderRadius = '10px';
  navLinks.style.boxShadow = 'var(--shadow)';
});

/* Contact form: open mailto with prefilled content as fallback */
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = encodeURIComponent(fd.get('name') || '');
  const email = encodeURIComponent(fd.get('email') || '');
  const message = encodeURIComponent(fd.get('message') || '');
  const subject = encodeURIComponent(`Contact from portfolio — ${name}`);
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
  window.location.href = `mailto:alex.carter@example.com?subject=${subject}&body=${body}`;
});

/* quick mailto button */
document.getElementById('mailto')?.addEventListener('click', () => {
  window.location.href = 'mailto:alex.carter@example.com';
});

/* Set year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Smooth scroll for in-page links */
document.querySelectorAll('a[href^=\"#\"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(!href || href === '#') return;
    const el = document.querySelector(href);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); if(window.innerWidth<900) navLinks.style.display='none'; }
  });
});