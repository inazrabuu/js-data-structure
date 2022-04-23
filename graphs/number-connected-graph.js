const countComponent = function(n, edges) {
  let parent = Array.from(Array(n), (x, i) => i),
      rank = Array(n).fill(1)

  function find(n1) {
    let res = n1

    while (res !== parent[res]) {
      parent[res] = parent[parent[res]]
      res = parent[res]
    }

    return res
  }

  function union(n1, n2) {
    let p1 = find(n1),
        p2 = find(n2)

    if (p1 === p2) {
      return 0
    }

    if (rank[p2] > rank[p1]) {
      parent[p1] = p2
      rank[p2] += rank[p1]
    } else {
      parent[p2] = p1
      rank[p1] += p2
    }

    return 1
  }

  let res = n
  for (let i = 0; i < edges.length; i++) {
    res -= union(edges[i][0], edges[i][1])
  }

  return res
}

let n = 5,
    edges = [[0, 1], [1, 2], [3, 4]]

console.log(countComponent(n, edges))