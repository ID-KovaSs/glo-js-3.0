function calc() {
	// Калькулятор на сайте
	let howManyPeople = document.getElementsByClassName('counter-block-input')[0],
			howManyDays = document.getElementsByClassName('counter-block-input')[1],
			selectBase = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			peopleSum = 0,
			daysSum = 0,
			totalSum = 0;

	totalValue.innerHTML = 0;

	howManyPeople.addEventListener('input', function(e) {
		let target = e.target.value;
		// Проверка на ввод + - e и запрет на ввод дробных чисел
		(target.match(/\d/ig) && target !='')? console.log(target) : howManyPeople.value = '';
		peopleSum = +this.value;
		// Проверка на отрицательные числа и 0
		(peopleSum > 0 && peopleSum != 0) ? totalSum = (peopleSum + daysSum ) * 4000 : totalSum = 0;
		
		// Если заполнить оба поля, а потом очистить одно из них - общая сумма всё равно рассчитывается. 
		if(howManyDays.value == '' || howManyPeople.value == '' || daysSum <=  0) { // Добавление двойной проверки через ||
			totalSum = 0;
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = totalSum;
		}
	});

	howManyDays.addEventListener('input', function(e) {
		let target = e.target.value;
		// Проверка на ввод + - e и запрет на ввод дробных чисел		
		(target.match(/\d/ig) && target !='')? console.log(target) : howManyDays.value = '';
		daysSum = +this.value;
		// Проверка на отрицательные числа и 0
		(daysSum > 0 && daysSum != 0) ? totalSum = (peopleSum + daysSum ) * 4000 : totalSum = 0;
		
		// Если заполнить оба поля, а потом очистить одно из них - общая сумма всё равно рассчитывается. 
		if(howManyDays.value == '' || howManyPeople.value == '' || peopleSum <= 0) { // Добавление двойной проверки через ||
			totalSum = 0;
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = totalSum;
		}
	});

	selectBase.addEventListener('change', function() {
		if(howManyDays.value == '' || howManyDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = totalSum;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}

module.exports = calc;