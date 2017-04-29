function checkNeighbourStatus(board, neighbours) {
  var aliveCount = 0
  var deadCount = 0
  for(var i = 0; i < board.length; i++) {
      // var el1 = neighbours
      // var el2 = neighbours[i]
      // console.log(el1);
      // board[el1][el2] === true ? aliveCount = incrementAlive(aliveCount) : deadCount = incrementDead(deadCount)
    }
  return aliveCount
}

function incrementAlive(aliveCount){
  return aliveCount + 1
}
function incrementDead(deadCount){
  return deadCount + 1
}

module.exports = checkNeighbourStatus
