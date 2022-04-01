const characterReplacement = function(s, k) {
  let count = {},
      result = 0,
      l = 0,
      maxF = 0

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] !== undefined) {
      count[s[i]]++
    } else {
      count[s[i]] = 1
    }

    maxF = Math.max(maxF, count[s[i]])
    while ((i - l + 1) - maxF > k ) {
      count[s[l]]--
      l++
    }

    result = Math.max(result, i - l + 1)
  }

  return result
}

// console.log(characterReplacement("ABAB", 2))
// console.log(characterReplacement("AABABBA", 1))
console.log(characterReplacement("BAAA", 0))