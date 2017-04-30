var getNeighbours = require('./getNeighbours')
var checkNeighbourStatus = require('./checkNeighbourStatus')

function checkCells(board) {
  var arr = []
  var aliveCountArr = []
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
  aliveCountArr.push(checkNeighbourStatus(board, arr))
  console.log(arr);
  return arr
}
module.exports = checkCells
