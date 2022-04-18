const reverseBits = function(n) {
  let reversedArray = n.toString(2).split("").reverse()

  while(reversedArray.length < 32){ reversedArray.push('0')}

  return parseInt(reversedArray.join(""),2) 
}

let n = 4294967293
console.log(reverseBits(n))