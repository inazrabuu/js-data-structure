const coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for (let a = 1; a < amount + 1; a++) {
    coins.map(c => {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c])
      }
    })
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1
}

let coins = [1,2,5],
    amount = 0
console.log(coinChange(coins, amount))