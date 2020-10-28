var canvas = document.getElementById('myCanvas');
var clear = document.getElementById('clear');

canvas.width = 500;
canvas.height = 500;

var context = canvas.getContext('2d');
var mouseDown = false;

context.fillStyle = 'red';
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

function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
