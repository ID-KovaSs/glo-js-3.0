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
	let burgerMenu = require('../parts/burgerMenu.js');
	let ajaxForm = require('../parts/ajaxForm.js');
	let slider = require('../parts/slider.js');
	let checkRus = require('../parts/checkRus.js');
	let phoneMask = require('../parts/phoneMask.js');
	
	headerSlider();
	popup();
	addBlocks();
	portfolioTabs();
	calc();
	replaceImg();
	accordion();
	burgerMenu();
	ajaxForm();
	slider();
	checkRus();
	phoneMask();
	
});
},{"../parts/accordion.js":2,"../parts/addBlocks.js":3,"../parts/ajaxForm.js":4,"../parts/burgerMenu.js":5,"../parts/calc.js":6,"../parts/checkRus.js":7,"../parts/headerSlider.js":8,"../parts/phoneMask.js":9,"../parts/popup.js":10,"../parts/portfolioTabs.js":11,"../parts/replaceImg.js":12,"../parts/slider.js":13}],2:[function(require,module,exports){
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

  accordion.addEventListener('click', (e) => {
    let target = e.target;
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
function ajaxForm() {
  // Forms
  let message = {},
      form = document.querySelectorAll('.form'),
      body = document.querySelector('body'),
      statusMessage = document.createElement('img');

  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";

  function hideElements(form) {
    for (let i = 0; i < form.children.length; i++) {
      if(form.children[i].tagName =='H4'){
        form.children[i].style.display = "block";
      } else if(form.children[i].tagName =='IMG') {
        form.children[i].style.display = "inline-block";
        form.children[i].style.width = "150px";
        form.style.display = "flex";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        form.style.flexFlow = " column wrap";;
      } else {
        form.children[i].style.display = "none";
      }
    }
  }
  
  function loading(obj) {
    hideElements(obj);
    statusMessage.src = "img/ajax/send.gif";
  }
  function success(obj) {
    hideElements(obj);
    statusMessage.src = "img/ajax/success-mail.gif";
  }
  function failure(obj) {
    hideElements(obj);
    statusMessage.src = "img/ajax/error.gif";
  }
  
  function ajaxSend(e) {
      let input = e.getElementsByTagName('input');
      e.appendChild(statusMessage);
      
      // AJAX
      let request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      // Записываем кодировку
      request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");
  
      let formData = new FormData(e);
      request.send(formData);
  
      request.onreadystatechange = function() {
        if(request.readyState < 4) {
          loading(e);
        } else if(request.readyState === 4) {
          if(request.status == 200 && request.status < 300) {
            success(e);
          } else {
            failure(e);
            }
        }
      };
    
      for (let i = 0; i < input.length; i++) {
        // Очищаем поля ввода
        input[i].value = '';
      }
  }
  
  body.addEventListener('submit', (e) => {
    let target = e.target;
    e.preventDefault();
      ajaxSend(target);
  });
}

module.exports = ajaxForm;
},{}],5:[function(require,module,exports){
function accordion() {
  let burgerBtn = document.querySelector('.burger'),
      body = document.querySelector('body'),
      burgerMenu = document.querySelector('.burger-menu');

  function hideMenu(e) {
    burgerMenu.style.display = "none";
    if(!e.classList.contains('burger-menu') || e.parentElement.classList.contains('burger') || e.classList.contains('burger')) {
      burgerMenu.style.display = "none";
    }
  }

  body.addEventListener('click', (e) => {
    let target = e.target;
    if(window.innerWidth < 768 && burgerMenu.style.display == "none" && target.parentElement.classList.contains('burger') || window.innerWidth < 768 && target.classList.contains('burger') && burgerMenu.style.display == "none") {
      burgerMenu.style.display = "block";
    } else {
      hideMenu(target);
    }
  });
  
}

module.exports = accordion;
},{}],6:[function(require,module,exports){
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

  calc.addEventListener('change', (e) => {
    let target = e.target;
    checkInput(target);
    if(target.classList.contains("promocode")) {
      checkInput(target);
    }
  });
}

module.exports = calc;
},{}],7:[function(require,module,exports){
function checkRus() {
  let body = document.querySelector('body');
  
  // Проверка на ввод русских символов в поле имени и комментария 
  function checkRus(e) {
    if(e.value.match(/[A-z0-9]/ig)){
      e.value = '';
    } 
    // (e.value.match(/[0-9]/ig))? console.log() : e.value = '';
  }
  
  body.addEventListener('input', (e) => {
    let target = e.target;
    if(target.name == "name" || target.name == "message") {
      checkRus(target);
    }
  });
}

module.exports = checkRus;
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
function phoneMask() {
	//PhoneMask
	let keyCode,
			body = document.querySelector('body');

	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
		let pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		let matrix = "+7 (___) ___-__-__",
	  		i = 0,
	  		def = matrix.replace(/\D/g, ""),
	  		val = this.value.replace(/\D/g, ""),
		new_value = matrix.replace(/[_\d]/g, function(a) {
		return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
	});
	i = new_value.indexOf("_");
	if (i != -1) {
		i < 5 && (i = 3);
		new_value = new_value.slice(0, i);
	}
	let reg = matrix.substr(0, this.value.length).replace(/_+/g, function(a) {
			return "\\d{1," + a.length + "}";
	  }).replace(/[+()]/g, "\\$&");
	reg = new RegExp("^" + reg + "$");
	if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
	if (event.type == "blur" && this.value.length < 5)  this.value = "";
	}
	
	
	body.addEventListener('input', (e) => {
		let target = e.target;
		if(target.name == "phone") {
			target.addEventListener("input", mask, false);
			target.addEventListener("focus", mask, false);
			target.addEventListener("blur", mask, false);
			target.addEventListener("keydown", mask, false);
		}
	});
}

module.exports = phoneMask;
},{}],10:[function(require,module,exports){
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
      scroledTrigger = false,
      // scrollHeight =  body.scrollHeight;
      scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      ),
      timeTrigger = 60000;

  timePopup(timeTrigger);
  
  // Функция всплытия модального окна с подарком
  function scrollBottom() {
    let scrolled = document.documentElement.scrollTop,
        scrollFull = 1483 + scrolled + document.documentElement.clientHeight;

    if(scrollFull >= scrollHeight && !scroledTrigger) {
      let mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        IEAgent = /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent);
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
    scroledTrigger = true;  
    }
  }
  // Событие срабатывающее на scroll до конца страницы
  window.addEventListener('scroll', () => {
    setTimeout(scrollBottom, 1000);
  });

   // Делегирование событий кросбраузерного всплытия модального окна на кнопках с классом "button-design"
  body.addEventListener('click', (e) => {
    scroledTrigger = true;
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
    // Отображение дизайн-формы
    if(buttonDesign) {
    popupDesign.classList.add('fadeIn');
    buttonGiftRemove.style.display = "none";
    popupDesign.style.display = "block";
    document.body.style.overflow = "hidden";
    }
    // Отображение формы-консультации
    if(buttonConsult) {
    popupConsult.classList.add('fadeIn');
    buttonGiftRemove.style.display = "none";
    popupConsult.style.display = "block";
    document.body.style.overflow = "hidden";
    }
    // Отображение формы с подарком
    if(buttonGift) {
    popupGift.classList.add('fadeIn');
    buttonGiftRemove.style.display = "none";
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

  body.addEventListener('click', (e) => {
    let target = e.target;
    if(target.classList.contains("popup-close")){
      buttonDesign = false;
      buttonConsult = false;
      buttonGift = false;
      popupDesign.style.display = "none";
      popupConsult.style.display = "none";
      popupGift.style.display = "none";
      document.body.style.overflow = "";
        if(buttonGift = false){
          buttonGiftRemove.style.display = "block";
        }
    }
    if(target.classList.contains("popup-design") || target.classList.contains("popup-consultation")){
      buttonDesign = false;
      buttonConsult = false;
      popupDesign.style.display = "none";
      popupConsult.style.display = "none";
      document.body.style.overflow = "";
        if(buttonGift = false){
          buttonGiftRemove.style.display = "block";
        }
    }
    if(target.classList.contains("popup-gift")) {
      buttonGift = false;
      popupGift.style.display = "none";
      document.body.style.overflow = "";
      buttonGiftRemove.style.display = "none";
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
},{}],11:[function(require,module,exports){
function portfolioTabs() {
  let portfBlocks = document.querySelectorAll('.portfolio-block'),
      portfMenu = document.querySelector('.portfolio-menu'),
      portfMenuItems = document.querySelectorAll('.portfolio-menu li'),
      portfNo = document.querySelector('.portfolio-no');

  portfMenuItems[0].classList.add('active');

  function getActive(e) {
    if(e.tagName == "LI") {
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
 
  portfMenu.addEventListener('click', (e) => {
    let target = e.target;
    getActive(target);
    showBlock(target);

  });
}

module.exports = portfolioTabs;
},{}],12:[function(require,module,exports){
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

  sizeWrapper.addEventListener('mouseover', (e) => {
    let target = e.target;
    showImg(target);
    replaseImg(target,eventTarget,secondTarget,sizesBlockNum);
  });
 
  sizeWrapper.addEventListener('mouseout', (e) => {
    let target = e.target;
    hideImg(target,eventTarget,replaceTarget,sizesBlockNum);
  });

}

module.exports = replaceImg;
},{}],13:[function(require,module,exports){
function slider() {
  // Slider
	let slideIndex = 1,
  slides = document.querySelectorAll('.feedback-slider-item'),
  prev = document.querySelector('.main-prev-btn'),
  next = document.querySelector('.main-next-btn');

  showSlides(slideIndex);

  function showSlides(n) {
    if(n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  
    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.animationName = "slideInLeft";
    }
  });

  next.addEventListener('click', () => {
    plusSlides(1);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.animationName = "slideInRight";
    }
  });

  setTimeout(function run() {
    plusSlides(1);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.animationName = "slideInRight";
    }
    setTimeout(run, 5000);
  }, 5000);

}

module.exports = slider;
},{}]},{},[1]);
