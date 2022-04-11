const longestConsecutive = function(nums) {
  const map = {}
  let longest = 0

  nums.map(m => {
    map[m] = true
  })

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i] - 1] === undefined) {
      let length = 0
      while (map[nums[i] + length] !== undefined) {
        length++
        longest = Math.max(length, longest)
      }
    }
  }

  return longest
}

let nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))