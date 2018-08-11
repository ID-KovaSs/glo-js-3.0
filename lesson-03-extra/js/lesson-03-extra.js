/*jshint esversion: 6 */

/*1) У вас есть str = “урок-3-был слишком легким”*/

let str = 'урок-3-был слишком легким';

console.log('У вас есть строка str = “урок-3-был слишком легким” =>');
console.log(str);

/* · Сделать так, чтобы строка начиналась с большой буквы*/
let newStr = str[0].toUpperCase() + str.slice(1);

console.log('Сделать так, чтобы строка начиналась с большой буквы =>');
console.log(newStr);


/* 2)Теперь замените все “-” на пробелы и вывести в консоль*/
let strReplace = newStr.replace(new RegExp("-",'g')," ");

console.log('Теперь замените все “-” на пробелы и вывести в консоль =>');
console.log(strReplace);

/*Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”
		· Вывести на экран*/
let strHint = 'легким',
		result = strReplace.match(/легким/i),
		cutStr = result[0].replace(new RegExp("им",'g'),"оо");
		
		console.log('Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о” =>');
		console.log(cutStr);
	

/*У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]*/
let arr = [20, 33, 1, 'Человек', 2, 3];

/*Вывести в консоль квадратный корень из суммы кубов его элементов*/
let arrSqrt,
		arrSum = 0;

function isNum(n) {   return Number(n) === n;} // Функция проверки на число

for (let i = 0; i < arr.length; i++) {
	if (isNum(arr[i])) {
		arrSum += Math.pow(arr[i],3);
		console.log(`Это число - ${arr[i]}`);
	}
}
arrSqrt = Math.sqrt(arrSum);

console.log(`Квадратный корень числа ${arrSum} = ${arrSqrt}`);

/*5)Создайте функцию, которая принимает 1 аргумент*/

function oneArgFunc(text) {

	let cutArrSpace,
			cut50Space;
	
	for (var i = 0; i < 1; i++) {
		text = prompt('Введите строку');
		if ( (typeof(text)) === 'string' && (typeof(text)) != null && text != '' ) {
		// В полученной строке функция должна убрать все пробелы в начале и в конце
			cutArrSpace = text.split(''); // Преобразует строку посимвольно в массив
			if (cutArrSpace[0] == ' ') { // Проверяем на пробел вначале строки
				cutArrSpace.shift(); // Удаляем первую строку, если в ней есть пробел
			}
			if(cutArrSpace[cutArrSpace.length - 1] == ' ') { // Проверяем на пробел вконце строки
				cutArrSpace.pop(); // Удаляем последнюю строку, если в ней есть пробел
			}

			// Если строка более 50 знаков - то после 50го символа часть текста скрывается и вместо них появляются три точки (...)
			if (cutArrSpace.length > 50) { // Проверка длины строки 
				cut50Space = `${text.substr(0,50)} ...`; // Обрезка строки с 0 по 50 индекс
				console.log(cut50Space);
			} 
		} else {
		// Если передана не строка - функция оповещает об этом пользователя
			alert ("Вы ввели не строку!");
			i--;
		}
	}

	console.log(cutArrSpace);
  console.log(text);
}

oneArgFunc();