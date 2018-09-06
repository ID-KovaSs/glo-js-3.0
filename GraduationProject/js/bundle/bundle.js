(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js');
	let popupDesign = require('../parts/popupDesign.js');
	
	headerSlider();
	popupDesign();
	
});
},{"../parts/headerSlider.js":2,"../parts/popupDesign.js":3}],2:[function(require,module,exports){
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
    // Проверка на позицию слайда, в случае если количесво слайдов увеличится
    if(n > slides.length) {
      slideIndex = 0;
      showSlides();
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
},{}],3:[function(require,module,exports){
function popupDesign() {

  let popupBtn = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      closeBtn = document.querySelectorAll('.popup-close')[2];
      console.log(closeBtn);

// Событие кросбраузерного всплытия модального окна на кнопках
for (let i = 0; i < popupBtn.length; i++) {
popupBtn[i].addEventListener('click', function() {
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  popupDesign.style.display = "block";
  document.body.style.overflow = "hidden";
} else if(/MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
   animationAppIn();
} else {
  animationPcIn(this);
}
});
}

// Анимация для десктопных браузеров
function animationPcIn(param) {
  popupDesign.style.display = "block";
  document.body.style.overflow = "hidden";

}
// Для мобильных приложений
function animationAppIn() {
  // popupDesign.classList.add('fadeIn');
  popupDesign.style.display = "block";
  document.body.style.overflow = "hidden";	
}

closeBtn.addEventListener('click', () => {
  popupDesign.style.display = "none";
  document.body.style.overflow = "";	
});
}

module.exports = popupDesign;
},{}]},{},[1]);
