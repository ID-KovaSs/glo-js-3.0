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
      scrollHeight =  body.scrollHeight;
/*       scrollHeight = Math.max(
        body.scrollHeight, document.documentElement.scrollHeight,
        body.offsetHeight, document.documentElement.offsetHeight,
        body.clientHeight, document.documentElement.clientHeight
      ), */
      timeTrigger = 60000;

      // console.log(scrollHeight);

  timePopup(timeTrigger);
  
  // Функция всплытия модального окна с подарком
  function scrollBottom() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(scrolled);
    if(scrolled == scrollHeight && !scroledTrigger) {
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
    scroledTrigger = true;  
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