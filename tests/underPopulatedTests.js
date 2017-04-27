var test = require('tape')
var createBoard = require('../createBoard')

test('is cell underpopulated', function (t) {
  var getNeighbour = {
    0: true,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  }
  var expected = 10
  var actual = createBoard(size).length
  t.equal(actual, expected, 'A game board is created')
  t.end()
})
