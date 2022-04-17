const longestCommonSubsequence = function(text1, text2) {
  let cache = new Array(text1.length + 1).fill(0).map(m => new Array(text2.length + 1).fill(0))

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        cache[i][j] = 1 + cache[i + 1][j + 1]
      } else {
        cache[i][j] = Math.max(cache[i][j + 1], cache[i + 1][j])
      }
    }
  }

  return cache[0][0]
}

let text1 = "abcde", text2 = "ace" 
text1 = "abcba"
text2 = "abcbcba"
console.log(longestCommonSubsequence(text1, text2))