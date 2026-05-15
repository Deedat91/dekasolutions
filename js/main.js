/*
 * main.js
 *
 * Contains common JavaScript used across the Deka Solutions website. This script
 * handles mobile navigation toggling and initialises the Animate On Scroll (AOS)
 * library to add subtle scroll animations to elements marked with data-aos
 * attributes. It also includes a placeholder function for the contact form
 * submission; when connected to a backend or form handling service, this
 * function can be expanded to actually send form data.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.navbar nav ul');
  const navLinks = document.querySelectorAll('.navbar nav a');

  navLinks.forEach((link) => {
    const linkPath = new URL(link.getAttribute('href'), window.location.href).pathname.split('/').pop();
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    if (linkPath === currentPath) {
      link.classList.add('active-page');
      link.setAttribute('aria-current', 'page');
    }
  });

  if (menuToggle && navList) {
    const setMenuState = (isOpen) => {
      navList.classList.toggle('show', isOpen);
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuToggle.addEventListener('click', () => {
      setMenuState(!navList.classList.contains('show'));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setMenuState(false);
        menuToggle.focus();
      }
    });
  }

  // Initialise AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Placeholder for handling contact form submission
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message!\nThis demo contact form does not actually send emails yet.');
      contactForm.reset();
    });
  }
});
