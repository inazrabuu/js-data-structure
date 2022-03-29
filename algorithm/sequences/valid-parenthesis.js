const validParenthesis = function(str) {
  if (str.length <= 1)
    return false

  let stack = []
  const pairs = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  
  for (i = 0; i < str.length; i++) {
    if (pairs[str[i]] !== undefined) {
      if (pairs[str[i]] === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(str[i])
    }
  }

  return stack.length > 0 ? false : true
}

console.log(validParenthesis('{}[]()'))
console.log(validParenthesis(')(){}'))