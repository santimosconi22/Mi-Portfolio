document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});

// Desplazarse suavemente a la sección correspondiente al hacer clic en un enlace de navegación
document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      // Prevenir el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtener el hash del enlace
      var hash = link.getAttribute('href');

      // Obtener la posición vertical de la sección correspondiente
      var targetElement = document.querySelector(hash);
      var offsetTop = targetElement.offsetTop;

      // Desplazarse suavemente a la sección correspondiente
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });

      // Esperar un breve momento antes de volver a activar AOS
      setTimeout(function() {
          AOS.refresh();
      }, 500); // Ajusta el valor según sea necesario
  });
});

