const logoHead = document.querySelector(".logo-heading");

logoHead.addEventListener("mouseover", function() {
  logoHead.style.color = "red";
});

logoHead.addEventListener("mouseout", function() {
  logoHead.style.color = "black";
});

const body = document.querySelector("body");
const nav = document.querySelector(".main-navigation");
body.addEventListener("keydown", function() {
  nav.style.position = "absolute";
});

body.addEventListener("copy", function(x) {
  alert(`You copied something`);
});
