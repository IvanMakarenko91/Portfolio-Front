window.addEventListener("scroll", function() {
  var navMenu = document.getElementById("navM");
  navMenu.classList.toggle("sticky", window.scrollY > 0);
});

let telechargers = document.getElementById('telecharger');
let downloads = document.getElementById('download');
telechargers.addEventListener("click", () => {
  downloads.style.color = "#52BB32";
});