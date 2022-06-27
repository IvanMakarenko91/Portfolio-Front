// Navbar sticky
// window.addEventListener("scroll", function() {
//   var navMenu = document.getElementById("navM");
//   navMenu.classList.toggle("sticky", window.scrollY > 0);
// });

// Couleur telachargement CV
let telechargers = document.getElementById('telecharger');
let downloads = document.getElementById('download');
telechargers.addEventListener("click", () => {
  downloads.style.color = "#52BB32";
});

// Scroll Y
var departScroll = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if (departScroll > currentScrollpos) {
    document.getElementById("navM").style.top="0";
  } else {
    document.getElementById("navM").style.top="-100px"
  }
  departScroll = currentScrollpos
}