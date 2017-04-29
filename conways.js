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

var currentBoard = createBoard(10)
var cellsArr = checkCells(currentBoard)

console.log(currentBoard)

let timerId = setTimeout(function delay(){
  clear()
  currentBoard = checkNextCellStatus(cellsArr, currentBoard)
  console.log(currentBoard)
  timerId = setTimeout(delay, 10)
}, 10)

  // let timerId = setTimeout(function tick() {
  //   clear()
  //   currentBoard = checkNextCellStatus(cellsArr, currentBoard)
  //   console.log(currentBoard);
  //   timerId = setTimeout(tick, 100); // (*)
  // }, 1000);
