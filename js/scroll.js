window.addEventListener("scroll", function() {
  var navMenu = document.getElementById("navM");
  navMenu.classList.toggle("sticky", window.scrollY > 0);
})