const getSum = function(a, b) {
  if (b === 0) {
    return a
  } else {
    return getSum(a ^ b, (a & b) << 1)
  }
}
let a = 2, b = 3
console.log(getSum(a, b))