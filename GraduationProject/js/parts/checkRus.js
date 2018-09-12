function checkRus() {
  let body = document.querySelector('body');
  
  // Проверка на ввод русских символов в поле имени и комментария 
  function checkRus(e) {
    if(e.value.match(/[A-z0-9]/ig)){
      e.value = '';
    } 
    // (e.value.match(/[0-9]/ig))? console.log() : e.value = '';
  }
  
  body.addEventListener('input', (e) => {
    let target = e.target;
    if(target.name == "name" || target.name == "message") {
      checkRus(target);
    }
  });
}

module.exports = checkRus;