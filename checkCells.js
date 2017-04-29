var getNeighbours = require('./getNeighbours')

function checkCells(board) {
  arr = []
  var allCells = []
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      tempArr = [i, j]
      allCells.push(tempArr)
    }
  }
  neighbours = allCells.map(function(cell) {
    arr.push(getNeighbours(cell, board.length))
  })
  return arr
}
module.exports = checkCells
