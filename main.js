// NAVBAR TOGGLE
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// PRELOADER
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.visibility = 'hidden';
  preloader.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
  setTimeout(() => {
    preloader.remove();
  }, 600);
});

// CARRUSEL DE PLANES (si existiera)
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

if (carouselContainer && prevBtn && nextBtn) {
  let scrollAmount = 0;
  const scrollStep = 320;

  nextBtn.addEventListener('click', () => {
    if (scrollAmount >= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
    }
    carouselContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    if (scrollAmount <= 0) {
      scrollAmount = carouselContainer.scrollWidth - carouselContainer.clientWidth;
    } else {
      scrollAmount -= scrollStep;
    }
    carouselContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });
}

// Mostrar botón de volver arriba cuando se hace scroll
window.addEventListener("scroll", function () {
  const backToTopBtn = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Acción al hacer clic
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Opcional: cerrar al hacer click fuera del modal
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}
