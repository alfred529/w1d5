var unsortedArray = [5, 8, 2, 23, 1, 345, 642, 3, 7, 13435, 3]

var sortedNumbers = require('./sortFunction')
var outputData = require('./dataReturn')

outputData.dataKey(sortedNumbers.sortKey(unsortedArray))