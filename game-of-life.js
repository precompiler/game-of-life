var blockSize = 3 * 3
var blockNumberInARow = 70
var cells = []

var initialX = 1
var initialY = 1

var gameStarted = false

function setup() {
  createCanvas(800, 800)
  background(220)
  initCells()
  renderCells(cells, initialX, initialY, blockSize)
  startButton = createButton('start')
  startButton.position(1, blockSize * blockNumberInARow + 10)
  startButton.mousePressed(startGame)

  resetButton = createButton('reset')
  resetButton.position(1 + 50, blockSize * blockNumberInARow + 10)
  resetButton.mousePressed(resetGame)
}

function draw() {
  if (gameStarted) {
    checkCells()
    renderCells(cells, initialX, initialY, blockSize)
  }
}

function initCells() {
  for (var i = 0; i < blockNumberInARow; i++) {
    cells[i] = []
    for (var j = 0; j < blockNumberInARow; j++) {
      cells[i][j] = 0
    }
  }
}

function renderCells(c, x, y, bs) {
  var num = c.length
  var tmpx = x
  var tmpy = y
  for(var i = 0; i < num; i++) {
    for(var j = 0; j < num; j++) {
      if (c[i][j] == 0) {
        fill(255)
      } else {
        fill(51)
      }
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
   cells[xth][yth] = 1
   renderCells(cells, initialX, initialY, blockSize)
  }
}


function startGame() {
  gameStarted = true
}

function resetGame() {
  gameStarted = false
  createCanvas(800, 800)
  initCells()
  background(220)
  renderCells(cells, initialX, initialY, blockSize)
}

function checkCells() {
    //TODO implement rules
    var dummyx = int(random(0, blockNumberInARow))
    var dummyy = int(random(0, blockNumberInARow))
    cells[dummyx][dummyy] = 1
}