/*jshint esversion: 6 */

/*Получить кнопку "Открыть магазин" через id*/
let shopOpen = document.querySelector('#open-btn');

	console.log('Получить кнопку "Открыть магазин" через id');
	console.log(shopOpen);

/*Получить все поля в левом меню через классы*/
let shopName = document.querySelector('.name'), //Название магазина:
		shopBudget = document.querySelector('.budget'), //Бюджет магазина:
		shopGoods = document.querySelector('.goods'), //Категории товаров:
		shopItems = document.querySelector('.items'), //Наименования товаров:
		shopEmployers = document.querySelector('.employers'), //Сотрудники:
		shopDiscount = document.querySelector('.discount'), //Дисконтная система
		shopIsOpen = document.querySelector('.isopen'); //Открыто

	console.log('Получить все поля в левом меню через классы');
	console.log(shopName);
	console.log(shopBudget);
	console.log(shopGoods);
	console.log(shopItems);
	console.log(shopEmployers);
	console.log(shopDiscount);
	console.log(shopIsOpen);

/*Получить поля категории товаров через класс*/
let shopGoodsItem = document.querySelectorAll('.goods-item'); //Введите категории товаров arr[]

	console.log('Получить поля категории товаров через класс');
	console.log(shopGoodsItem);

/* Получить все 3 кнопки через Tag*/
let shopBtn = document.querySelectorAll('.main-functions button');

	console.log('Получить все 3 кнопки через Tag');
	console.log(shopBtn);

/*Получить поля ввода товаров, времени и расчета бюджета через querySelector*/
let shopChooseItems = document.querySelector('#items'), //Введите продукты через запятую
		shopTimeValue = document.querySelector('#time'), //Сколько сейчас времени?
		shopCountBudget = document.querySelector('#budget'); //Расчет дневного бюджета

	console.log('Получить поля ввода товаров, времени и расчета бюджета через querySelector');
	console.log(shopChooseItems);
	console.log(shopTimeValue);
	console.log(shopCountBudget);

/*Получить поля имен сотрудников через querySelectorAll*/
let shopHireEmployersItem = document.querySelectorAll('.hire-employers-item');

	console.log('Получить поля имен сотрудников через querySelectorAll');
	console.log(shopHireEmployersItem);