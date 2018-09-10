function accordion() {
    let accordion = document.querySelector('#accordion'),
      accorHead = document.querySelectorAll('.accordion-heading'),
      accorBlock = document.querySelectorAll('.accordion-block');
  
  getActive();
  accorBlock[0].style.display = "block";
  accorHead[0].style.color = "#C51BBB";
  
  function removeActive() {
    for (let i = 0; i < accorBlock.length; i++) {
      accorHead[i].classList.remove('active');
    }
  }

  function getActive(e) {
    for (let i = 0; i < accorBlock.length; i++) {
      if(accorHead[i].classList.contains('active')) {
        accorHead[i].style.color = "#C51BBB";
        e.parentElement.nextElementSibling.style.display = "block";
      } else {
        accorBlock[i].style.display = "none";
        accorHead[i].style.color = "";
        accorHead[i].classList.remove('active');
      }
    }
  }

  accordion.addEventListener('click', function(e) {
    let target = e.target;
    removeActive();
    if(target.parentElement.classList.contains('accordion-heading')) {
      target.parentElement.classList.add('active');
      getActive(target);
    }
  });
}

module.exports = accordion;