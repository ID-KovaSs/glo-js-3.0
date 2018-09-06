function popupDesign() {

  let popupDesign = document.querySelector('.popup-design'),
      popupConsult = document.querySelector('.popup-consultation'),
      closeBtn = document.querySelectorAll('.popup-close')[2],
      body = document.querySelector('body'),
      buttonDesign = false,
      buttonConsult = false;

  // Делегирование событий кросбраузерного всплытия модального окна на кнопках с классом "button-design"
  body.addEventListener('click', function(e) {
    let target = e.target,
        mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        IEAgent = /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent);

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
  });

// Анимация для десктопных браузеров
function animationPcIn(param) {
  if(buttonDesign) {
    console.log("десктопное сособытие");
    popupDesign.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  if(buttonConsult) {
    console.log("десктопное сособытие");
    popupConsult.style.display = "block";
    document.body.style.overflow = "hidden";
  }

}
// Для мобильных приложений
function animationAppIn() {
  console.log("мобильное сособытие");
  popupDesign.classList.add('fadeIn');
  popupDesign.style.display = "block";
  document.body.style.overflow = "hidden";	
}

body.addEventListener('click', function(e) {
  let target = e.target;
  if(target.classList.contains("popup-close")){
    buttonDesign = false;
    buttonConsult = false;
    popupDesign.style.display = "none";
    popupConsult.style.display = "none";
    document.body.style.overflow = "";	
  }
});
}

module.exports = popupDesign;