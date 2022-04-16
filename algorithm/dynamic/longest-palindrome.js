const longestPalindrome = function(s) {
  let res = "",
      resLen = 0

  for (let i = 0; i < s.length; i++) {
    // odd length palindrome
    let l = i,
        r = i
      
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1)
        resLen = r - l + 1
      }
      l--
      r++
    }

    // even length palindrome
    l = i
    r = i + 1
      
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1)
        resLen = r - l + 1
      }
      l--
      r++
    }
  }

  return res
}

const checkPalindrome = function(l, r, s, res, resLen) {}

let s = "babad"
s = "cbbd"
console.log(longestPalindrome(s))