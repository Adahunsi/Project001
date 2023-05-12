const carouselc = document.querySelector(".carouselSc");
const slidePanel = carouselc.querySelector('div.slidePanel');

function getCarouselSlideValue(){
    return carouselc.querySelector('img').clientWidth
}

updateCarousel()

// function updateCarousel(){
//     slidePanel.style.left = `${slidePanel.clientLeft-getCarouselSlideValue()}px`;
//     setInterval(updateCarousel, 500);
// }


// function updateCarousel() {
//   const slideValue = getCarouselSlideValue();
//   const currentLeft = slidePanel.style.left ? parseFloat(slidePanel.style.left) : slidePanel.offsetLeft;
//   const newLeft = currentLeft - slideValue;
//   if (newLeft <= -slidePanel.scrollWidth) {
//     slidePanel.style.left = 0;
//   } else {
//     slidePanel.style.left = `${newLeft}px`;
//   }
// }
function updateCarousel() {
  const slideValue = getCarouselSlideValue();
  const currentLeft = slidePanel.style.left ? parseFloat(slidePanel.style.left) : slidePanel.offsetLeft;
  const contentWidth = slidePanel.scrollWidth;
  const maxLeft = -(contentWidth - carouselc.clientWidth);
  const minLeft = 0;
  const newLeft = currentLeft - slideValue;
  if (newLeft < maxLeft) {
    slidePanel.style.left = `${minLeft}px`;
  } else {
    slidePanel.style.left = `${newLeft}px`;
  }
}





setInterval(updateCarousel, 1000);





//ProgressBarrrrrrr
const art3Section = document.getElementById('progsec');
const progressFills = document.querySelectorAll('.progress__fill');

function showProgress() {
  progressFills.forEach(progressFill => {
    const value = progressFill.dataset.progress;

    progressFill.style.opacity = 1;
    progressFill.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressFills.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
  })
}

window.addEventListener('scroll', () => {
  const artSecPos = art3Section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (artSecPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
})


//User Reviewwwwwwww

