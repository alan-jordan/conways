var test = require('tape')
var getNeighbours = require('../getNeighbours')

test('getNeighbours returns the correct number of neighbours in a cell with 8 neighbours', function(t) {
  var cell = [1,1]
  var boardSize = 3
  var expected = 8
  var actual = getNeighbours(cell, boardSize).length
  t.equal(actual, expected, 'getNeighbours returns the correct number of neighbours')
  t.end()
})

test('getNeighbours returns the correct number of neighbours in a corner cell', function(t) {
  var cell = [0,0]
  var boardSize = 3
  var expected = 3
  var actual = getNeighbours(cell, boardSize).length
  t.equal(actual, expected, 'getNeighbours returns the correct number of neighbours in a corner cell')
  t.end()
})
