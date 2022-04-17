const exists = function(board, word) {
  let ROWS = board.length,
      COLS = board[0].length,
      path = new Set()

  function dfs(r, c, i) {
    if (i === word.length) {
      return true
    }

    if(r < 0 || c < 0 || r >= ROWS || c >= COLS ||
       word[i] !== board[r][c] || path.has(`${r}_${c}`)) {
      return false
    }

    path.add(`${r}_${c}`)
    let res = dfs(r + 1, c, i + 1) ||
              dfs(r - 1, c, i + 1) ||
              dfs(r, c + 1, i + 1) ||
              dfs(r, c - 1, i + 1)
    path.delete(`${r}_${c}`)

    return res
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
    word = "ABCCED"
console.log(exists(board, word))
