const slideshowsImages = document.getElementsByClassName("slideshow__item");
const slideLeftBtn = document.getElementById("slide-left-btn");
const slideRightBtn = document.getElementById("slide-right-btn");
slideRightBtn.addEventListener("click", () => {
  imageSlider.moveRight();
});
slideLeftBtn.addEventListener("click", () => {
  imageSlider.moveLeft();
});

class ImageSlider {
  constructor(images) {
    this.imageIndex = 0;
    this.images = images;
  }
  moveRight() {
    if (this.imageIndex < this.images.length - 1) {
      this.images[this.imageIndex].classList.toggle("slideshow__item--hidden-left");
      console.log(++this.imageIndex);
      this.images[this.imageIndex].classList.toggle("slideshow__item--hidden-right");
    }
  }
  moveLeft() {
    if (this.imageIndex > 0) {
      this.images[this.imageIndex].classList.toggle("slideshow__item--hidden-right");
      console.log(--this.imageIndex);
      this.images[this.imageIndex].classList.toggle("slideshow__item--hidden-left");
    }
  }
}
const imageSlider = new ImageSlider(slideshowsImages);
