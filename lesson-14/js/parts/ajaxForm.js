function ajaxForm() {
	// Forms
  let message = {};
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByTagName('form'),
			statusMessage = document.createElement('div');

	statusMessage.classList.add('status');
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
					statusMessage.innerHTML = message.loading;
				} else if(request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Можно добавить контент на страницу
					} else {
						// Выводим сообщение об ошибке
						console.log(request.status);
						statusMessage.innerHTML = message.failure;
						}
				}
			};
		
			for (let i = 0; i < input.length; i++) {
				// Очищаем поля ввода
				input[i].value = '';
			}
		});
	}
}

module.exports = ajaxForm;