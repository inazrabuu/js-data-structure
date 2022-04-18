const countBits = function(n) {
  if (n === 0) {
    return [0]
  }
  
  const res = Array(n).fill(0)
  let offset = 1

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset = i
    }
    res[i] = 1 + res[i - offset]
  }

  return res
}

let n = 5
console.log(countBits(n))