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