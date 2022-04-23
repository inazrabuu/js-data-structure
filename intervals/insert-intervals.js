const insert = function(intervals, newInterval) {
  const res = []

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval)
      return res.concat(intervals.splice(i))
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i])
    } else {
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
    }
  }
  res.push(newInterval)

  return res
}

let intervals = [[1,3],[6,9]],
    newInterval = [2,5]

console.log(insert(intervals, newInterval))

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval = [4,8]

console.log(insert(intervals, newInterval))