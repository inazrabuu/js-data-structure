const cloneGraph = function(node) {
  const mapped = {}

  function dfs(node) {
    if (node === null) 
      return node

    if (mapped[node.val] !== undefined) {
      return mapped[node.val]
    }

    let copy = {
      val: node.val,
      neighbors: []
    }
    mapped[node.val] = copy
    
    node.neighbors.forEach(n => copy.neighbors.push(dfs(n)))

    return copy
  }

  return dfs(node)
}