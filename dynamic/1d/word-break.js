const wordBreak = function(s, wordDict) {
  let cache = Array(s.length + 1).fill(false)
  cache[s.length] = true

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      let w = wordDict[j]

      if (i + w.length <= s.length && s.substr(i, w.length) === w) {
        cache[i] = cache[i + w.length]
      }

      if (cache[i] === true) {
        console.log(w)
        break
      }
    }
  }

  return cache[0]
}

let s = "leetcode", wordDict = ["leet","code"]
s = "catsandog"
wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak(s, wordDict))