/*jshint esversion: 6 */

	let	mainList = {
				budget: '',
				shopName: '',
				shopGoods: [],
				employers: {},
				discount: false,
				open: false,
				shopItems: [],
				// Функция добавления товаров 
				chooseGoods: function chooseGoods(){
											for (let i = 0; i < 3; i++) {
											 	let a = prompt('Какой тип товаров будем продавать?', '');
											 	
											 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
											 	mainList.shopGoods[i] = a;	
											 	console.log(`В магазине будет продаваться ${mainList.shopGoods[i]}`);	// Вывод в консоль что будет продаваться?

											 	} else {
											 		alert('Извините но вы должны ввести название товара');
											 		i--;
											 	}
											}
										},
				// Функция скидочной системы
				discontSys: 	function discontSys() {
												let price;
												if (mainList.discount == true) {
													price = '80%';
													console.log(price);
												} else {
													price = '100%';
													console.log(price);
												}
											},
				// Функция найма сотрудников
				recruitment: function recruitment() {
											for (let i = 1; i < 5; i++) {
												let nameEmpl = prompt(`Введите имя вашего ${i} сотрудника`, '');
												mainList.employers[i] = nameEmpl;
												console.log(mainList.employers[i]);
											}
										},
				// Начальная функция
				start: function start() {
								mainList.budget = +prompt('Ваш бюджет на месяц?'); 
								
								while (isNaN(mainList.budget) || mainList.budget =='' || mainList.budget == null) {
									mainList.budget = +prompt('Ваш бюджет на месяц?', 10000); // Замучался вводить значения - поставил дефолтные
									console.log(`Бюджет на месяц составляет ${mainList.budget}`);
								}

								mainList.shopName = prompt('Название вашего магазина?', 'Зара').toUpperCase(); // Замучался вводить значения - поставил дефолтные
								console.log(`Наш магазин называется ${mainList.shopName}`);
							},
				// Проверка времени работы магазина
				workTime: function workTime(time) {
										let time;
										if (time < 0) {
											console.log('Такого просто не может быть');
										} else if (time > 8 && time < 20) {
												mainList.open = true;
												console.log('Время работать!');
											} else if (time < 24) {
													mainList.open = false;
													console.log('Уже слишком поздно!');
												} else {
													mainList.open = false;
													console.log('В сутках только 24 часа:)');
												}
										},
				// Проверка ежедневного бюджета
				budgetInDay: function budgetInDay() {
											let budgetInDay = mainList.budget / 30;
													alert(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);
													console.log(`Ежедневные траты в день составляют ${budgetInDay.toFixed(2)} рублей`);
										},
				// Добавление перечня товаров
				chooseShopItem: function chooseShopItem() {
					for (let i = 0; i < 1; i++){
						let items = prompt('Перечислите через запятую ваши товары', '');

						/*Написать проверку, что пользователь может:
							· Ввести в типах товара только строку
							· Не может оставить строку пустой
							· Не может отменить вопрос*/
						if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' ) {
							mainList.shopItems = items.split(",");
							mainList.shopItems.push(prompt('Подождите, еще', ''));
							mainList.shopItems.sort();

							/*Используя цикл for in для объекта вывести в консоль сообщение "Наш магазин включает в себя: "*/
							for( let key in mainList.shopItems) {
								console.log(`Наш магазин включает в себя: ${mainList.shopItems[key]}`);
							}

							/*При помощи метода перебора массива(forEach) вывести на экран сообщение "У нас вы можете купить: " и полученные товары
							· Товары должны начинаться с 1, а не с 0. Этот пункт - часть одноименной функции*/
							mainList.shopItems.forEach(function(item,i,arr){
								console.log(`У нас вы можете купить: ${i+1}: ${item} `);
							})

						} else {
							alert('Извините но вы должны ввести названия товаров!');
							i--;
						}	
					}
				}
			};

mainList.chooseShopItem();

console.log(mainList);
