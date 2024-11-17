//https://www.youtube.com/watch?v=jOA18CRGGV8
//Braian Salvatierra, Rocio Zapata 
let pantallaPrincipal;


function setup() {
  createCanvas(640, 480);
  pantallaPrincipal = new PantallaPrincipal();
}

function draw() {
  pantallaPrincipal.mostrar();  
}

function mousePressed() {
  pantallaPrincipal.mousePressed();  
}
