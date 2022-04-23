// sort the array first
// three pointers are needed, first pointer as the guideline, second & third as the iterator
// second will iterate ascending, thrid will iterate descending
// if first pointer is the same as the previous, continue looping
// if first + second + third is greater than 0, decrease right
// if first + second + third is less than 0, increase left
// if first + second + third is equal to 0, increse left while left is equal with previous left and left is less then right
const threeSum = function(nums) {
  let res = []
  nums.sort((a, b) => {
    return a - b
  })
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let l = i + 1,
        r = nums.length - 1

    while (l < r) {
      let threesum = nums[i] + nums[l] + nums[r]
      if (threesum > 0)
        r--

      if (threesum < 0)
        l++

      if (threesum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        l++
        while (nums[l] == nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  return res
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))