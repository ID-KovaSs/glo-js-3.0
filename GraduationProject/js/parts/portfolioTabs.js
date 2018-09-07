function portfolioTabs() {
  let portfBlocks = document.querySelectorAll('.portfolio-block'),
      portfMenu = document.querySelector('.portfolio-menu'),
      portfNo = document.querySelector('.portfolio-no');
      console.log(portfMenu);

  portfMenu.addEventListener('click', function(e) {
    let target = e.target;
    console.log(target);
       
    if(target.tagName = "li") {
      for (let i = 0; i < portfMenu.length; i++) {
        portfMenu[i].classList.remove('active');     
      }
      target.classList.add('active');
    }

  });
}

module.exports = portfolioTabs;