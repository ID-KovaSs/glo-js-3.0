function getFriendlyNumbers(start, end) {
		if (checkNum(start, end)) {
			let arrNumber = arrNum(start, end);
			return getFrendlyNum(arrNumber);
		}

    // return getFrendlyNum(arrNumber);
}

// document.getElementById('title').textContent = `Все дружественные числа в диапазоне от  до `;

function checkNum(num1, num2){
	return num1 != num2 && num1 < num2;
}


function arrNum(num1, num2) {
	let arrNum = [];

	for (let i = num1; i <= num2; i++) {
		arrNum.push(i);
	}
	return arrNum;
}

function getFrendlyNum(arr) {
	let arrFriend = [];
	for (var i = 0; i <= arr.length; i++) {
			console.log(`${i}: ${getDivisorsSum(i)}`);
			for (let j = 0; j <arr.length; j++) {
				let numberCheck1 = getDivisorsSum(i),
						numberCheck2 = getDivisorsSum(j);
				if (numberCheck1 == j && numberCheck2 == i && numberCheck1 != numberCheck2 && numberCheck1 < numberCheck2){
					arrFriend.push([j,i]);
					console.log(arrFriend);
				} else {

				}
			}
		}
	}


/*function getFrendlyNum(num1, num2) {
	let sum1 = getDivisorsSum(num1),
			sum2 = getDivisorsSum(num2);

	if (sum1 == num2 && sum2 == num1) {
		return true
	} else {
		return false
	}
}
*/
function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}

function getDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if ( num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

function getSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

/*module.exports = {
    firstName: 'Denis',
    secondName: 'Isaev',
    task: getFriendlyNumbers
}*/