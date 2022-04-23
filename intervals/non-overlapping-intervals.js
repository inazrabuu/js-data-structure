const eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  let prevEnd = intervals[0][1]
  let res = 0
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1]
    } else {
      res++
      prevEnd = Math.min(intervals[i][1], prevEnd)
    }
  }

  return res
}

console.log(eraseOverlapIntervals([[1,2],[2,3]]))
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))