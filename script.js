var canvas = document.getElementById('myCanvas');
var clear = document.getElementById('clear');
var blue = document.getElementById('blue');
var black = document.getElementById('black');
var red = document.getElementById('red');
var purple = document.getElementById('purple');
var context = canvas.getContext('2d');
var eraserContext = canvas.getContext('2d');

black.style.background = 'black';
blue.style.background = 'blue';
red.style.background = 'red';
purple.style.background = 'purple';
yellow.style.background = 'yellow';
orange.style.background = 'orange';
pink.style.background = 'pink';

canvas.width = 500;
canvas.height = 500;

context.fillStyle = 'black';
context.strokeStyle = 'purple';

function drawHouse() {
  context.moveTo(200, 400);
  context.lineTo(250, 350);
  context.moveTo(250, 350);
  context.lineTo(300, 400);
  context.stroke();
  context.fillRect(200, 400, 100, 100);
}

let x = context.pageX;
let y = context.pageY;

canvas.onmousedown = function(e) {

  let x = e.pageX;
  let y = e.pageY;

  console.log('x coordinate is ' + x + '.');
  console.log('y coordinate is ' + y + '.');
}

function eraserSize() {
  context.fillRect(context.pageX, context.pageY, 200, 200);
}

// colors:
function blueColor() {
  context.fillStyle = 'blue';
  context.fillRect(x-20, y-20, 15, 15);
}
function blackColor() {
  context.fillStyle = 'black';
  context.fillRect(x-20, y-20, 15, 15);
}
function redColor() {
  context.fillStyle = 'red';
  context.fillRect(x-20, y-20, 15, 15);
}
function purpleColor() {
  context.fillStyle = 'purple';
  context.fillRect(x-20, y-20, 15, 15);
}
function yellowColor() {
  context.fillStyle = 'yellow';
  context.fillRect(x-20, y-20, 15, 15);
}
function orangeColor() {
  context.fillStyle = 'orange';
  context.fillRect(x-20, y-20, 15, 15);
}
function pinkColor() {
  context.fillStyle = 'pink';
  context.fillRect(x-20, y-20, 15, 15);
}

function eraser() {
  eraserContext.fillStyle = 'white';
  eraserContext.fillRect(eraserContext.pageX -20, eraserContext.pageY -20, 1000, 1000);
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
