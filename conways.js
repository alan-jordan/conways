var clear = require('clear');
var createBoard = require('./createBoard')
var checkCells = require('./checkCells')
var getNeighbours = require('./getNeighbours')
var checkNextCellStatus = require('./checkNextCellStatus')
var renderBoard = require('./renderBoard')


var currentBoard = createBoard(100)

let timerId = setTimeout(function delay(){
  clear()
  cellsArr = checkCells(currentBoard)
  currentBoard = checkNextCellStatus(cellsArr, currentBoard)
  renderBoard(currentBoard)
  timerId = setTimeout(delay, 2000)
}, 2000)
