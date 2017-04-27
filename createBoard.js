function createBoard(size) {
  var board = []
  for (var i = 0; i < size; i++) {
    board[i] = []
    for(var j = 0; j < size; j++) {
      board[i].push(true)
    }
  }
  return board
}

module.exports = createBoard
