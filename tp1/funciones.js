function ciclodecuadrados(TamRect, CantRect) {
  translate(600, 200);
  noStroke();

  for (let i = 0; i < CantRect; i++) {
    let size = TamRect - i * resto; // calcula el tamaño de cada cuadrado

    if (size > 0) { // solo dibuja si el tamaño es positivo
      push();
      rotate(radians(i * 3)); // rotar el cuadrado
      let fillcolor;
      if (i === 0 || i === CantRect - 1 || i % 2 === 0) {//usamos === para evitar posibles errores
        fillcolor = colores(color(0), color(0, 0, 255)); // si es par, de negro a azul
      } else {
        fillcolor = colores(color(255), color(255, 255, 0)); // si es impar, de blanco a amarillo
      }
      fill(fillcolor); // pintar el próximo rectángulo
      rectMode(CENTER); // el rectángulo en el centro
      rect(0, 0, size, size); // dibujar el cuadrado
      pop(); // restaurar la rotación de la matriz de transformación
    }
  }
}

function colores(inicio, fin) {
  let cambio;
  if (mouseX < width / 2 || mouseX > width ||mouseY > height) {
    cambio = 0; //si el mouse esta fuera del canvas no aplique color
  } else {
    cambio = map(mouseX, width / 2, width, 0, 1); //sino raste la ubicacion del mouse para degradar el color
  }
  let r =  map(cambio, 0, 1, red(inicio), red(fin));
  let g =  map(cambio, 0, 1, green(inicio), green(fin));
  let b =  map(cambio, 0, 1, blue(inicio), blue(fin));

  return color(r, g, b); // Devolver el color
}
