const countSubstrings = function(s) {
  let count = 0

  function countPalindrome(l, r, s) {
    let res = 0
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      res++
      l--
      r++
    }
    return res
  }

  for (let i = 0; i < s.length; i++) {
    count += countPalindrome(i, i, s)
    count += countPalindrome(i, i + 1, s)
  }

  return count
}

console.log(countSubstrings('aaa'))
console.log(countSubstrings('abc'))