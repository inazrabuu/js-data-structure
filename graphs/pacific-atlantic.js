const pacificAtlantic = function(heights) {
  let rows = heights.length,
      cols = heights[0].length,
      pac = {},
      atl = {}

  function dfs(r, c, visit, prevHeight) {
    if (visit[`${r}_${c}`] !== undefined || r < 0 || c < 0
        || r === rows || c === cols || heights[r][c] < prevHeight) {
      return
    }

    visit[`${r}_${c}`] = [r, c]
    dfs(r + 1, c, visit, heights[r][c])
    dfs(r - 1, c, visit, heights[r][c])
    dfs(r, c + 1, visit, heights[r][c])
    dfs(r, c - 1, visit, heights[r][c])
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c])
    dfs(rows - 1, c, atl, heights[rows - 1][c])
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0])
    dfs(r, cols - 1, atl, heights[r][cols-1])
  }

  const res = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pac[`${i}_${j}`] !== undefined && atl[`${i}_${j}`] !== undefined){
        res.push([i,j])
      }
    }
  }

  return res
}

// let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// let heights = [[2,1],[1,2]]
let heights = [[8,13,11,18,14,16,16,4,4,8,10,11,1,19,7],[2,9,15,16,14,5,8,15,9,5,14,6,10,15,5],[15,16,17,10,3,6,3,4,2,17,0,12,4,1,3],[13,6,13,15,15,16,4,10,7,4,19,19,4,9,13],[7,1,9,14,9,11,5,4,15,19,6,0,0,13,5],[9,9,15,12,15,5,1,1,18,1,2,16,15,18,9],[13,0,4,18,12,0,11,0,1,15,1,15,4,2,0],[11,13,12,16,9,18,6,8,18,1,5,12,17,13,5],[7,17,2,5,0,17,9,18,4,13,6,13,7,2,1],[2,3,9,0,19,6,6,15,14,4,8,1,19,5,9],[3,10,5,11,7,14,1,5,3,19,12,5,2,13,16],[0,8,10,18,17,5,5,8,2,11,5,16,4,9,14],[15,9,16,18,9,5,2,5,13,3,10,19,9,14,3],[12,11,16,1,10,12,6,18,6,6,18,10,9,5,2],[17,9,6,6,14,9,2,2,13,13,15,17,15,3,14],[18,14,12,6,18,16,4,10,19,5,6,8,9,1,6]]
console.log(pacificAtlantic(heights))