/*jshint esversion: 6 */

function myApp() {
		let budgetMonth = +prompt('Ваш бюджет на месяц?', 10000), // Замучался вводить значения - поставил дефолтные
				shop = prompt('Название вашего магазина?', 'Зара'), // Замучался вводить значения - поставил дефолтные
				time = 19;

let	mainList = {
			budget: budgetMonth,
			shopName: shop,
			shopGoods: [],
			employesrs: {},
			open: false
		};

// Проверка доступа
console.log(`Бюджет на месяц составляет ${mainList.budget}`);
console.log(`Наш магазин называется ${mainList.shopName}`);

/* Задаем пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods*/

// Запись через цикл for
	for (let i = 0; i < 3; i++) {

	 	let a = prompt('Какой тип товаров будем продавать?');
	 	
	 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
	 	mainList.shopGoods[i] = a;	
	 	// Вывод в консоль что будет продаваться?
	 	console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	 	

	 	} else {
	 		alert('Извините но вы должны ввести название товара');
	 		a = prompt('Какой тип товаров будем продавать?');
	 		mainList.shopGoods[i] = a;
	 		console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	
	 	}
	}

/* Запись через цикл while - проверка на уловия реализована для первого прохода (если 2 раза нажать отмена в переменную запишется null)
	let i = 0,
			a;
	
	while (i < 3) {
		
		a = prompt('Какой тип товаров будем продавать?');	
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
 			mainList.shopGoods[i] = a;
 			// Вывод в консоль что будет продаваться?
 			console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	 	
 			i++;	
 		} else {
	 		alert('Извините но вы должны ввести название товара');
	 		a = prompt('Какой тип товаров будем продавать?');
	 		mainList.shopGoods[i] = a;
	 		console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	
	 		i++;
 		}
	};*/

/* Запись через цикл do while - проверка на уловия реализована для первого прохода (если 2 раза нажать отмена в переменную запишется null)

	let i = 0,
			a;

do {
	
	a = prompt('Какой тип товаров будем продавать?');	
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
 			mainList.shopGoods[i] = a;
 			// Вывод в консоль что будет продаваться?
 			console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	 	
 			i++;	
 		} else {
	 		alert('Извините но вы должны ввести название товара');
	 		a = prompt('Какой тип товаров будем продавать?');
	 		mainList.shopGoods[i] = a;
	 		console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	
	 		i++;
 		}
} while(i < 3);*/

 	// Проверка времени работы магазина
 	if (time < 0) {
 		console.log('Такого просто не может быть');
 	} else if (time > 8 && time < 20) {
 			console.log('Время работать!');
 		} else if (time < 24) {
 				console.log('Уже слишком поздно!');
 			} else {
 				console.log('В сутках только 24 часа:)');
 			}

/*Вывод на экран пользователя бюджет на 1 день (брать месяц за 30 дней)*/

	let budgetInDay = budgetMonth / 30;
	alert(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);
	console.log(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);

	console.log(mainList);

}

myApp();