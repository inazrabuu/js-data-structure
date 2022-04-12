const Interval = function(start, end) {
  this.start = start !== undefined ? start : 0
  this.end = end !== undefined ? end : 0
}

const minMeetingRooms = function(intervals) {
  let start = [],
      end = []
  for (let i in intervals) {
    start.push(intervals[i].start)
    end.push(intervals[i].end)
  }

  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  let res = 0,
      count = 0,
      s = 0, e = 0

  while (s < intervals.length) {
    if (start[s] < end[e]) {
      s++
      count++
    } else {
      e++
      count--
    }
    res = Math.max(res, count)
  }

  return res
}

let intervals = [
  new Interval(0, 30),
  new Interval(5, 10),
  new Interval(15, 20),
]

console.log(minMeetingRooms(intervals))

intervals = [
  new Interval(2, 7)
]

console.log(minMeetingRooms(intervals))