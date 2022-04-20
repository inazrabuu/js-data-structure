const gcd = function(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

const uglyNumbers = function(n, a, b, c) {
  let ab = Math.floor(a * b / gcd(a, b)),
      bc = Math.floor(b * c / gcd(b, c)),
      ac = Math.floor(a * c / gcd(a, c)),
      abc = Math.floor(ab * c / gcd(ab, c))

  function uglyNumberCount(k) {
    return (Math.floor(k / a) + Math.floor(k / b) + Math.floor(k / c)) - 
           (Math.floor(k / ab) + Math.floor(k / bc) + Math.floor(k / ac)) + 
           (Math.floor(k / abc))
  }

  let minPtr = n,
      maxPtr = n * Math.min(a, b, c)
      boundaryIndex = maxPtr

  while (minPtr <= maxPtr) {
    let mid = Math.floor((minPtr + maxPtr) / 2)

    if (uglyNumberCount(mid) < n) {
      minPtr = mid + 1
    } else {
      boundaryIndex = mid
      maxPtr = mid - 1
    }
  }
  
  return boundaryIndex % (10 ** 9 + 7)
}

let n = 10, a = 2, b = 3, c = 5
console.log(uglyNumbers(n, a, b, c))