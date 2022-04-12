const Interval = function(start, end) {
  this.start = start
  this.end = end
}

const canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a.start - b.start)
  
  for (let i = 1; i < intervals.length; i++) {
    let i1 = intervals[i - 1],
        i2 = intervals[i]

    if (i1.end > i2.start) {
      return false
    }
  }

  return true
}

let intervals = [
  new Interval(0, 30),
  new Interval(5, 10),
  new Interval(15, 20),
]
console.log(canAttendMeetings(intervals))

intervals = [
  new Interval(5, 8),
  new Interval(9, 15),
]
console.log(canAttendMeetings(intervals))