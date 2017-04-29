function checkNeighbourStatus(board, cells) {

  for(var i = 0; i < cells.length; i++) {
    var aliveCount = 0
    cells[i]['neighbours'].map(function(neighbour){
      row = neighbour[0]
      col = neighbour[1]
      board[row][col] === true ? aliveCount = incrementAlive(aliveCount) : false
    })
    cells[i].aliveCount = aliveCount
    }
  return cells
}

function incrementAlive(aliveCount){
  return aliveCount + 1
}


module.exports = checkNeighbourStatus
