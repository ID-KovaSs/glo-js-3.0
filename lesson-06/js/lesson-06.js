/*jshint esversion: 6 */

/*Получить кнопку "Открыть магазин" через id*/
let shopOpen = document.querySelector('#open-btn');

/*Получить все поля в левом меню через классы*/
let shopName = document.querySelector('.name-value'), //Название магазина:
		shopBudget = document.querySelector('.budget-value'), //Бюджет магазина:
		shopGoods = document.querySelector('.goods-value'), //Категории товаров:
		shopItems = document.querySelector('.items-value'), //Наименования товаров:
		shopEmployers = document.querySelector('.employers-value'), //Сотрудники:
		shopDiscount = document.querySelector('.discount-value'), //Дисконтная система
		shopIsOpen = document.querySelector('.isopen-value'); //Открыто

/*Получить поля категории товаров через класс*/
let shopGoodsItem = document.querySelectorAll('.goods-item'); //Введите категории товаров arr[]

/* Получить все 3 кнопки через Tag*/
let openBtn = document.querySelectorAll('.main-functions button'),
		shopItemBtn = document.querySelectorAll('.main-functions button')[0],
		shopBudgetBtn = document.querySelectorAll('.main-functions button')[1],
		shopEmployersBtn = document.querySelectorAll('.main-functions button')[2];

/*Получить поля ввода товаров, времени и расчета бюджета через querySelector*/
let shopChooseItems = document.querySelector('#items'), //Введите продукты через запятую
		shopTimeValue = document.querySelector('#time'), //Сколько сейчас времени?
		shopCountBudget = document.querySelector('#budget'); //Расчет дневного бюджета

/*Получить поля имен сотрудников через querySelectorAll*/
let shopHireEmployersItem = document.querySelectorAll('.hire-employers-item');

	// Блокировка полей ввода
	openBtn[0].setAttribute("disabled", "true");
	openBtn[1].setAttribute("disabled", "true");
	openBtn[2].setAttribute("disabled", "true");
	shopGoodsItem[0].setAttribute("disabled", "true");
	shopGoodsItem[1].setAttribute("disabled", "true");
	shopGoodsItem[2].setAttribute("disabled", "true");
	shopGoodsItem[3].setAttribute("disabled", "true");
	shopCountBudget.setAttribute("disabled", "true");
	shopChooseItems.setAttribute("disabled", "true");
	shopHireEmployersItem[0].setAttribute("disabled", "true");
	shopHireEmployersItem[1].setAttribute("disabled", "true");
	shopHireEmployersItem[2].setAttribute("disabled", "true");

	// Событие для кнопки открытия магазина
	shopOpen.addEventListener('click', () => {
		mainList.budget = +prompt('Ваш бюджет на месяц?'); 
					
					while (isNaN(mainList.budget) || mainList.budget =='' || mainList.budget == null) {
						mainList.budget = +prompt('Ваш бюджет на месяц?', 10000); // Замучался вводить значения - поставил дефолтные
						console.log(`Бюджет на месяц составляет ${mainList.budget} рублей`);
						shopBudget.textContent = mainList.budget;
					}

					mainList.shopName = prompt('Название вашего магазина?', 'Зара').toUpperCase(); // Замучался вводить значения - поставил дефолтные
					console.log(`Наш магазин называется ${mainList.shopName}`);
					shopName.textContent = mainList.shopName;
	});

	// Событие для поля ввода продуктов в магазин
	shopItemBtn.addEventListener('click', () => {
		for (let i = 0; i < shopGoodsItem.length; i++) {
		 	let a = shopGoodsItem[i].value;
		 	
		 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length <50) {
		 	mainList.shopGoods[i] = a;	
		 	console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	// Вывод в консоль что будет продаваться?
		 	shopGoods.textContent = mainList.shopGoods;
		 	}
		}
	});

	// Событие для поля ввода наименования товаров
	shopChooseItems.addEventListener('change', () => {
			let items = shopChooseItems.value;

			if (isNaN(items) && items != '' ) {
				mainList.shopItems = items.split(",");
				mainList.shopItems.sort();
				//Вывод полученных значений в поле .items-value
				shopItems.textContent = mainList.shopItems;
				console.log(mainList.shopItems);
			}	
	});

	// Событие для поля проверки работы магазина
	shopTimeValue.addEventListener('change', () => {
		let time = shopTimeValue.value;
				
	// Проверка на условие
		if (time < 0) {
			console.log('Такого просто не может быть');
			mainList.open = false;
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true;
			} else if (time < 24) {
					console.log('Уже слишком поздно!');
					mainList.open = false;
				} else {
					mainList.open = false;
					console.log('В сутках только 24 часа:)');
				}
		// Проверка на mainList.open = true;
		if (mainList.open == true) {
			shopIsOpen.style.backgroundColor = 'green';
			// Удаление кнопкам атрибута disabled
			openBtn[0].removeAttribute("disabled", "true");
			openBtn[1].removeAttribute("disabled", "true");
			openBtn[2].removeAttribute("disabled", "true");
			shopGoodsItem[0].removeAttribute("disabled", "true");
			shopGoodsItem[1].removeAttribute("disabled", "true");
			shopGoodsItem[2].removeAttribute("disabled", "true");
			shopGoodsItem[3].removeAttribute("disabled", "true");
			shopChooseItems.removeAttribute("disabled", "true");	
			shopHireEmployersItem[0].removeAttribute("disabled", "true");
			shopHireEmployersItem[1].removeAttribute("disabled", "true");
			shopHireEmployersItem[2].removeAttribute("disabled", "true");
		} else {
			// Добавление кнопкам атрибута disabled
			openBtn[0].setAttribute("disabled", "true");
			openBtn[1].setAttribute("disabled", "true");
			openBtn[2].setAttribute("disabled", "true");
			shopGoodsItem[0].setAttribute("disabled", "true");
			shopGoodsItem[1].setAttribute("disabled", "true");
			shopGoodsItem[2].setAttribute("disabled", "true");
			shopGoodsItem[3].setAttribute("disabled", "true");
			shopChooseItems.setAttribute("disabled", "true");
			shopHireEmployersItem[0].setAttribute("disabled", "true");
			shopHireEmployersItem[1].setAttribute("disabled", "true");
			shopHireEmployersItem[2].setAttribute("disabled", "true");
			shopIsOpen.style.backgroundColor = 'red';
		}
	});

	// Событие для поля рассчета дневного бюджета
	shopBudgetBtn.addEventListener('click', () => {
		let summ = mainList.budget / 30;
		shopCountBudget.value = summ.toFixed(2); // Округление до копеек
		console.log(`Сумма бюджета на день: ${summ.toFixed(2)} рублей`);
	});

	// Событие для поля найма сотрудников
	shopEmployersBtn.addEventListener('click', () => {
		for (let i = 0; i < shopHireEmployersItem.length; i++) {
				let nameEmpl = shopHireEmployersItem[i].value;
				mainList.employers[i] = nameEmpl;
				console.log(mainList.employers[i]);
				shopEmployers.textContent +=`${mainList.employers[i]}, `;
		}
	});

/*	Событие для поля дисконтной системы, реализовано по клику*/
	shopDiscount.addEventListener('click', () => {
		let price;
		if (mainList.discount == true) {
			mainList.discount = false;
			price = '80%';
			shopDiscount.style.backgroundColor = 'green';
			console.log(`Активирована скидка, цена ${price}`);
		} else {
			mainList.discount = true;
			price = '100%';
			shopDiscount.style.backgroundColor = 'red';
			console.log(`Скидка деактивирована, цена ${price}`);
		}
	});

// Основной объект
	let	mainList = {
		budget: '',
		shopName: '',
		shopGoods: [],
		employers: {},
		discount: true,
		open: false,
		shopItems: []
	};

