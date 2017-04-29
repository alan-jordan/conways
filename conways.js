//generates initial board
//loops through each cell on the board and works out
  // Number of neighbours
  // Neighbours out of bounds
  // neighbours status, counts trues
  // Checks the next state of that cell
  // Updates the cell if required.
// Once at end of loop, displays next board
  // Then Performs loop through to check next cell state
var clear = require('clear');

var createBoard = require('./createBoard')
var checkCells = require('./checkCells')
var getNeighbours = require('./getNeighbours')
var checkNextCellStatus = require('./checkNextCellStatus')
var renderBoard = require('./renderBoard')

var currentBoard = createBoard(50)
var cellsArr = checkCells(currentBoard)
clear()
renderBoard(currentBoard)

let timerId = setTimeout(function delay(){
  clear()
  cellsArr = checkCells(currentBoard)
  currentBoard = checkNextCellStatus(cellsArr, currentBoard)
  renderBoard(currentBoard)
  timerId = setTimeout(delay, 1000)
}, 1000)
