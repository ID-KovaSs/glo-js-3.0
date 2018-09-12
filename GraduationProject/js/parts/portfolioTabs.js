function portfolioTabs() {
  let portfBlocks = document.querySelectorAll('.portfolio-block'),
      portfMenu = document.querySelector('.portfolio-menu'),
      portfMenuItems = document.querySelectorAll('.portfolio-menu li'),
      portfNo = document.querySelector('.portfolio-no');

  portfMenuItems[0].classList.add('active');

  function getActive(e) {
    if(e.tagName == "li") {
      for (let i = 0; i < portfMenuItems.length; i++) {
        portfMenuItems[i].classList.remove('active');     
      }
      e.classList.add('active');
    }
  }

  function showBlock(e) {
    let checkClass = e.classList[0];
    // Проверка на отсутствующие блоки в портфолио
    if(e.classList.contains('grandmother') || e.classList.contains('granddad')){
      portfNo.style.display = "block";
    } else {
      portfNo.style.display = "none";
    }
    // Отображение блоков соответствующих классу меню
    for (let i = 0; i < portfBlocks.length; i++) {
      if(portfBlocks[i].classList.contains(`${checkClass}`)) {
        portfBlocks[i].style.display = "block";
      } else {
        portfBlocks[i].style.display = "none";
      }       
    }
  }
 
  portfMenu.addEventListener('click', (e) => {
    let target = e.target;
    getActive(target);
    showBlock(target);

  });
}

module.exports = portfolioTabs;