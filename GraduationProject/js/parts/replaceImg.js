function replaceImg() {
  let sizeWrapper = document.querySelector('.sizes-wrapper'),
      sizesBlock = document.querySelectorAll('.sizes-block'),
      eventTarget,
      replaceTarget,
      secondTarget,
      sizesBlockNum;

  function showImg(e) {
    if(e.classList.contains('size-1')) {
      eventTarget = 'size-1';
      replaceTarget = '../../img/sizes-1.png';
      secondTarget = '../../img/sizes-1-1.png';
      sizesBlockNum = 0;
    }
    if(e.classList.contains('size-2')) {
      eventTarget = 'size-2';
      replaceTarget = '../../img/sizes-2.png';
      secondTarget = '../../img/sizes-2-1.png';
      sizesBlockNum = 1;
    }
    if(e.classList.contains('size-3')) {
      eventTarget = 'size-3';
      replaceTarget = '../../img/sizes-3.png';
      secondTarget = '../../img/sizes-3-1.png';
      sizesBlockNum = 2;
    }
    if(e.classList.contains('size-4')) {
      eventTarget = 'size-4';
      replaceTarget = '../../img/sizes-4.png';
      secondTarget = '../../img/sizes-4-1.png';
      sizesBlockNum = 3;
    }
  }

  function replaseImg(e,src,rsrc,num) {
    for (let i = 0; i < 4; i++) {
      if(sizesBlock[num].children[i].classList.contains(src)) {
        e.setAttribute('src', rsrc);
      } else {
        sizesBlock[num].children[i].style.display = "none";
      }
    }
  }

  function hideImg(e,src,rsrc,num) {
    for (let i = 0; i < 4; i++) {
      if(sizesBlock[num].children[i].classList.contains(src)) {
        e.setAttribute('src', rsrc);
      } else {
        sizesBlock[num].children[i].style.display = "block";
      }
    }
  }

  sizeWrapper.addEventListener('mouseover', function(e) {
    let target = e.target;
    showImg(target);
    replaseImg(target,eventTarget,secondTarget,sizesBlockNum);
  });
 
  sizeWrapper.addEventListener('mouseout', function(e) {
    let target = e.target;
    hideImg(target,eventTarget,replaceTarget,sizesBlockNum);
  });

}

module.exports = replaceImg;