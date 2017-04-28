var test = require('tape')
var checkCells = require('../checkCells')
var checkBoard = require('../createBoard')

test('Check that checkCells works', function(t) {
  var size = 3
  var expected = 9
  var board = checkBoard(size)
  var actual = checkCells(board)
  t.equal(actual, expected, 'Can loop through all cells to check their status')
  t.end()
})
