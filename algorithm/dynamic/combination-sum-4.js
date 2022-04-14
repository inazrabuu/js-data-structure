const combinationSum4 = function(nums, target) {
  const dp = {
    0: 1
  }

  for (let total = 1; total < target + 1; total++) {
    dp[total] = 0
    nums.map(n => {
      dp[total] += dp[total - n] !== undefined ? dp[total - n] : 0
    })
  }

  return dp[target]
}

let nums = [1,2,3], target = 4
console.log(combinationSum4(nums, target))