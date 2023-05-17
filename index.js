let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('"Creo mis compañías para suplir necesidades, no por el mero hecho de crearlas." Elon Musk')
  .pauseFor(200)
  .deleteChars(10)
  .start();