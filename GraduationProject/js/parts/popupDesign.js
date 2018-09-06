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