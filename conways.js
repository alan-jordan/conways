var clear = require('clear');
var createBoard = require('./createBoard')
var checkCells = require('./checkCells')
var getNeighbours = require('./getNeighbours')
var checkNextCellStatus = require('./checkNextCellStatus')
var renderBoard = require('./renderBoard')

var currentBoard = createBoard(25)

let timerId = setTimeout(function delay(){
  clear()
  renderBoard(currentBoard)
  cellsArr = checkCells(currentBoard)
  // console.log(cellsArr);
  currentBoard = checkNextCellStatus(cellsArr, currentBoard)
  timerId = setTimeout(delay, 1000)
}, 1000)
