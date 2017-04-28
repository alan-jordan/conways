var getNeighbours = require('./getNeighbours')

function checkCells(board) {
  var arr = []
  var test = []
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      // console.log("[" + i + "][" + j + "] = " + board[i][j]);
      tempArr = [i, j]
      test.push("My neighbours are....")
      test.push(getNeighbours(tempArr, board.length))
      test.push("---------------")
    }
  }
  console.log(test.length)
  return arr
}
module.exports = checkCells
