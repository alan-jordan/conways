function getNeighbours(cell, boardSize) {
  var name = cell.toString()
  var name = { cellPos: cell}

  neighbours = []
  neighbours.push([
    decrementCellElement(cell[0]),
    decrementCellElement(cell[1])
  ])
  neighbours.push([
    cell[0],
    decrementCellElement(cell[1])
  ])
  neighbours.push([
    incrementCellElement(cell[0]),
    decrementCellElement(cell[1])
  ])
  neighbours.push([
    incrementCellElement(cell[0]),
    cell[1]
  ])
  neighbours.push([
    incrementCellElement(cell[0]),
    incrementCellElement(cell[1])
  ])
  neighbours.push([
    cell[0],
    incrementCellElement(cell[1])
  ])
  neighbours.push([
    decrementCellElement(cell[0]),
    incrementCellElement(cell[1])
  ])
  neighbours.push([
    decrementCellElement(cell[0]),
    cell[1]
  ])
  validneighbours = discardInvalidNeighbours(neighbours, boardSize)
  name.neighbours = validneighbours
  return name
}
function incrementCellElement(cellElement) {
  return cellElement + 1
}
function decrementCellElement(cellElement) {
  return cellElement - 1
}
function discardInvalidNeighbours(neighbours, size) {
  var validNeighbours = neighbours.filter(function(neighbour) {
    return neighbour[0] >= 0 && neighbour[1] >= 0 && neighbour[0] < size && neighbour[1] < size
  })
  return validNeighbours
}

module.exports = getNeighbours
