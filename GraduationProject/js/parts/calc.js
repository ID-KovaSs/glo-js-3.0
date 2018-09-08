function calc() {
  let size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      calcPrice = document.querySelector('.calc-price'),
      calc = document.querySelector('.calc');

  disableSelect();
  // Вычисление суммы
  function sumPrice() {
    let sum = Number(size.value) + Number(material.value) + Number(options.value);
    // Проверка на ввод промокода
    if (promocode.value.match( /IWANTPOPART/ig )) sum = sum - sum * 0.3;
    return sum;
  }
  // Добавление суммы на страницу
  function innerSum() {
    calcPrice.style.fontFamily = "'Circe Extra Bold', sans-serif";
    calcPrice.style.fontSize = "5rem";
    calcPrice.style.padding = "3rem 7.5rem";
  }

  function clearSum() {
    calcPrice.textContent = "Для расчета нужно выбрать размер картины и материал картины";
    calcPrice.style.fontFamily = "";
    calcPrice.style.fontSize = "";
    calcPrice.style.padding = "";
  } 

  // Обнуление всех инпутов
  function disableSelect() {
    material.value = 0;
    options.value = 0;
    material.disabled = true;
    material.style.color = "red";
    options.disabled = true;
    options.style.color = "red";
  }
  // Проверка на порядок ввода
  function checkInput(e){
    if(size.value == "0") {
      disableSelect();
      clearSum();
    }
    if(size.value != 0) {
      if(size.value != 0 && material.value != 0){
        calcPrice.textContent = sumPrice();
      } else {
        clearSum();
      }
      material.disabled = false;
      material.style.color = "";
    } else {
      disableSelect();
    }
    if(material.value != 0) {
      calcPrice.textContent = sumPrice();
      innerSum();
      options.disabled = false;
      options.style.color = "";
    } else {
      options.value = 0;
      options.disabled = true;
      options.style.color = "red";
    }
  }

  calc.addEventListener('change', function(e) {
    let target = e.target;
    checkInput(target);
    if(target.classList.contains("promocode")) {
      checkInput(target);
    }
  });
}

module.exports = calc;