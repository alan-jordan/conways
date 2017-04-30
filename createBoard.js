function createBoard(size) {
  var board = []
  for (var i = 0; i < size; i++) {
    board[i] = []
    for(var j = 0; j < size; j++) {
      board[i].push(randomnessGenerator())
    }
  }
  return board
}

function randomnessGenerator(){ // Returns true or false 50 % of the time
  int = Math.floor(Math.random() * (10 - 1)) + 1;
  return int > 2
}

module.exports = createBoard
