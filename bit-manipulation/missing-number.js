const missingNumber = function(nums) {
  let res = nums.length
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i]
  }
  return res
}

let nums = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(nums))