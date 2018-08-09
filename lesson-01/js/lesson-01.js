
/*Создание скрипта создющего 2 переменные, которые будут получать данные от пользователя:
· Первая будет спрашивать "Ваш бюджет на месяц?"
· Вторая "Название вашего магазина?"*/

function myApp() {
		let budgetMonth = +prompt('Ваш бюджет на месяц?'),
				shop = prompt('Название вашего магазина?');

/*	Создание объекта mainList, который будет содержать такие данные:
	· Бюджет
	· Имя магазина
	· Массив товаров shopGoods
	· Объект с сотрудниками employers
	· Свойство open */

let	mainList = {
			budget: budgetMonth,
			shopName: shop,
			shopGoods: [],
			employesrs: {},
			open: false
		};

// Проверка доступа
console.log(mainList.budget);
console.log(mainList.shopName);

/* Задаем пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods*/
function whatSaleGoods() {

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

// Вывод в консоль что будет продаваться?
console.log(mainList.shopGoods[0]);
console.log(mainList.shopGoods[1]);
console.log(mainList.shopGoods[2]);

/*Тупой никак не допер как сделать - это через цикл:(
	 for (let i = 0; i > 3; i++) {
	 	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');	
	 	console.log(shopGoods[i]);
	 };*/
};

/*Вывод на экран пользователя бюджет на 1 день (брать месяц за 30 дней)*/
function budgetInDay() {
	let budgetInDay = budgetMonth / 30;
	alert(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);
	console.log(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`)
}; 

whatSaleGoods();
budgetInDay();
};

myApp();




