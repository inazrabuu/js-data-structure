const trapWater = function(heights) {
  let totalWater = 0
  let l = 0,
      r = heights.length - 1,
      leftBound = heights[l],
      rightBound = heights[r]

  while (l < r) {
    if (heights[l] <= heights[r]) {
      l++
      leftBound = Math.max(leftBound, heights[l])
      totalWater += leftBound - heights[l]
    } else {
      r--
      rightBound = Math.max(rightBound, heights[r])
      totalWater += rightBound - heights[r]
    }
  }

  return totalWater
}

console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trapWater([4,2,0,3,2,5]))