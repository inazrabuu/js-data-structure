const rob = function(nums) {
  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)))
}

const helper = function(nums) {
  let rob1 = 0,
      rob2 = 0
  nums.map(n => {
    let newRob = Math.max(rob1 + n, rob2)
    rob1 = rob2
    rob2 = newRob
  })

  return rob2
}

let nums = [2,3,2]
console.log(rob(nums))

nums = [1,2,3,1]
console.log(rob(nums))