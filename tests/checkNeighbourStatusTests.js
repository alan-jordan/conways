var test = require('tape')
var checkNeighbourStatus = require('../checkNeighbourStatus')
var testBoard =  [ [ true, true, true ],
      [ true, false, false ],
      [ false, false, false ] ]
var testNeighbours = [ [ 1, 0 ], [ 1, 1 ], [ 1, 0 ] ]


test('Check Neighbour Status can check for correct number of alive neighbours', function (t) {
  var expected = 2
  var actual = checkNeighbourStatus(testBoard, testNeighbours)
  t.deepEqual(actual, expected, 'Check Neighbour Status can check for correct number of alive neighbours')
  t.end()
})
