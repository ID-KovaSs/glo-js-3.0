/*jshint esversion: 6 */

/*Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
	Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)*/
let nowTime = new Date(),
		title1 = document.querySelector("#title1"),
		addTime = document.createElement('div');

function formatDate(date) {
	// Часы 
	let h = date.getHours();
	if (h < 10) h = `0${h}`;
	// Минуты
	let	m = date.getMinutes();
	if (m < 10) m = `0${m}`;
	// Секунды
	let	s = date.getSeconds();
	if (s < 10) s = `0${s}`;

  // День
  let dd = date.getDate();
  if (dd < 10) dd = `0${dd}`;
  // Месяц
  let mm = date.getMonth() + 1;
	if (mm < 10) mm = `0${mm}`;
	// Год
  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;

  return `${h}:${m}:${s} ${dd}.${mm}.${yy}`;
}
// Вывод на экран
addTime.textContent = formatDate(nowTime);
title1.appendChild(addTime);

/*Напишите функцию, которая выводит на страницу текущий день недели на русском языке*/

function rusDay(date) {
	let rusDay =  date.toLocaleString("ru", options);
	return `${rusDay}`
}
// Объявление переменных
let title2 = document.querySelector("#title2"),
		addDay = document.createElement('div'),
		options = {weekday: 'long'}; // Опции отображения
// Вывод на экран
addDay.textContent = rusDay(nowTime);
title2.appendChild(addDay);


/*Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
	· На странице создайте интерфейс для её отображения: как минимум - 3 input’a: для ввода дат и вывода результата.*/

let startDate = document.querySelectorAll('#startNum'),
		endDate = document.querySelectorAll('#endNum'),
		resultDate = document.querySelectorAll('#result'),
		sd = new Date(startDate);

console.log(sd);
 

function pastDay(startDate, endDate) {
	date.setDate(startDate.getDate() - endDate.getDate());
  return date.getDate();
}