// TYPERWRITER

// Hero Section
let app = document.getElementById('typeWriterHero');
 
let typeWriterHero = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typeWriterHero
  .pauseFor(100)
  .typeString('Líderes en tratamiento de residuos patogénicos y especiales.')
  .pauseFor(2500)
  .deleteChars(10)
  .start();

// Who Are We Section

  let appOne = document.getElementById('typeWriterWhoAreWe');
 
  let typeWriterWhoAreWe = new Typewriter(appOne, {
    loop: true,
    delay: 75,
  });
   
  typeWriterWhoAreWe
    .pauseFor(100)
    .typeString('En Trieco nos dedicamos a la gestión integral de residuos.')
    .pauseFor(2500)
    .deleteChars(10)
    .start(); 


  // SMOOTH SCROLL

  document.addEventListener('DOMContentLoaded', function() {
    // Capturar los clics en los enlaces y botones con la clase "scroll-link"
    var links = document.querySelectorAll('.scroll-link');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href') || this.getAttribute('data-target');
        var target = document.querySelector(targetId);
  
        // Desplazamiento suave hacia la sección objetivo
        if (target) {
          scrollTo(target, 1000);
        }
      });
    });
  
    // Función para realizar un desplazamiento suave
    function scrollTo(element, duration) {
      var targetPosition = element.getBoundingClientRect().top;
      var startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var distance = targetPosition - startPosition;
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) {
          startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
          return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });
  
  
  
