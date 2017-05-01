var test = require('tape')
var checkNextCellStatus = require('../checkNextCellStatus')
var createBoard = require('../createBoard')
var checkCells = require('../checkCells')


test('Check that a dead resurrectable cell revives', function(t) {
  board = createBoard(3)
  var cells = checkCells(board)
  var test = cells.map(function(cell){

  })
  //var board = checkBoard(size)
  //var actual = checkCells(board).length
  //t.deepEqual(actual, expected, 'Check that a dead resurrectable cell revives')
  //t.end()
})
