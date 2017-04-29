function checkNextCellStatus(cells, board) {
  var nextBoard = cells.map(function(cell){
    newBoard = board
    var row = cell.cellPos[0]
    var col = cell.cellPos[1]
    // cell.underpopulated ? newBoard[row][col] = false : false
    // cell.overpopulated ? newBoard[row][col] = false : false
    // cell.staysAlive ? newBoard[row][col] = true: false
    if(newBoard[row][col] = false){
      cell.resurrectable ? newBoard[row][col] = true : false
    } else {
      cell.underPopulated ? newBoard[row][col] = false : false
      cell.overPopulated ? newBoard[row][col] = false : false
      cell.staysAlive ? newBoard[row][col] = true : false
    }
  })
  return newBoard
}

module.exports = checkNextCellStatus
