function checkNeighbourStatus(board, cells) {

  for(var i = 0; i < cells.length; i++) {
    var aliveCount = 0
    cells[i].aliveCount = 0
    cells[i]['neighbours'].map(function(neighbour){
      row = neighbour[0]
      col = neighbour[1]
      board[row][col] === true ? aliveCount = incrementAlive(aliveCount) : false
    })
    cells[i].aliveCount = aliveCount
    console.log(cells[i].aliveCount)
    setCellStatus(cells[i])
    }
  return cells
}

function incrementAlive(aliveCount){
  return aliveCount + 1
}
function resetCellStatus(cell){
  cell.underPopulated = false
  cell.overPopulated = false
  cell.staysAlive = false
  cell.resurrectable = false
}

function setCellStatus(cell) {
  resetCellStatus(cell)
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
