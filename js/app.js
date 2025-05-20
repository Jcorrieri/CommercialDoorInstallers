import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backToTopButton = document.getElementById('backToTop')

  function navToggle() {
    if (window.innerWidth > 640) {  // big window
      return;
    }

    navMenu.classList.toggle('opacity-0');
    navMenu.classList.toggle('pointer-events-none');
    navMenu.classList.toggle('invisible');
  }

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navToggle();
    });

    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle();
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});