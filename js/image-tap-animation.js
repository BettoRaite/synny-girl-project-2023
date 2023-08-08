const buttons = document.querySelectorAll('.tap-button');
const images = document.getElementsByClassName('gallery-grid-image');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if(images[index].classList.toggle('active'))
    {
      scaleUpImage(index)
    }
    else
    {
      scaleDownImage(index)
    }
  });
});

function scaleUpImage(index) {

  images[index].style.transform = 'scale(1.5)';
  images[index].style.transition = 'transform 0.3s ease';
}
function scaleDownImage(index) {

  images[index].style.transform = 'scale(1)';
  images[index].style.transition = 'transform 0.3s ease';
}
