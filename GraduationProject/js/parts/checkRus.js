function checkRus() {
  let body = document.querySelector('body');
  
  // Проверка на ввод русских символов в поле имени и комментария 
  function checkRus(e) {
    (e.value.match(/[А-я]/ig))? console.log(e.value) : e.value = '';
  }
  
  body.addEventListener('input', function(e) {
    let target = e.target;
    if(target.name == "name" || target.name == "message") {
      checkRus(target);
    }
  });
}

module.exports = checkRus;