const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const sections = [...document.querySelectorAll('.panel')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.hero-nav a, .section-nav a').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { threshold: 0.55 });

sections.forEach((section) => observer.observe(section));