const twoSum = function(nums, target) {
  let check = {}
  for (i = 0; i < nums.length; i++) {
    if (check[target - nums[i]] !== undefined)
      return [check[target - nums[i]], i]
    
    check[nums[i]] = i
  }

  return null
}

console.log(twoSum([7, 2, 11, 15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3, 3], 6))