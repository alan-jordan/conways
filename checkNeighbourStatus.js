function checkNeighbourStatus(board, neighbours) {
  var aliveCount = 0
  var deadCount = 0
  for(var i = 0; i < 3; i++) {
    var el1 = neighbours[i][0]
    var el2 = neighbours[i][1]
    board[el1][el2] === true ? aliveCount = incrementAlive(aliveCount) : deadCount = incrementDead(deadCount)
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
