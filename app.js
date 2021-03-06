const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

const app = () => {
  let activeSlideIndex = 0;

  const changeSlide = (direction) => {
    if (direction === 'up') {
      activeSlideIndex += 1;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
    } else if (direction === 'down') {
      activeSlideIndex -= 1;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  };

  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      changeSlide('up');
    } else if (e.key === 'ArrowDown') {
      changeSlide('down');
    }
  });

  upBtn.addEventListener('click', (e) => {
    changeSlide('up');
  });

  downBtn.addEventListener('click', (e) => {
    changeSlide('down');
  });
};

app();
