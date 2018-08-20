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

	/*	На отдельной html странице написать простой таймер, который будет показывать текущее время в формате 14:26:50 (часы/минуты/секунды)
	· Необходимо подставлять 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04.06.50)*/

	// Рекурсивный вызов setTimeout
	let timerId = setTimeout(formatDate, 1000);

	function formatDate() {
	// Реализация таймера на странице
	let watchTimer = document.querySelector("#timer"),
			nowTime = new Date();
		// Часы 
		let h = nowTime.getHours();
		if (h < 10) h = `0${h}`;
		// Минуты
		let	m = nowTime.getMinutes();
		if (m < 10) m = `0${m}`;
		// Секунды
		let	s = nowTime.getSeconds();
		if (s < 10) s = `0${s}`;
		// Вывод на экран
		watchTimer.innerHTML = 
			`<span class="hours">${h}</span>
					<span>:</span>
					<span class="minutes">${m}</span>
					<span>:</span>
					<span class="seconds">${s}</span>`;
		// Рукурсивное зацикливание
		timerId = setTimeout(formatDate, 1000);
	}

});