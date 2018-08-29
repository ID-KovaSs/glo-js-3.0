/*Написать обработчик события, не позволяющий скриптам выполняться до загрузки страницы*/

$(document).ready(function() {
	/*Написать функцию, что при клике на “Выбрать тур” , “Получить консультацию” или “Расписание туров” 
	(все 3 элемента) подложка (класс overlay) медленно появлялась на странице (через прозрачность), 
	а само модальное окно (класс modal) плавно выезжало сверху*/
	$('a[href="#sheldure"]').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1500);
		$('.modal').animate({height : 'toggle'},1000);
	});
	
	$('.main_btna').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1500);
		$('.modal').animate({height : 'toggle'},1000);
	});
	
	$('.main_btn').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1500);
		$('.modal').animate({height : 'toggle'},1000);
	});
	/*Написать функцию, что при клике на крестик всё происходило бы наоборот:
	подложка исчезала, модальное окно уезжало вверх*/
	$('.close').on('click', function() {
		$('.overlay').animate({opacity : 'toggle'},1500);
		$('.modal').animate({height : 'toggle'},1000);
	});
});