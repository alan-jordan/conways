//generates initial board
//loops through each cell on the board and works out
  // Number of neighbours
  // Neighbours out of bounds
  // neighbours status, counts trues
  // Checks the next state of that cell
  // Updates the cell if required.
// Once at end of loop, displays next board
  // Then Performs loop through to check next cell state

var createBoard = require('./createBoard')
var checkCells = require('./checkCells')
var getNeighbours = require('./getNeighbours')

currentBoard = createBoard(3)
neighboursArr = checkCells(currentBoard)

// console.log(neighboursArr);

// console.log(currentBoard);
