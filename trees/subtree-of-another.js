const isSubtree = function(root, subRoot) {
  if (subRoot === null) {
    return true
  }

  if (root === null && subRoot !== null) {
    return false
  }

  if (sameTree(root, subRoot)) {
    return true
  }

  return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
}

const sameTree = function(s, t) {
  if (s === null && t === null) {
    return true
  }

  if (s !== null && t !== null && s.val === t.val) {
    return sameTree(s.left, t.left) && sameTree(s.right, t.right)
  }

  return false
}

let root = {
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}

let subRoot = {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}

console.log(isSubtree(root, subRoot))