var slides = document.querySelectorAll('#completedproject__slides .completedproject__slide');
var prevButton = document.querySelector('.completed__buttonsleft');
var nextButton = document.querySelector('.completed__buttonsright');
var slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

  // Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

  // Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
}
updateSlider();

// нижний мобильный слайдер
var slidesbottom = document.querySelectorAll('#realize__slides .realize__slide');
var prevButtonslidesbottom = document.querySelector('.realize__buttonsleft');
var nextButtonslidesbottom = document.querySelector('.realize__buttonsright');
var slideCountslidesbottom = slidesbottom.length;
let slideIndexslidesbottom = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonslidesbottom.addEventListener('click', showPreviousSlideBottom);
nextButtonslidesbottom.addEventListener('click', showNextSlideBottom);

// Функция для показа предыдущего слайда
function showPreviousSlideBottom() {
    slideIndexslidesbottom = (slideIndexslidesbottom - 1 + slideCountslidesbottom) % slideCountslidesbottom;
    updateSliderBottom();
}

  // Функция для показа следующего слайда
function showNextSlideBottom() {
    slideIndexslidesbottom = (slideIndexslidesbottom + 1) % slideCountslidesbottom;
    updateSliderBottom();
}

  // Функция для обновления отображения слайдера
function updateSliderBottom() {
    slidesbottom.forEach((slide, index) => {
      if (index === slideIndexslidesbottom) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
}
updateSliderBottom();