const canPartition = function(nums) {
  let sum = 0
  nums.map(n => sum += n)

  if (sum % 2 > 0) {
    return false
  }

  let cache = new Set()
  cache.add(0)
  target = parseInt(sum / 2)

  for (let i = nums.length - 1; i >= 0; i--) {
    let thisCache = new Set()
    cache.forEach(t => {
      thisCache.add(t + nums[i])
      thisCache.add(t)
    }) 
    cache = thisCache
  }
  
  return cache.has(target)
}

let nums = [1,5,11,5]
// nums = [1,2,3,5]
console.log(canPartition(nums))