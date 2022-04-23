const encode = function(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    res += s[i].length + '#' + s[i]
  }

  return res
}

const decode = function(s) {
  let res = [],
      i = 0

  while (i < s.length) {
    let j = i
    while (s[j] != '#') {
      j++
    }

    let length = parseInt(s.substring(i, j))
    res.push(s.substring(j + 1, j + 1 + length))
    i = j + 1 + length
  }

  return res.join('')
}

console.log(decode(encode("This is my string to encode")))