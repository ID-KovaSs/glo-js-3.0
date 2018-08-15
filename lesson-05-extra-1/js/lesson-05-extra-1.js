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
let shopGoodsItem1 = document.querySelectorAll('.goods-item')[0], //Введите категории товаров arr[]
		shopGoodsItem2 = document.querySelectorAll('.goods-item')[1], //Введите категории товаров arr[]
		shopGoodsItem3 = document.querySelectorAll('.goods-item')[2], //Введите категории товаров arr[]
		shopGoodsItem4 = document.querySelectorAll('.goods-item')[3]; //Введите категории товаров arr[]

	console.log('Получить поля категории товаров через класс');
	console.log(shopGoodsItem1);
	console.log(shopGoodsItem2);
	console.log(shopGoodsItem3);
	console.log(shopGoodsItem4);

/* Получить все 3 кнопки через Tag*/
let shopBtn1 = document.querySelectorAll('.main-functions button')[0],
		shopBtn2 = document.querySelectorAll('.main-functions button')[1],
		shopBtn3 = document.querySelectorAll('.main-functions button')[2];

	console.log('Получить все 3 кнопки через Tag');
	console.log(shopBtn1);
	console.log(shopBtn2);
	console.log(shopBtn3);

/*Получить поля ввода товаров, времени и расчета бюджета через querySelector*/
let shopChooseItems = document.querySelector('#items'), //Введите продукты через запятую
		shopTimeValue = document.querySelector('#time'), //Сколько сейчас времени?
		shopCountBudget = document.querySelector('#budget'); //Расчет дневного бюджета

	console.log('Получить поля ввода товаров, времени и расчета бюджета через querySelector');
	console.log(shopChooseItems);
	console.log(shopTimeValue);
	console.log(shopCountBudget);

/*Получить поля имен сотрудников через querySelectorAll*/
let shopHireEmployersItem1 = document.querySelectorAll('.hire-employers-item')[0],
		shopHireEmployersItem2 = document.querySelectorAll('.hire-employers-item')[1],
		shopHireEmployersItem3 = document.querySelectorAll('.hire-employers-item')[2];

	console.log('Получить поля имен сотрудников через querySelectorAll');
	console.log(shopHireEmployersItem1);
	console.log(shopHireEmployersItem2);
	console.log(shopHireEmployersItem3);