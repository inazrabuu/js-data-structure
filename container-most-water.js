// two pointers left and right
// while left is less than right
// get the area of left and right, use max
// if left is less than right, move left (increase)
// otherwise move right (decrease)
const mostWater = function(heights) {
  let result = 0
  let l = 0,
      r = heights.length - 1

  while (l < r) {
    let area = (r - l) * Math.min(heights[l], heights[r])
    result = Math.max(result, area)

    if (heights[l] < heights[r]) {
      l++
    } else {
      r--
    }
  }

  return result
}

console.log(mostWater([4,2,1,3,0,1,2]))
console.log(mostWater([1,8,6,2,5,4,8,3,7]))