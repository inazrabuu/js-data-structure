const minWindow = function(s, t) {
  if (t === "" || s.length < t.length)
    return ""

  const window = {},
        countT = {}

  for (char in t) {
    if (countT[t[char]] !== undefined) {
      countT[t[char]]++
    }
    else {
      countT[t[char]] = 1
    }
  }

  let have = 0,
      need = Object.keys(countT).length,
      res = [-1, -1],
      resLen = Number.MAX_SAFE_INTEGER,
      l = 0
  
  for (let r = 0; r < s.length; r++) {
    let c = s[r]

    if (window[c] !== undefined) {
      window[c]++
    } else {
      window[c] = 1
    }

    if (countT[c] !== undefined && window[c] === countT[c]) {
      have++
    }

    while (have === need) {
      let len = (r - l + 1)
      if (len < resLen) {
        res = [l, r]
        resLen = len
      }

      window[s[l]]--

      if (countT[s[l]] !== undefined && window[s[l]] < countT[s[l]]) {
        have--
      }

      l++
    }
  }
  
  let [a, b] = res

  return resLen < Number.MAX_SAFE_INTEGER ? s.substring(a, b + 1) : ""
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("a", "a"))
console.log(minWindow("a", "aa"))