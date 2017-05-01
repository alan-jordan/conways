function renderBoard(board) {
  arr = []
  for(var i = 0; i < board.length; i++){
    arr[i] = []
    str = ""
    for(var j = 0; j < board.length; j++) {
      board[i][j] == true ? str += "*" : str += " "
    }
    console.log(str);
    arr[i].push(str)
  }
}

module.exports = renderBoard
