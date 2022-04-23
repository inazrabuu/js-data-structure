const findMin = function(nums) {
  let left = 0,
      right = nums.length - 1,
      indexBound = -1

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] <= nums[nums.length - 1]) {
      indexBound = nums[mid]
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return indexBound
}

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))