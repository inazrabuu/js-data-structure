function fibonacciIterative(n) { //O(N)
  let arr = [0, 1]
  for (i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }

  return arr[n]
}
console.log(fibonacciIterative(40))

function fibonacciRecursive(n) { //O(2^N)
  if (n < 2)
    return n

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
// console.log(fibonacciRecursive(40))