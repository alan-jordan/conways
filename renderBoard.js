function renderBoard(board) {
  for(var i = 0; i < board.length; i++)
    for(var j = 0; j < board.length; j++) {
      if(board[i][j] == true) {
        console.log("*");
      } else {
        console.log("O")
      }
    }
}

module.exports = renderBoard
