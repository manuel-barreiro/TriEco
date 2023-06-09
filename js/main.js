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