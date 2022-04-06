const isSameTree = function(p, q) {
  function dfs(p, q) {
    if (p === null && q === null) {
      return true
    }

    if (p !== null && q !== null && p.val === q.val) {
      return dfs(p.left, q.left) && dfs(p.right, q.right)
    } else {
      return false
    }
  }

  return dfs(p, q)
}

let p = {
  val: 1, 
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

let q = {
  val: 1, 
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

console.log(isSameTree(p, q))