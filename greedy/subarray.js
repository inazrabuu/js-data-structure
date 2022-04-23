const maxSubArray = function(nums) {
  let currSum = 0
  let maxSum = Number.MIN_SAFE_INTEGER

  for (i = 0; i < nums.length; i++) {
    currSum += nums[i]
    if (currSum > maxSum)
      maxSum = currSum

    if (currSum < 0)
      currSum = 0
  }

  return maxSum
}

console.log(maxSubArray([1, 2, -3, 4]))