const check = function(newspapers, coworkers, val) {
  let total = 0,
      split = 0

  for (n in newspapers) {
    let num = newspapers[n]
    if (num > val) {
      return false
    }

    if (total + num > val) {
      total = 0
      split++
    }

    total += num
  }

  if (total != 0) {
    split++
  }

  return split <= coworkers
}

const newspapersSplit = function(newspapers, coworkers) {
  let low = 0,
      high = 1000000001

  while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (check(newspapers, coworkers, mid)) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return high + 1
}

let newspapers = [7,2,5,10,8], coworkers = 2
console.log(newspapersSplit(newspapers, coworkers))