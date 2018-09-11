function ajaxForm() {
  // Forms
  let message = {},
      form = document.querySelectorAll('.form'),
      body = document.querySelector('body'),
      statusMessage = document.createElement('img');

  console.log(form);

  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";

  function ajaxSend() {
    for (let i = 0; i < form.length; i++) {
      let input = form[i].getElementsByTagName('input');
      form[i].appendChild(statusMessage);
      
      // AJAX
      let request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      // Записываем кодировку
      request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");
  
      let formData = new FormData(form[i]);
  
      request.send(formData);
  
      request.onreadystatechange = function() {
        if(request.readyState < 4) {
          statusMessage.src = "img/ajax/send.gif";
        } else if(request.readyState === 4) {
          if(request.status == 200 && request.status < 300) {
            statusMessage.src = "img/ajax/success-mail.gif";
            // Можно добавить контент на страницу
          } else {
            // Выводим сообщение об ошибке
            console.log(request.status);
            statusMessage.src = "img/ajax/error.gif";
            }
        }
      };
    
      for (let i = 0; i < input.length; i++) {
        // Очищаем поля ввода
        input[i].value = '';
      }
    }

  }
  
  body.addEventListener("click", function(e) {
    let target = e.target;
    e.preventDefault();
    if(target.classList.contains('send')){
      ajaxSend();
    }
  });

  /* statusMessage.classList.add('status');
  for (let i = 0; i < form.length; i++) {
    let input = form[i].getElementsByTagName('input');
    form[i].addEventListener('submit', function(e) {
      e.preventDefault();
      form[i].appendChild(statusMessage);
      
      // AJAX
      let request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      // Записываем кодировку
      request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");

      let formData = new FormData(form[i]);
  
      request.send(formData);

      request.onreadystatechange = function() {
        if(request.readyState < 4) {
          statusMessage.src = "img/send.gif";
        } else if(request.readyState === 4) {
          if(request.status == 200 && request.status < 300) {
            statusMessage.src = "img/success-mail.gif";
            // Можно добавить контент на страницу
          } else {
            // Выводим сообщение об ошибке
            console.log(request.status);
            statusMessage.src = "img/error.gif";
            }
        }
      };
    
      for (let i = 0; i < input.length; i++) {
        // Очищаем поля ввода
        input[i].value = '';
      }
    });
  } */
}

module.exports = ajaxForm;