function modal() {
	// Modal
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			popup = document.querySelector('.popup'),
			close = document.querySelector('.popup-close'),
			descriptionBtn = document.querySelectorAll('.description-btn');

	// Событие всплытия модального окна на табах
	for (let i = 0; i < descriptionBtn.length; i++) {
		descriptionBtn[i].addEventListener('click', function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
			popup.style.visibility = 'visible';	
		} else if(/MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
   		animationAppIn();
  	} else {
  		animationPcIn(this);
  	}
		});
	}

		// Анимация для десктопных браузеров
		function animationPcIn(param) {
			param.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
			popup.style.visibility = 'visible';			
		}
		// Для мобильных приложений
		function animationAppIn() {
			overlay.classList.add('fadeIn');
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";	
			popup.style.visibility = 'visible';	
		}


	// Событие для отображения формы
	more.addEventListener('click', function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
			popup.style.visibility = 'visible';	
		} else if(/MSIE 10/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
   		animationAppIn();
  	} else {
  		animationPcIn(this);
  	}
	});

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = "";	
	});
}

module.exports = modal;