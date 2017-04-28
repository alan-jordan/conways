var test = require('tape')
var resurrectable = require('../resurrectable')

test('is cell resurrectable', function (t) {
  var getNeighbour = {
    0: false,
    1: false,
    2: false,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  }
  for(cell in getNeighbour) {
    var expected = getNeighbour[cell]
    var actual = resurrectable(cell)
    t.equal(actual, expected, 'Returns correct state if cell is resurrectable')
  }
  t.end()
})
