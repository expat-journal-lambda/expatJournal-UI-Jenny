const logoHead = document.querySelector(".logo-heading");

logoHead.addEventListener("mouseover", function() {
  logoHead.style.color = "red";
});

logoHead.addEventListener("mouseout", function() {
  logoHead.style.color = "black";
});

const img = document.querySelector(".intro img");

img.addEventListener("click", function() {
  img.src = "img/funbusgif.gif";
});

img.addEventListener("dblclick", function() {
  img.src = "img/fun-bus.jpg";
});

window.addEventListener("contextmenu", function(x) {
  alert("WHATCHU RIGHT CLICKIN");
});

const body = document.querySelector("body");
const nav = document.querySelector(".main-navigation");
body.addEventListener("keydown", function() {
  nav.style.position = "absolute";
});

body.addEventListener("keypress", function() {
  nav.style.position = "fixed";
});

body.addEventListener("copy", function(x) {
  alert(`You copied somethin
});


