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

canvas.onmousedown = function(e) {

  let x = e.pageX;
  let y = e.pageY;

  context.fillRect(x-20, y-20, 15, 15);

  console.log('x coordinate is ' + x + '.');
  console.log('y coordinate is ' + y + '.');
}

function eraserSize() {
  context.fillRect(context.pageX, context.pageY, 200, 200);
}

// colors:
function blueColor() {
  context.fillStyle = 'blue';
}
function blackColor() {
  context.fillStyle = 'black';
}
function redColor() {
  context.fillStyle = 'red';
}
function purpleColor() {
  context.fillStyle = 'purple';
}
function yellowColor() {
  context.fillStyle = 'yellow';
}
function orangeColor() {
  context.fillStyle = 'orange';
}
function pinkColor() {
  context.fillStyle = 'pink';
}

function eraser() {
  
  eraserContext.fillStyle = 'white';
  eraserContext.fillRect(eraserContext.pageX -20, eraserContext.pageY -20, 1000, 1000);
}

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
