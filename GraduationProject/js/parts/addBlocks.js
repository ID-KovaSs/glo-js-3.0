function addBlocks() {
  let blocksBtn = document.getElementById('addBlocksBtn'),
      hiddenBlocks = document.querySelectorAll('.hidden-lg');

  blocksBtn.addEventListener('click', () => {
    for(let i = 0; i < hiddenBlocks.length; i++) {
      hiddenBlocks[i].className = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
      blocksBtn.style.display = "none";
     }
  });
}

module.exports = addBlocks;