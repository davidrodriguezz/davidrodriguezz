document.addEventListener('DOMContentLoaded', function() {
  const contentElement = document.getElementById('content');
  contentElement.classList.add('fade');

  const paragraphs = document.querySelectorAll('.fade-in-paragraph');
  let animationDelay = 0.5; // Retraso inicial en segundos

  paragraphs.forEach(paragraph => {
    paragraph.style.transitionDelay = animationDelay + 's';
    animationDelay += 0.5; // Incrementa el retraso para cada párrafo
  });

  window.addEventListener('scroll', function() {
    paragraphs.forEach(paragraph => {
      const rect = paragraph.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        paragraph.classList.add('fade-in');
      }
    });
  });

  const openNavImg = document.getElementById('openNavImg');
  const sideNav = document.getElementById('sideNav');

  openNavImg.addEventListener('click', function() {
    openNavImg.style.transform = "scaleX(-1)";
    sideNav.style.width = '250px';
    openNavImg.style.left = '250px';
  });

  document.getElementById('closeNav').addEventListener('click', function() {
    openNavImg.style.transform = "scaleX(1)";
    sideNav.style.width = '0';
    openNavImg.style.left = '0';
  });

  // Agregar desplazamiento suave al enlace de Habilidades
  document.getElementById('skillsLink').addEventListener('click', function(event) {
    event.preventDefault();

    const targetSection = document.getElementById('greenSection');
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
