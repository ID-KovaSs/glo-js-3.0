let age = document.getElementById('age'),
		user = {
			name: "Denis",
			surname: "Isaev",
			value: age.value
		};
 
function showUser(surname, name) {
  alert(`Пользователь  ${this.surname} ${this.name}, его возраст ${this.value}`);
}
 
showUser.call(user);