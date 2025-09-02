// script.js

// Scroll animation on load
window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach((section, i) => {
    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, i * 200);
  });
});

// Form submission feedback (fake)
document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  this.reset();
});

// Initial styles for animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-in-out';
  });
});
