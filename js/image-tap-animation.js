const buttons = document.querySelectorAll('.tap-button');
const images = document.getElementsByClassName('gallery-grid-image');
const descriptionWindows = document.getElementsByClassName('image-description-container')
const gridLayerMask = document.getElementById('grid-layer-mask');  
buttons.forEach((button, index) => {
  button.addEventListener('click', function(){
    gridLayerMask.classList.toggle('active-grid-layer');
    button.classList.toggle('tap-button-active');
    images[index].classList.toggle('active-image');
    descriptionWindows[index].classList.toggle('active-description-window');
  });
});



// button.addEventListener('click', () => {
//   images[index].classList.toggle('active-image');
//   gridLayerMask.classList.toggle('active-grid-layer');
//   descriptionWindow[index].classList.toggle('active-description-window');
  
//   descriptionWindow[index].addEventListener('click',function(){
//     gridLayerMask.classList.toggle('active-grid-layer');
//     descriptionWindow[index].classList.toggle('active-description-window');
//     images[index].classList.toggle('active-image');
//   });
// });