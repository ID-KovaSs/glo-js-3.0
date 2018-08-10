/*jshint esversion: 6 */

function myApp() {

	let price,
			time;
	
	let	mainList = {
				budget: '',
				shopName: '',
				shopGoods: [],
				employers: {},
				discount: false,
				open: false
			};

	/*2) Создать функцию дисконтной системы
		· Если у нас параметр discount = true, 
			то от значения переменной price необходимо оставить 80%
	*/
	function discontSys() {
		if (mainList.discount == true) {
			price = '80%';
			console.log(price);
		} else {
			price = '100%';
			console.log(price);
		}
	}

	/*3) Создать функцию найма сотрудников (employers)*/
	function recruitment() {
		/*4) Необходимо 4 раза спросить у пользователя имя сотрудника и записать в объект employers в формате Номер - Имя
			· Вызывать функции не обязательно
		*/
		for (let i = 1; i < 5; i++) {
			let nameEmpl = prompt(`Введите имя вашего ${i} сотрудника`);
			mainList.employers[i] = nameEmpl;
			console.log(mainList.employers[i]);
		}
	}

	function start() {
		mainList.budget = +prompt('Ваш бюджет на месяц?'); // Замучался вводить значения - поставил дефолтные
		
		while (isNaN(mainList.budget) || mainList.budget =='' || mainList.budget == null) {
			mainList.budget = +prompt('Ваш бюджет на месяц?', 10000);
			console.log(`Бюджет на месяц составляет ${mainList.budget}`);
		}

		mainList.shopName = prompt('Название вашего магазина?', 'Зара').toUpperCase(); // Замучался вводить значения - поставил дефолтные
		console.log(`Наш магазин называется ${mainList.shopName}`);
		time = 19;
	}



	/* Задаем пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods*/
	function chooseGoods(){
		for (let i = 0; i < 3; i++) {
		 	let a = prompt('Какой тип товаров будем продавать?');
		 	
		 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
		 	mainList.shopGoods[i] = a;	
		 	console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	// Вывод в консоль что будет продаваться?

		 	} else {
		 		alert('Извините но вы должны ввести название товара');
		 		i--;
		 	}
		}
	}

	// Проверка времени работы магазина
	function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
			console.log('Время работать!');
		} else if (time < 24) {
				console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа:)');
			}
	}

	// Проверка ежедневного бюджета
	function budgetInDay() {
		let budgetInDay = mainList.budget / 30;
				alert(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);
				console.log(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);
	}
	
	recruitment();
	// discontSys();
	// start();
	// chooseGoods();
	// workTime(21);
	// budgetInDay();
			
		console.log(mainList);
	}

myApp();