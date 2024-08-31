// Salvatierra Braian 90338/1
//tp 1 comision 1
//https://youtu.be/xFf71DLyd2o
let img;
let resto = 20;
function preload() {
  img = loadImage('data/D_17.jpg');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  image(img, 0, 0, 400, 400);
  ciclodecuadrados(400, 19);
}

function keyPressed() {
  if (keyCode === ENTER) {
    resto++; // incrementar resto al presionar ENTER
  } else if (key === 'r' || key === 'R') {
    resto = 20; // Reiniciar resto al presionar 'r' o 'R'
  }
}
