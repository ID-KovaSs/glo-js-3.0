/*jshint esversion: 6 */

/*Используя только файл скрипта выполнить такие действия:*/
let item = document.querySelectorAll(".menu-item"),
		menu = document.querySelector(".menu"),
		newItem = document.createElement('div');

// Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(item[1], item[3]);
newItem.classList.add('menu-item');
newItem.textContent = 'Пятый пункт';
menu.appendChild(newItem);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

// Поменять заголовок, добавить слово "подлинную"
let title = document.querySelector('#title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
let column = document.querySelectorAll('.column'),
		removeAdvertising = document.querySelector('.adv');
column[1].removeChild(removeAdvertising);

 // Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"

 for (let i = 0; i < 1; i++) {
	 let message = prompt('Как вы относитесь к технике Apple?');
 	
	 if ((typeof(message)) === 'string' && (typeof(message)) != null && message != '' ) {
	 		let regard = document.querySelector('#prompt');
	 		regard.textContent = message;
	 } else {
	 		alert('Вам необходимо ответить, иначе мы не сможем продолжить:(');
	 		i--;
	 	}
 }