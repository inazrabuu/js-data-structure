const topKFrequent = function(nums, k) {
  const count = {},
        freq = Array(nums.length + 1).fill(Array()),
        res = []

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] !== undefined) {
      count[nums[i]] ++
    } else {
      count[nums[i]] = 1
    }
  }

  for (n in count) {
    freq[count[n]] = freq[count[n]].concat([parseInt(n)])
  }

  for (let i = freq.length; i > 0; i--) {
    for (j in freq[i]) {
      res.push(freq[i][j])
    }

    if (res.length === k) {
      return res
    }
  }

  return res
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1, 2], 2))