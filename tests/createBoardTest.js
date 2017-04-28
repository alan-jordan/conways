var test = require('tape')
var createBoard = require('../createBoard')

test('an array of the right length is created', function (t) {
  var size = 10
  var expected = 10
  var actual = createBoard(size).length
  t.equal(actual, expected, 'A game board is created')
  t.end()
})

test('A 2d array is created', function (t) {
  var size = 3
  var expected = true || false
  var actual = createBoard(size)[2][2]
  t.equal(actual, expected, 'A 2d array element is returned')
  t.end()
})

test('A random array is generated', function (t) {
  var size = 5
  var expected = [
                  [ true, true, true, true, true ],
                  [ true, true, true, true, true ],
                  [ true, true, true, true, true ],
                  [ true, true, true, true, true ],
                  [ true, true, true, true, true ] ]
  var actual = createBoard(size)
  t.notDeepEqual(actual, expected, 'A random array is generated')
  t.end()
})
