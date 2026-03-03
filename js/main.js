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

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
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
