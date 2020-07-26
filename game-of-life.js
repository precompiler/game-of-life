var blockSize = 3 * 3
var blockNumberInARow = 70

var initialX = 1
var initialY = 1

function setup() {
  createCanvas(800, 800);
  background(220);
  drawBlocks(initialX, initialY, blockSize, blockNumberInARow)
  button = createButton('start');
  button.position(1, blockSize * blockNumberInARow + 10);
}

function draw() {
 
}


function drawBlocks(x, y, bs, num) {
  tmpx = x;
  tmpy = y;
  for(var i = 0; i < num; i++) {
   for(var j = 0; j < num; j++) {
     rect(tmpx, tmpy, bs, bs)
     tmpy += bs
   }
   tmpy = y
   tmpx += bs
  }
}

function mouseClicked(event) {
  xth = int(mouseX/blockSize)
  yth = int(mouseY/blockSize)
  if ((xth < blockNumberInARow) && (yth < blockNumberInARow)) {
   seed(xth, yth, blockSize)
  }
}

function seed(xth, yth, bs) {
  x = 1 + xth * bs
  y = 1 + yth * bs
  fill(51)
  rect(x, y, bs, bs)
}