// sort the intervals: important
// store the first interval in the output
// loop through the intervals from index 1
// if last value index 1 in the output higher than the current index 0 then swap index 1 of last value with the higher between last value of index 1 and current value of index 1
// else push current interval into the output
const mergeIntervals = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  let mergeds = [intervals[0]]

  for (i = 1; i < intervals.length; i++) {
    let prev = mergeds[mergeds.length - 1]
    
    if (prev[1] >= intervals[i][0]) {
      mergeds[i - 1][1] = Math.max(prev[1], intervals[i][1])
    } else {
      mergeds.push(intervals[i])
    }
  }

  return mergeds
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))
console.log(mergeIntervals([[1,3],[2,6],[8,10]]))
console.log(mergeIntervals([[1,4],[0,4]]))
console.log(mergeIntervals([[1,4],[0,1]]))
console.log(mergeIntervals([[1,4]]))
console.log(mergeIntervals([[1,4],[2,3]]))
console.log(mergeIntervals([[1,4],[0,0]]))