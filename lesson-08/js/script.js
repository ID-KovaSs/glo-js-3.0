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
	let deadline = '2018-08-22';

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
	};

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
		};

		updateClock();
		// Устранение ошибки при работе скрипта
		var timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);

	// Modal
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = "";
	});

});