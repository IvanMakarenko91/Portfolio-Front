// Typewriter ecriture automatique.
var app = document.getElementById('about');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<strong style="color:black">en formation</strong> dévllo')
  .pauseFor(150)
  .deleteChars(3)
  .pauseFor(200)
  .typeString('eloppeur wbe')
  .pauseFor(200)
  .deleteChars(2)
  .pauseFor(250)
  .typeString('eb full stack')
  .pauseFor(20000)
  .start();

