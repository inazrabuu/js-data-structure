function add50To() {
  let cache = {}
  return function(n) {
    let answer = 0
    if (n in cache) {
      answer = cache[n]
    } else {
      console.log('calculating')
      cache[n] = n + 50
      answer = cache[n]
    }

    return answer
  }
}

// const memoizeAdd50To = add50To()

// console.log(memoizeAdd50To(50))
// console.log(memoizeAdd50To(50))

let calc1 = 0
function fibonacci(n) {
  calc1++
  if (n < 2)
    return n
  
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(40))
console.log(calc1)

let calc2 = 0
function fibonacciMaster() {
  let cache = {}

  return function fib(n) {
    calc2++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

const fastFibonacci = fibonacciMaster()
console.log(fastFibonacci(40))
console.log(calc2)