const body = document.querySelector("body");

const Imgs = 3;

function randomImage() {
  const image = new Image();
  const number = Math.floor(Math.random()*Imgs);
  image.src = `images/${number==0?'toronto':number==1?'boston':'chicago'}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}


function init() {
  randomImage();
}

init();
