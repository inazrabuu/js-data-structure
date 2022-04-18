const spiralOrder = function(matrix) {
  const res = []
  let left = 0,
      top = 0
      right = matrix[0].length,
      bottom = matrix.length

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i])
    }
    top++

    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1])
    }
    right--

    if (!(left < right && top < bottom)) {
      break
    }

    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[bottom - 1][i])
    }
    bottom--

    for (let i = bottom - 1; i >= top; i--) {
      res.push(matrix[i][left])
    }
    left++
  }

  return res
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix))