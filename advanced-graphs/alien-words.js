const alienOrder = function(words) {
  let res = ""
  if (words === null || words.length === 0) {
    return ""
  }

  const adj = {},
        indegree = {}

  words.map(w => {
    for (let i = 0; i < w.length; i++) {
      adj[w[i]] = new Set()
      indegree[w[i]] = 0
    }
  })

  for (let i = 0; i < words.length - 1; i++) {
    let j = 0
    while (j < words[i].length && j < words[i + 1].length) {
      let a = words[i][j],
          b = words[i + 1][j]

      if (a != b) {
        adj[a].add(b)
        indegree[b] = indegree[b] + 1
        break
      }

      if (adj)
      j++
    }
  }

  // not optimized, this queue should be a priority queue
  let q = []
  for (let c in indegree) {
    if (indegree[c] === 0) {
      q.push(c)
    }
  }

  while (q.length > 0) {
    let ch = q.shift()
    res += ch
    if (adj[ch] !== undefined) {
      adj[ch].forEach(c => {
        indegree[c] = indegree[c] - 1
        if (indegree[c] === 0) {
          q.push(c)
        }
      })
    }
  }

  if (res.length != Object.keys(indegree).length) {
    return ""
  }

  return res
}

// let words = ["wrt","wrf","er","ett","rftt"]
// console.log(alienOrder(words))

// words = ["ab","adc"]
words = ["zy","zx"]
console.log(alienOrder(words))