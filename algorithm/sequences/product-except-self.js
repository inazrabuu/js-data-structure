const productExceptSelf = function(nums) {
  let products = [1]
  let length = nums.length

  let prefix = 1
  for (i = 0; i < length; i++) {
    products[i] = parseInt(prefix)
    prefix *= nums[i]
  }

  let suffix = 1
  for (i = length - 1; i >= 0; i--) {
    products[i] *= parseInt(suffix)
    suffix *= nums[i]
  }

  return products
}

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))
console.log(productExceptSelf([4,3,2,1,2]))