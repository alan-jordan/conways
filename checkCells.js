function checkCells(board) {
  var arr = []
  for(var i = 0; i < board.length; i++){
     for(var j = 0; j < board.length; j++){
       console.log("[" + i +"][" + j + "] = " + board[i][j]);
       arr.push(board[i][j])
     }
  }
  return arr
}
module.exports = checkCells
