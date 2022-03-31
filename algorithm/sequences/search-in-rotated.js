const search = function(nums, target) {
  let right = nums.length - 1
  return searchBinary(nums, 0, right, target)
}

function searchBinary(nums, left, right, target) {
  if (left > right) {
    return -1
  }

  let mid = Math.floor((left + right) / 2)
  if (nums[mid] === target) {
    return mid
  }

  // left hand portion
  if (nums[left] <= nums[mid]) {
    if (target >= nums[left] && target <= nums[mid]) {
      return searchBinary(nums, left, mid - 1, target)
    }

    return searchBinary(nums, mid + 1, right, target)
  }

  // right hand portion
  if (target >= nums[mid] && target <= nums[length]) {
    return searchBinary(nums, mid + 1, right, target)
  }

  return searchBinary(nums, left, mid - 1, target)
}

console.log(search([4,5,6,7,0,1,2], 6))
// console.log(search([5,1,3], 3))