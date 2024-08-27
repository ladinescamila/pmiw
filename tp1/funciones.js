function cuadricula (marron, rojoOscuro) {
  push();
  translate( width/2, 0);
  for (let i  = 0; i< 3; i++) {
    for (let j  = 0; j< 3; j++) {
      colores(i, j, violeta, rojoOscuro, amarillo, azul, rojoRojo);
      
      if (i == 1) {
        strokeWeight(grosor);
        rect(i* 400/3, j*height/3+25, 400/3, height);
      } else {
        strokeWeight(grosor);
        rect(i* 400/3, j*height/3-15, 400/3, height);
      }
    }
    for ( let k = 0; k < 2; k ++) {
      for ( let l =0; l < 1; l++) {
        if ((k+l)%2==0) {
          push();
          fill(marron);
          rect(k* 400/3, 375, 400/3, 25);
          pop();
        } else {
          push();
          fill(rojoOscuro);
          rect(266, 375, 400/3, 25);
          pop();
        }
      }
    }
  }
  formas(amarillo, rojoOscuro, azul, violeta, rosa, rojoRojo, morado, grosor);
  pop();
}

function colores (i, j, violeta, rojoOscuro, amarillo, azul, rojoRojo) {
  //coordenadas en el eje x,y

  if ( i == 0 && j == 0) {
    fill(rojoOscuro); // 0,0
  }
  if (i == 0 && j == 1) {
    fill(violeta); // 0,1
  }
  if ( i == 0 && j == 2) {
    fill(rojoOscuro); // 0, 2
  }
  if ( i == 1 && j ==0) {
    fill(rojoRojo); //1, 0
  }
  if ( i == 1 && j == 1) {
    fill(amarillo); //1, 1
  }
  if ( i == 1 && j == 2) {
    fill(rojoRojo); //1, 2
  }
  if ( i == 2 && j == 0) {
    fill(violeta); //2, 0
  }
  if ( i == 2 && j == 1) {
    fill (rojoOscuro); //2, 1
  }
  if ( i == 2 && j == 2) {
    fill (azul); //2, 2
  }
}

function formas(amarillo, rojoOscuro, azul, violeta, rosa, rojoRojo, morado, grosor) {
  strokeWeight(grosor);

  push();
  fill(rojoOscuro);
  circle(65, 188, 100);
  pop();

  push();
  fill(amarillo);
  circle(67, 60, 70);
  pop();

  push();
  fill(morado);
  circle(199, 90, 110);
  pop();

  push();
  fill(azul);
  quad(292, 62, 333, 23, 373, 64, 331, 102);
  ellipse(201, 224, 400/3, 132);
  rect(34, 286, 68, 62);
  pop();

  push();
  fill(rojoRojo);
  rect(301, 283, 68, 62);
  pop();

  push();
  fill(violeta);
  rect(159, 307, 84, 78);
  pop();

  push();
  fill(rosa);
  rect(292, 147, 84, 78);
  pop();
}

function mitadDerecha (x, y, ancho, alto, resultado) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < ancho + alto) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
