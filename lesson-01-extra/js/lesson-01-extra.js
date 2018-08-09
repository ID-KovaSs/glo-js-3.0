/*Создать переменную num со значением 33721*/
let num = 33721;

/*Вывести в консоль произведение (умножение) цифр этого числа*/

let	output = [],
    sNumber = num.toString();

for (let i = 0, len = sNumber.length; i < len; i++) {
    output.push(+sNumber.charAt(i));

}

//Сложение 
for (var i = 0, sum = 0; i < output.length; sum += output[i++]);

//Умножение
for ( var i = 0, mult = 1; i < output.length; mult *= output[i++]);

// Полученный результат возвести в степень 3, используя только 1 оператор
let mathPow = Math.pow(mult, 3);

alert(`Результат возведения в 3 степень числа ${mult} равен ${mathPow}`);

//Вывести его на экран первые 2 цифры полученного числа

let twoNum = [],
    twoNumber = mathPow.toString();

for ( var i = 0; i < 2; i++) {
	twoNum.push(twoNumber.charAt(i));
};
for ( var i = 0, two = ''; i < 2; two += twoNum[i++]);


// Вывод данных в консоль
console.log(output);
console.log(`Сумма цифр числа ${num} равна ${sum}`);
console.log(`Произведение цифр числа ${num} равна ${mult}`);
console.log(`Результат возведения в 3 степень числа ${mult} равен ${mathPow}`);
console.log(`Первые 2 цифры числа ${mathPow} равны ${two}`);

alert(`Первые 2 цифры числа ${mathPow} равны ${two}`);