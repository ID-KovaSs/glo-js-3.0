/*jshint esversion: 6 */
function getFriendlyNumbers(start, end) {
	// Проверка на ввод строковых значений
	if (typeof(start) == "string" && typeof(end) == "string") {
		return false;
	}
	// Проверка на ввод начала диапазона превышающего его конец
	if (start > end) {
		return false;
	}
	// Проверка положительны ли числа диапазона
	if (start > 0 && end > 0 ) {
		if (checkNum(start, end)) {
			let arrNumber = arrNum(start, end);
			return getFrendlyNum(arrNumber);
		}
	} else {
		return false;
	}
// return[]
}

/*Функция проверки интервала на соответствие условиям*/
function checkNum(num1, num2){
	if (num1 != num2 ) {
		return true;
	} else {
		return [];
	}
}

/* Функция создания массива по входным параметрам num1 - начало интервала, num2 - конец*/
function arrNum(num1, num2) {
	let arrNum = [];

	for (let i = num1; i <= num2; i++) {
		arrNum.push(i);
	}
	return arrNum;
}

/*Вывод массива массивов с дружественными числами*/
function getFrendlyNum(arr) {
	let arrFriend = [],
			friendNunRes;
	for (var i = 0; i < arr.length; i++) {
			// console.log(`№${i} ${arr[i]}: ${getDivisorsSum(arr[i])}`);
			for (let j = i; j <= arr.length; j++) {
				let numberCheck1 = getDivisorsSum(i),
						numberCheck2 = getDivisorsSum(j);
					// console.log(`№${j} ${arr[j]}: ${getDivisorsSum(arr[j])}`);
				if (numberCheck1 == j && numberCheck2 == i && numberCheck1 != numberCheck2 /*&& numberCheck1 < numberCheck2*/){
					arrFriend.push([i,j]);
					// console.log(arrFriend);
					friendNunRes = arrFriend;
				}
			}
		}

		if (arrFriend.length === 0) {
			return [];
		}

		if (arrFriend.length != 0 ) {
			return friendNunRes;
		} else {
			return [];
		}
}

/*Промежуточная функция определения суммы делителей*/
function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}

/*Определение делителей*/
function getDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if ( num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

/*Определение суммы чисел*/
function getSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

/*Модульный тест для проверки правильности решения*/
module.exports = {
    firstName: 'Denis',
    secondName: 'Isaev',
    task: getFriendlyNumbers
};