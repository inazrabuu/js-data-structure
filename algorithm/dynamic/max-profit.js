const maxProfit = function(prices) {
  let length = prices.length
  if (length === 0 || length === 1)
    return 0
  
  let maxProfit = 0
  let minPrice = prices[0]

  for (i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice)
      minPrice = prices[i]

    let profit = prices[i] - minPrice
    maxProfit = Math.max(profit, maxProfit)
  }

  return maxProfit
}

// let prices = [7,1,5,3,6,4]
// let prices = [7,6,4,3,1]
// let prices = [2,4,1]
// let prices = [2,1,2,1,0,1,2]
let prices = [2,1,2,0,1]
console.log(maxProfit(prices))