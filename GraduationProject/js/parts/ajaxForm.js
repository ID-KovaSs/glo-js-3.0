function ajaxForm() {
  // Forms
  let message = {},
      form = document.querySelectorAll('.form'),
      body = document.querySelector('body'),
      statusMessage = document.createElement('img');

  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";

  function hideElements(form) {
    for (let i = 0; i < form.children.length; i++) {
      if(form.children[i].tagName =='H4'){
        form.children[i].style.display = "block";
      } else if(form.children[i].tagName =='IMG') {
        form.children[i].style.display = "inline-block";
        form.children[i].style.width = "150px";
        form.style.display = "flex";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        form.style.flexFlow = " column wrap";;
      } else {
        form.children[i].style.display = "none";
      }
    }
  }
  
  function loading(obj) {
    hideElements(obj);
    statusMessage.src = "img/ajax/send.gif";
  }
  function success(obj) {
    hideElements(obj);
    statusMessage.src = "img/ajax/success-mail.gif";
  }
  function failure(obj) {
    hideElements(obj);
    statusMessage.src = "img/ajax/error.gif";
  }
  
  function ajaxSend(e) {
      let input = e.getElementsByTagName('input');
      e.appendChild(statusMessage);
      
      // AJAX
      let request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      // Записываем кодировку
      request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");
  
      let formData = new FormData(e);
      request.send(formData);
  
      request.onreadystatechange = function() {
        if(request.readyState < 4) {
          loading(e);
        } else if(request.readyState === 4) {
          if(request.status == 200 && request.status < 300) {
            success(e);
          } else {
            failure(e);
            }
        }
      };
    
      for (let i = 0; i < input.length; i++) {
        // Очищаем поля ввода
        input[i].value = '';
      }
  }
  
  body.addEventListener('submit', (e) => {
    let target = e.target;
    e.preventDefault();
      ajaxSend(target);
  });
}

module.exports = ajaxForm;