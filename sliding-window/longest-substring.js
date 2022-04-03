const lengthOfLongestSubstring = function(s) {
  let result = 0,
      l = 0,
      charSet = {}

  for (let r = 0; r < s.length; r++) {
    while (charSet[s[r]] !== undefined) {
      delete charSet[s[l]]
      l++
    }
    charSet[s[r]] = true
    result = Math.max(result, (r - l + 1))
  }

  return result
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))