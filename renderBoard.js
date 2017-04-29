function renderBoard(board) {
  arr = []
  for(var i = 0; i < board.length; i++){
    arr[i] = []
    str = ""
    for(var j = 0; j < board.length; j++) {
      board[i][j] == true ? str += "*" : str += "."
    }
    console.log(str);
    arr[i].push(str)
  }
  // Need to refactor and seperate these out to generate and render
  // str =
  // renderedBoard = arr.filter(function(cell, index){
  //   console.log(cell[index]);
  // })
}

module.exports = renderBoard
