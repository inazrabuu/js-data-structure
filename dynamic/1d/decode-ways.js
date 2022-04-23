const numDecodings = function(s) {
  let cache = {},
      dict = "0123456"

  cache[s.length] = 1
  function dfs(i) {
    if (cache[i] !== undefined) {
      return cache[i]
    }

    if (s[i] == "0") {
      return 0
    }
    
    let res = dfs(i + 1)

    if (i + 1 < s.length && (s[i] === "1" || 
        s[i] === "2" && dict.includes(s[i + 1]))) {
      res += dfs(i + 2)
    }
    cache[i] = res
    return res
  }

  return dfs(0)
}

let s = "12"
console.log(numDecodings(s))