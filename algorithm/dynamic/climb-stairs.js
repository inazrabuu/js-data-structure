const climbStairs = function(n) {
  if (n === 0)
    return 0
  
  let stairs = Array(n + 1)
  stairs[1] = 1
  stairs[2] = 2

  for (i = 3; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2]
  }

  return stairs[n]
}

console.log(climbStairs(5))