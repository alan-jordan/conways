var getNeighbours = require('./getNeighbours')

function checkCells(board) {
  var allCells = []
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      tempArr = [i, j]
      allCells.push(tempArr)
    }
  }
  console.log(allCells)
  return arr
}
module.exports = checkCells
