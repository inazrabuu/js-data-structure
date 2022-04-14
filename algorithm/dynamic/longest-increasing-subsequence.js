const LengthOfLIS = function(nums) {
  const LIS = Array(nums.length).fill(1)

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j)
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j])
      }
    }
  }

  return Math.max(...LIS)
}

let nums = [10,9,2,5,3,7,101,18]
nums = [0,1,0,3,2,3]
console.log(LengthOfLIS(nums))