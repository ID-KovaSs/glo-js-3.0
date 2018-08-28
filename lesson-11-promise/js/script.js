/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let tab = document.querySelectorAll(".info-header-tab"),
			tabContent = document.querySelectorAll(".info-tabcontent"),
			info = document.querySelectorAll(".info-header")[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(e) {
		let target = e.target;

		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer 
	let deadline = '2018-08-27';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t / 1000) % 60),
				minutes = Math.floor( (t / 1000 / 60) % 60),
				hours = Math.floor( (t / (1000 * 60 * 60)) );

				//   Необходимо подставлять 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04.06.50)
				if(seconds < 10) seconds = `0${seconds}`;
				if(minutes < 10) minutes = `0${minutes}`;
				if(hours < 10) hours = `0${hours}`;

				return {
					'total' 	: t,
					'hours' 	: hours,
					'minutes' : minutes,
					'seconds' : seconds
				};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);

			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if(t.total <= 0) {
				clearInterval(timeInterval);
				// Изменить скрипт так, чтобы в таком случае выводилось: 00:00:00 и все скрипты оставались рабочими
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}

		updateClock();
		// Устранение ошибки при работе скрипта
		var timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);

	// Скролинг по якорям меню
	let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
			speed = 0.5;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
	for (let i = 0; i < linkNav.length; i++) {
		linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
			e.preventDefault(); //отменяем стандартное поведение
			let w = window.pageYOffset,  // производим прокрутку
					hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
					t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
					start = null;
			requestAnimationFrame(step);
			function step(time) {
				if (start === null) start = time;
				let progress = time - start,
						r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
				window.scrollTo(0,r);
				if (r != w + t) {
					requestAnimationFrame(step);
				} else {
					location.hash = hash;  // URL с хэшем
				}
			}
		}, false);
	}

	//PhoneMask
	let keyCode;

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
	let input = document.querySelector("#tel");
	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false);

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

	// Forms
  let message = {};
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByTagName('form'),
			// input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

	statusMessage.classList.add('status');
	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input');
		form[i].addEventListener('submit', function(e) {
			e.preventDefault();
			form[i].appendChild(statusMessage);
			
			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');
			// Записываем кодировку
			request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");

			let formData = new FormData(form[i]);
	 
			request.send(formData);

			request.onreadystatechange = function() {
				if(request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if(request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Можно добавить контент на страницу
					} else {
						// Выводим сообщение об ошибке
						console.log(request.status);
						statusMessage.innerHTML = message.failure;
						}
				}
			};
		
			for (let i = 0; i < input.length; i++) {
				// Очищаем поля ввода
				input[i].value = '';
			}
		});
	}
});