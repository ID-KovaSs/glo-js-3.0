(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let slider = require('../parts/slider.js');
	
	slider();
	
});
},{"../parts/slider.js":2}],2:[function(require,module,exports){
function headerSlider() {
  let slideIndex = 0,
      slides = document.querySelectorAll('.main-slider-item');

  showSlides();

  function hideSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  }
  
  function showSlides() {
    hideSlide();
    slides[slideIndex].style.display = 'block';
  }
  
  function timerSlider(n) {
    
    if(n > slides.length) {
      slideIndex = 0;
      showSlides();
      console.log(slideIndex);
		}
		if (n < slides.length && n != slides.length) {
      showSlides();
    }

  
  }
  
  setTimeout(function run() {
    timerSlider(slideIndex);
    slideIndex++;
    setTimeout(run, 3500);
  }, 3500);

}



module.exports = headerSlider;
},{}]},{},[1]);
