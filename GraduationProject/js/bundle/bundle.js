(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js');
	let popup = require('../parts/popup.js');
	let addBlocks = require('../parts/addBlocks.js');
	let portfolioTabs = require('../parts/portfolioTabs.js');
	
	headerSlider();
	popup();
	addBlocks();
	portfolioTabs();
	
});
},{"../parts/addBlocks.js":2,"../parts/headerSlider.js":3,"../parts/popup.js":4,"../parts/portfolioTabs.js":5}],2:[function(require,module,exports){
function addBlocks() {
  let blocksBtn = document.getElementById('addBlocksBtn'),
      hiddenBlocks = document.querySelectorAll('.hidden-lg');

  blocksBtn.addEventListener('click', () => {
    for(let i = 0; i < hiddenBlocks.length; i++) {
      hiddenBlocks[i].className = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
      blocksBtn.style.display = "none";
     }
  });
}

module.exports = addBlocks;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function popup() {

  let popupDesign = document.querySelector('.popup-design'),
      popupConsult = document.querySelector('.popup-consultation'),
      popupGift = document.querySelector('.popup-gift'),
      body = document.querySelector('body'),
      buttonGiftRemove = document.querySelector('.fixed-gift'),
      buttonDesign = false,
      buttonGift = false,
      buttonConsult = false;

  // Делегирование событий кросбраузерного всплытия модального окна на кнопках с классом "button-design"
  body.addEventListener('click', function(e) {
    let target = e.target,
        mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        IEAgent = /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent);
    // Проверка на нажатие кнопки buttonDesign
    if(target.classList.contains("button-design") && target.classList.contains("button-order")) {
      if( mobileAgent ) {
        buttonDesign = true;
        animationAppIn();
        } else if(IEAgent) {
          buttonDesign = true;
          animationAppIn();
          } else {
            buttonDesign = true;
            animationPcIn(this);
          }
    }
    // Проверка на нажатие кнопки buttonConsult
    if(target.classList.contains("button-consultation") && target.classList.contains("button-order")) {
      if( mobileAgent ) {
        buttonConsult = true;
        animationAppIn();
        } else if(IEAgent) {
          buttonConsult = true;
          animationAppIn();
          } else {
            buttonConsult = true;
            animationPcIn(this);
          }
    }
    // Проверка на нажатие кнопки buttonGift
    if(target.classList.contains("fixed-gift")) {
      if( mobileAgent ) {
        buttonGift = true;
        animationAppIn();
        } else if(IEAgent) {
          buttonGift = true;
          animationAppIn();
          } else {
            buttonGift = true;
            animationPcIn(this);
          }
    }
  });

// Анимация для десктопных браузеров
function animationPcIn(param) {
  console.log("десктопное сособытие");
  // Отображение дизайн-формы
  if(buttonDesign) {
    buttonGiftRemove.style.display = "none";
    popupDesign.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  // Отображение формы-консультации
  if(buttonConsult) {
    buttonGiftRemove.style.display = "none";
    popupConsult.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  // Отображение формы с подарком
  if(buttonGift) {
    buttonGiftRemove.style.display = "none";
    popupGift.style.display = "block";
    document.body.style.overflow = "hidden";
  }

}
// Для мобильных приложений
function animationAppIn() {
  console.log("мобильное сособытие");
  // Отображение дизайн-формы
  if(buttonDesign) {
  popupDesign.classList.add('fadeIn');
  popupDesign.style.display = "block";
  document.body.style.overflow = "hidden";
  }
  // Отображение формы-консультации
  if(buttonDesign) {
  popupConsult.classList.add('fadeIn');
  popupConsult.style.display = "block";
  document.body.style.overflow = "hidden";
  }
  // Отображение формы с подарком
  if(buttonDesign) {
  popupGift.classList.add('fadeIn');
  popupGift.style.display = "block";
  document.body.style.overflow = "hidden";
  }
}

body.addEventListener('click', function(e) {
  let target = e.target;
  if(target.classList.contains("popup-close")){
    buttonDesign = false;
    buttonConsult = false;
    buttonGift = false;
    popupDesign.style.display = "none";
    popupConsult.style.display = "none";
    popupGift.style.display = "none";
    document.body.style.overflow = "";
    buttonGiftRemove.style.display = "block";	
  }
  if(target.classList.contains("popup-design") || target.classList.contains("popup-consultation")){
    buttonDesign = false;
    buttonConsult = false;
    popupDesign.style.display = "none";
    popupConsult.style.display = "none";
    document.body.style.overflow = "";
    buttonGiftRemove.style.display = "block";	
  }
  if(target.classList.contains("popup-gift")) {
    buttonGift = false;
    popupGift.style.display = "none";
    document.body.style.overflow = "";	
  }
});
}

module.exports = popup;
},{}],5:[function(require,module,exports){
function portfolioTabs() {
  let portfBlocks = document.querySelectorAll('.portfolio-block'),
      portfMenu = document.querySelector('.portfolio-menu'),
      portfMenuItems = document.querySelectorAll('.portfolio-menu li'),
      portfNo = document.querySelector('.portfolio-no');

  portfMenuItems[0].classList.add('active');

  function getActive(e) {
    if(e.tagName = "li") {
      for (let i = 0; i < portfMenuItems.length; i++) {
        portfMenuItems[i].classList.remove('active');     
      }
      e.classList.add('active');
    }
  }

  function showBlock(e) {
    let checkClass = e.classList[0];
    // Проверка на отсутствующие блоки в портфолио
    if(e.classList.contains('grandmother') || e.classList.contains('granddad')){
      portfNo.style.display = "block";
    } else {
      portfNo.style.display = "none";
    }
    // Отображение блоков соответствующих классу меню
    for (let i = 0; i < portfBlocks.length; i++) {
      if(portfBlocks[i].classList.contains(`${checkClass}`)) {
        portfBlocks[i].style.display = "block";
      } else {
        portfBlocks[i].style.display = "none";
      }       
    }
  }
 
  portfMenu.addEventListener('click', function(e) {
    let target = e.target;
    getActive(target);
    showBlock(target);

  });
}

module.exports = portfolioTabs;
},{}]},{},[1]);
