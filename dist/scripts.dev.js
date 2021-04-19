"use strict";

var jstoggle = document.getElementById('js-toggle');
jstoggle.addEventListener('click', function () {
  var animations = document.querySelectorAll('[data-animation');
  animations.forEach(function (animation) {
    var running = animation.style.animationPlayState || 'paused';
    animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  });
}); //------------------------Theme switcher-----------------------

var darkButton = document.getElementById('dark');
var lightButton = document.getElementById('light');
var solarButton = document.getElementById('solar');
var body = document.body; // Apply the cached theme on reload  

var theme = localStorage.getItem('theme');
var today = new Date();
var time = 2;

if (6 <= time && time <= 18) {
  body.classList.replace(theme, 'light');
  localStorage.setItem('theme', 'light');
} else if (18 <= time && time <= 22) {
  body.classList.replace(theme, 'solar');
  localStorage.setItem('theme', 'solar');
} else if (22 <= time && time <= 6) {
  body.classList.replace(theme, 'dark');
  localStorage.setItem('theme', 'dark');
}

if (theme) {
  body.classList.add(theme);
} // Button Event Handlers


darkButton.onclick = function () {
  var theme = localStorage.getItem('theme');
  body.classList.replace(theme, 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = function () {
  var theme = localStorage.getItem('theme');
  body.classList.replace(theme, 'light');
  localStorage.setItem('theme', 'light');
};

solarButton.onclick = function () {
  var theme = localStorage.getItem('theme');
  body.classList.replace(theme, 'solar');
  localStorage.setItem('theme', 'solar');
}; //---------------------------------Animation on switch-------------


var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener('change', function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});
var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
  breakpoints: [576, 768, 1201]
});