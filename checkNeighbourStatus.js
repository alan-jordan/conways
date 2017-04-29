function checkNeighbourStatus(board, cells) {

  for(var i = 0; i < cells.length; i++) {
    var aliveCount = 0
    cells[i]['neighbours'].map(function(neighbour){
      row = neighbour[0]
      col = neighbour[1]
      board[row][col] === true ? aliveCount = incrementAlive(aliveCount) : false
    })
    cells[i].aliveCount = aliveCount
    setCellStatus(cells[i])
    }
  return cells
}

function incrementAlive(aliveCount){
  return aliveCount + 1
}

function setCellStatus(cell) {
  // cell.aliveCount > 2 ? cell.underPopulated = true : false
  // cell.aliveCount == 2 ? cell.staysAlive = true : false
  // cell.aliveCount == 3 ? cell.resurrectable = true : false
  // cell.aliveCount > 3 ? cell.overPopulated = true : false
  if(cell.aliveCount < 2) {
    cell.underPopulated = true
  } else if(cell.aliveCount == 2) {
    cell.staysAlive = true
  } else if(cell.aliveCount == 3){
    cell.staysAlive = true
    cell.resurrectable = true
  } else {
    cell.overPopulated = true
  }
}

module.exports = checkNeighbourStatus
