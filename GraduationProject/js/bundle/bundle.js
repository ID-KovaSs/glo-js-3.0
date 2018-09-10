(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js');
	let popup = require('../parts/popup.js');
	let addBlocks = require('../parts/addBlocks.js');
	let portfolioTabs = require('../parts/portfolioTabs.js');
	let calc = require('../parts/calc.js');
	let replaceImg = require('../parts/replaceImg.js');
	let accordion = require('../parts/accordion.js');
	
	headerSlider();
	popup();
	addBlocks();
	portfolioTabs();
	calc();
	replaceImg();
	accordion();
	
});
},{"../parts/accordion.js":2,"../parts/addBlocks.js":3,"../parts/calc.js":4,"../parts/headerSlider.js":5,"../parts/popup.js":6,"../parts/portfolioTabs.js":7,"../parts/replaceImg.js":8}],2:[function(require,module,exports){
function accordion() {
    let accordion = document.querySelector('#accordion'),
      accorHead = document.querySelectorAll('.accordion-heading'),
      accorBlock = document.querySelectorAll('.accordion-block');
  
  getActive();
  accorBlock[0].style.display = "block";
  accorHead[0].style.color = "#C51BBB";
  
  function removeActive() {
    for (let i = 0; i < accorBlock.length; i++) {
      accorHead[i].classList.remove('active');
    }
  }

  function getActive(e) {
    for (let i = 0; i < accorBlock.length; i++) {
      if(accorHead[i].classList.contains('active')) {
        accorHead[i].style.color = "#C51BBB";
        e.parentElement.nextElementSibling.style.display = "block";
      } else {
        accorBlock[i].style.display = "none";
        accorHead[i].style.color = "";
        accorHead[i].classList.remove('active');
      }
    }
  }

  accordion.addEventListener('click', function(e) {
    let target = e.target;
    console.log(target);
    console.log(target.parentElement);
    removeActive();
    if(target.parentElement.classList.contains('accordion-heading')) {
      target.parentElement.classList.add('active');
      getActive(target);
    }
  });
}

module.exports = accordion;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function calc() {
  let size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      calcPrice = document.querySelector('.calc-price'),
      calc = document.querySelector('.calc');

  disableSelect();
  // Вычисление суммы
  function sumPrice() {
    let sum = Number(size.value) + Number(material.value) + Number(options.value);
    // Проверка на ввод промокода
    if (promocode.value.match( /IWANTPOPART/ig )) sum = sum - sum * 0.3;
    return sum;
  }
  // Добавление суммы на страницу
  function innerSum() {
    calcPrice.style.fontFamily = "'Circe Extra Bold', sans-serif";
    calcPrice.style.fontSize = "5rem";
    calcPrice.style.padding = "3rem 7.5rem";
  }

  function clearSum() {
    calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
    calcPrice.style.fontFamily = "";
    calcPrice.style.fontSize = "";
    calcPrice.style.padding = "";
  } 

  // Обнуление всех инпутов
  function disableSelect() {
    material.value = 0;
    options.value = 0;
    material.disabled = true;
    material.style.color = "red";
    options.disabled = true;
    options.style.color = "red";
  }
  // Проверка на порядок ввода
  function checkInput(e){
    if(size.value == "0") {
      disableSelect();
      clearSum();
    }
    if(size.value != 0) {
      if(size.value != 0 && material.value != 0){
        calcPrice.textContent = sumPrice();
      } else {
        clearSum();
      }
      material.disabled = false;
      material.style.color = "";
    } else {
      disableSelect();
    }
    if(material.value != 0) {
      calcPrice.textContent = sumPrice();
      innerSum();
      options.disabled = false;
      options.style.color = "";
    } else {
      options.value = 0;
      options.disabled = true;
      options.style.color = "red";
    }
  }

  calc.addEventListener('change', function(e) {
    let target = e.target;
    checkInput(target);
    if(target.classList.contains("promocode")) {
      checkInput(target);
    }
  });
}

module.exports = calc;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function popup() {

  let popupDesign = document.querySelector('.popup-design'),
      popupConsult = document.querySelector('.popup-consultation'),
      popupGift = document.querySelector('.popup-gift'),
      body = document.querySelector('body'),
      buttonGiftRemove = document.querySelector('.fixed-gift'),
      promocode = document.querySelector('.promocode'),
      buttonDesign = false,
      buttonGift = false,
      buttonConsult = false,
      scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ),
      timeTrigger = 60000;



  timePopup(timeTrigger);
  
  // Функция всплытия модального окна с подарком
  function scrollBottom() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(scrolled);
    if(scrolled == scrollHeight) {
      let mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        IEAgent = /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent);
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
  }
  // Событие срабатывающее на scroll до конца страницы
  window.addEventListener('scroll', () => {
    scrollBottom();
  });

   // Делегирование событий кросбраузерного всплытия модального окна на кнопках с классом "button-design"
  body.addEventListener('click', function(e) {
    clearTimeout(timePopup);
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

  function timePopup(e) {
    let mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        IEAgent = /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent);
    setTimeout(function() {
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
    }, e)
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
    if(target.classList.contains("copy")) {
      let promoCopied = target.textContent;
      promocode.value = promoCopied;
      target.style.backgroundColor = '#B6FF7A';
      target.setAttribute("title", "Промокод применен");
    }
  });


}


module.exports = popup;
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
function replaceImg() {
  let sizeWrapper = document.querySelector('.sizes-wrapper'),
      sizesBlock = document.querySelectorAll('.sizes-block'),
      eventTarget,
      replaceTarget,
      secondTarget,
      sizesBlockNum;

  function showImg(e) {
    if(e.classList.contains('size-1')) {
      eventTarget = 'size-1';
      replaceTarget = 'img/sizes-1.png';
      secondTarget = 'img/sizes-1-1.png';
      sizesBlockNum = 0;
    }
    if(e.classList.contains('size-2')) {
      eventTarget = 'size-2';
      replaceTarget = 'img/sizes-2.png';
      secondTarget = 'img/sizes-2-1.png';
      sizesBlockNum = 1;
    }
    if(e.classList.contains('size-3')) {
      eventTarget = 'size-3';
      replaceTarget = 'img/sizes-3.png';
      secondTarget = 'img/sizes-3-1.png';
      sizesBlockNum = 2;
    }
    if(e.classList.contains('size-4')) {
      eventTarget = 'size-4';
      replaceTarget = 'img/sizes-4.png';
      secondTarget = 'img/sizes-4-1.png';
      sizesBlockNum = 3;
    }
  }

  function replaseImg(e,src,rsrc,num) {
    for (let i = 0; i < 4; i++) {
      if(sizesBlock[num].children[i].classList.contains(src)) {
        e.setAttribute('src', rsrc);
      } else {
        sizesBlock[num].children[i].style.display = "none";
      }
    }
  }

  function hideImg(e,src,rsrc,num) {
    for (let i = 0; i < 4; i++) {
      if(sizesBlock[num].children[i].classList.contains(src)) {
        e.setAttribute('src', rsrc);
      } else {
        sizesBlock[num].children[i].style.display = "block";
      }
    }
  }

  sizeWrapper.addEventListener('mouseover', function(e) {
    let target = e.target;
    showImg(target);
    replaseImg(target,eventTarget,secondTarget,sizesBlockNum);
  });
 
  sizeWrapper.addEventListener('mouseout', function(e) {
    let target = e.target;
    hideImg(target,eventTarget,replaceTarget,sizesBlockNum);
  });

}

module.exports = replaceImg;
},{}]},{},[1]);
