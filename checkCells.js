function checkCells(board) {
  var arr = []
  for(var i = 0; i < board.length; i++){
     for(var j = 0; j < board.length; j++){
       arr.push("1")
     }
  }
  return arr
}
module.exports = checkCells
