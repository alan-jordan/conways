function checkNextCellStatus(cells, board) {
  var nextBoard = cells.map(function(cell){
    var row = cell.cellPos[0]
    var col = cell.cellPos[1]
    if(!board[row][col]){
      cell.resurrectable ? board[row][col] = true : false
    } else if (board[row][col]){
      cell.underPopulated ? board[row][col] = false : false
      cell.overPopulated ? board[row][col] = false : false
      cell.staysAlive ? board[row][col] = true : false
    }
  })
  return board
}

module.exports = checkNextCellStatus
