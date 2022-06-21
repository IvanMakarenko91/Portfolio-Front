// Typewriter ecriture automatique.
var app = document.getElementById('about');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('<strong style="color:#620C0C">Apprenti</strong> developpeur web Full-stack, <br> ')
  .pauseFor(10000)
  .start();

