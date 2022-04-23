const validTree = function(n, edges) {
  if (edges.length === 0) {
    return true
  }

  let adj = new Array(n).fill(0).map(() => new Array())
  edges.map(e => {
    if (adj[e[0]] === undefined) {
      adj[e[0]] = []
    }

    adj[e[0]].push(e[1])
  })

  let visit = new Set()

  function dfs(i, prev) {
    if (visit.has(i)) {
      return false
    }

    visit.add(i, true)
    for (j in adj[i]) {
      let cur = adj[i][j]
      if (cur === prev) {
        continue
      }

      if (!dfs(cur, i)) {
        return false
      }
    }

    return true
  }

  return dfs(0, -1) && visit.size === n
}

let n = 5, 
    edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

console.log(validTree(n, edges))

n = 5 
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

console.log(validTree(n, edges))