const rotate = function(matrix) {
  let left = 0,
      right = matrix.length - 1

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left,
          bottom = right

      // save the top left
      let topleft = matrix[top][left + i]
      // move the bottom left to top left
      matrix[top][left + i] = matrix[bottom - i][left]
      // move the bottom right to bottom left
      matrix[bottom - i][left] = matrix[bottom][right - i]
      // move the top right to bottom right
      matrix[bottom][right - i] = matrix[top + i][right]
      // change top right into top left
      matrix[top + i][right] = topleft
    }
    right--
    left++
  }
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix)
console.log(matrix)