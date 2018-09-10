function accordion() {
  let burgerBtn = document.querySelector('.burger'),
      body = document.querySelector('body'),
      burgerMenu = document.querySelector('.burger-menu');

  function hideMenu() {
    burgerMenu.style.display = "none";
    if(!e.classList.contains('burger-menu')) {
      burgerMenu.style.display = "none";
    }
  }

  body.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if(window.innerWidth < 768 && burgerMenu.style.display == "none" || target.parentElement.classList.contains('burger')) {
      burgerMenu.style.display = "block";
    } else {
      hideMenu(target);
    }
  });
  
}

module.exports = accordion;