document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.navigation-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Highlight active section in navigation
  window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      const formData = new FormData(this);
      console.log('Form submitted with the following data:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Clear the form
      this.reset();
      alert('Thank you for your message! I\'ll get back to you soon.');
    });
  }

  // Projects hover effect
  const projectCards = document.querySelectorAll('.project-card');

  const applyHoverEffects = () => {
    if (window.matchMedia("(min-width: 768px)").matches) { // Adjust breakpoint as needed
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function () {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
      });
    } else {
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', function () {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        });

        card.removeEventListener('mouseleave', function () {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
      });
    }
  };

  // Apply hover effects based on screen size
  applyHoverEffects();
  window.addEventListener('resize', applyHoverEffects);
});
