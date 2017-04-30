function checkNextCellStatus(cells, board) {
  var nextBoard = cells.map(function(cell){
    var row = cell.cellPos[0]
    var col = cell.cellPos[1]
    if(board[row][col] = false && cell.resurrectable){
      board[row][col] = true
    } else if(cell.underPopulated) {
      board[row][col] = false
    } else if(cell.overPopulated) {
      board[row][col] = false
    }
  })
  console.log(board);
  return board
}

module.exports = checkNextCellStatus
