/*
 TP1
 COMISIÓN 5
 Camila Amaya LADINES ROMERO
 Legajo: 119060/5
 Link al video: https://youtu.be/vwHI6HFGYic
 Hacer click en la mitad izquierda para reiniciar
*/

let rojoOscuro, azul, amarillo, violeta, rosa, rojoRojo, morado, marron; //color
let grosor, distanciaMouse, vCol1, vCol2, vCol3, vCol4; //float
let resultado; //boolean

function preload() { //aca se carga todo lo que sea aparte
  granat=loadImage('data/granat.jpg');
}

function setup() {
  createCanvas(800, 400);

  rojoOscuro = color(185, 9, 0);
  azul = color(4, 0, 129);
  amarillo = color(255, 161, 18);
  violeta = color(162, 30, 129);

  rosa = color(250, 45, 199);
  rojoRojo = color(255, 0, 0);
  morado = color(87, 7, 144);
  marron = color(108, 4, 0);

  grosor = 0.5;
}

function draw() {
  background(azul);
  image(granat, 0, 0, width/2, height);
  cuadricula(marron, rojoOscuro);
  distanciaMouse = dist(width/2, height/2, mouseX, mouseY);
  grosor = map(distanciaMouse, 0, width, 0.5, 7);
  vCol1 = random(255);
  vCol2 = random(255);
  vCol3 = random(255);
  vCol4 = random(255);
}

function mousePressed() {
  if (mitadDerecha(400, 0, width/2, height, resultado)) {

    rojoOscuro = color(vCol3, vCol1, 0);
    azul = color(vCol2, 0, 129);
    amarillo = color(255, 161, vCol1);
    violeta = color(162, vCol2, 129);
    rosa = color(250, 45, vCol3);
    rojoRojo = color(255, vCol4, 0);
    morado = color(vCol4, 7, 144);
    marron = color(vCol3, 4, vCol4);
  } else {

    //CLICKEAR EN LA MITAD IZQUIERDA PARA REINICIAR
    grosor = 0.5;
    rojoOscuro = color(185, 9, 0);
    azul = color(4, 0, 129);
    amarillo = color(255, 161, 18);
    violeta = color(162, 30, 129);
    rosa = color(250, 45, 199);
    rojoRojo = color(255, 0, 0);
    morado = color(87, 7, 144);
    marron = color(108, 4, 0);
  }
}
