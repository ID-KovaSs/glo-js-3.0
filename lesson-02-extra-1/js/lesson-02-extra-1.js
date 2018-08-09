/*jshint esversion: 6 */

/* 1) Создать массив week и записать в него дни недели в виде строк*/
let week = [' Sunday', ' Monday', ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday'];

/*Вывести на экран все дни недели*/
document.getElementById('week').textContent = week;

/*Каждый из них с новой строчки*/
for (let i = 0; i < week.length; i++) {
	let day = document.createElement('div'),
			divPos = document.getElementById('newStr');
	day.className = `div_${[i]}`;
	day.textContent = `${week[i]}`;
	divPos.appendChild(day);
}

 /*Выходные дни - жирным шрифтом (суббота, воскресенье)*/
 for (let i = 0; i < week.length; i++) {
		let day = document.createElement('div'),
				divPos = document.getElementById('weekend');
	// Проверка на воскресенье, т.к. по спецификации первый день недели - это воскресенье, и оно имеет индекс 0
	if (i == 0) {
		day = document.createElement('div');
			divPos = document.getElementById('weekend');
			day.style.fontWeight = 'bold';
			day.style.color = 'red'; // Для лучшего восприятия, в ТЗ - этого нет
			day.className = `div_${[i]}`;
			day.textContent = `${week[i]}`;
			divPos.appendChild(day);
	} else if (i < week.length-1) {
		day.className = `div_${[i]}`;
		day.textContent = `${week[i]}`;
		divPos.appendChild(day);
		} else { 
			// Проверка на субботу
			day = document.createElement('div');
			divPos = document.getElementById('weekend');
			day.style.fontWeight = 'bold';
			day.style.color = 'red'; // Для лучшего восприятия, в ТЗ - этого нет
			day.className = `div_${[i]}`;
			day.textContent = `${week[i]}`;
			divPos.appendChild(day);
		}
}

/*Текущий день - курсивом*/
for (let i = 0; i < week.length; i++) {
		let	dayNow = document.createElement('div'),
				divPos = document.getElementById('dayNow'),
				day = new Date(), // Запись времени в фоpмате => Thu Aug 09 2018 14:24:05 GMT+0300 (Москва, стандартное время)
				week = [' Sunday', ' Monday', ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday'];
	
	// Проверка на соответствие индекса цикла i и индекса сегоднешнего дня в массиве week  
	if ( i == day.getDay()) {
		dayNow.style.fontStyle = 'italic';
		dayNow.style.fontWeight = 'bold'; // Для лучшего восприятия, в ТЗ - этого нет
		dayNow.style.color = 'red'; // Для лучшего восприятия, в ТЗ - этого нет
		dayNow.className = `div_${[i]}`;
		dayNow.textContent = `${week[i]}`;
		divPos.appendChild(dayNow);
	} else {
	dayNow.className = `div_${[i]}`;
	dayNow.textContent = `${week[i]}`;
	divPos.appendChild(dayNow);
	}
}

/* 2) Создать массив arr = []*/
let arr = [];

/*Записать в него 7 многозначных чисел в виде строк*/
for (let i = 0; i < 7; i++) {
	arr[i] = prompt('Введите число в массив');

/*Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)	*/
	if (arr[i].indexOf('3') == 0) {
		console.log(arr[i]);
	} else if (arr[i].indexOf('7') == 0) {
		console.log(arr[i]);
	} else {

	}
}