/*jshint esversion: 6 */

function simpleNumber() {
	// Цикл на проверку вводимых значений и отсутствия исключений
	for (let i = 0; i < 1; i++) {
	let searchList = prompt('Для вычисления простых чисел в диапазоне от 1 до n, укажите значение n:', ''),
			arr = []; // Шаг 1
	
		// Проверка на правильный ввод и отсутствия исключений
		if ((typeof(searchList)) === 'string' && (typeof(searchList)) != null && searchList != '' ) {
			let searchArr = searchList.split(" ");
			for (let i = 2; i < searchArr[0]; i++) {
			  arr[i] = true
			}

			// Шаг 2
			let p = 2;

			do {
			  // Шаг 3
			  for (i = 2 * p; i < searchArr[0]; i += p) {
			    arr[i] = false;
			  }

			  // Шаг 4
			  for (i = p + 1; i < searchArr[0]; i++) {
			    if (arr[i]) break;
			  }
			  p = i;
			} while (p * p < searchArr[0]); // Шаг 5

			// Шаг 6 (готово)
			let sum = 0;
			for (i = 0; i < arr.length; i++) {
			  if (arr[i]) {
			    console.log(i);
			    document.getElementById('title').textContent = `Все простые числа в диапазоне от 1 до ${searchArr[0]}`;
			    let num = document.createElement('div'),
							divPos = document.getElementById('simpleNumber');
					num.className = `div_${i}`;
					num.textContent = `${i}`;
					divPos.appendChild(num);
			  }
			}

		} else {
			alert('Извините но вы не ввели никакого значения:(');
			i--;
		}
	}

}

simpleNumber();