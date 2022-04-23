const maxProduct = function(nums) {
  let res = 1
  let curMin = 1,
      curMax = 1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      curMin = 1
      curMax = 1
      continue
    }

    let tmp = curMax * nums[i]
    curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
    curMin = Math.min(tmp, curMin * nums[i], nums[i])
    res = Math.max(res, curMax)
  }

  return res
}

console.log(maxProduct([2,3,-2,4]))