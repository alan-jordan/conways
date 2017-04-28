var test = require('tape')
var overPopulated = require('../overPopulated')

test('is cell over populated', function (t) {
  var getNeighbour = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true
  }
  for(cell in getNeighbour) {
    var expected = getNeighbour[cell]
    var actual = overPopulated(cell)
    t.equal(actual, expected, 'Returns correct state if cell is over populated')
  }
  t.end()
})
