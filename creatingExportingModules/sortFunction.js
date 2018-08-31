function sortFunction (data) {
  data.sort(function(a, b) {
    return a - b
  })
  return data
}

module.exports = {
  sortKey: sortFunction
}