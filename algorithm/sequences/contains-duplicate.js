const containsDuplicate = function(nums) {
  let check = {}
  for (i = 0; i < nums.length; i++) {
    if (check[nums[i]] !== undefined)
      return check[nums[i]]
    check[nums[i]] = true
  }

  return false
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))