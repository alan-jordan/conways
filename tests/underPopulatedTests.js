var test = require('tape')
var underPopulated = require('../underPopulated')

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
  for(cell in getNeighbour) {
    var expected = getNeighbour[cell]
    var actual = underPopulated(cell)
    t.equal(actual, expected, 'Returns correct state if cell is under populated')
  }
  t.end()
})
