const slides = document.querySelectorAll(".slides");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function goPrev() {
  if (counter != 0) {
    counter--;
    slideImage();
  }
}
function goNext() {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
}

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
