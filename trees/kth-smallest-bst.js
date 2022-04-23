const kthSmallest = function(root, k) {
  const values = []

  function dfs(root, values) {
    if (root.left !== null) {
      dfs(root.left, values)
    }

    values.push(root.val)

    if (root.right !== null) {
      dfs(root.right, values)
    }
  }

  dfs(root, values)

  return values[k - 1]
}

let root = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}

console.log(kthSmallest(root, 1))

root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: null
  }
}

console.log(kthSmallest(root, 3))