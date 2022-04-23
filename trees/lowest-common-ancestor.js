const lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
    return null
  }

  if (root.val === p.val || root.val === q.val) {
    return root
  }

  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if (left !== null && right !== null) {
    return root
  }

  if (left === null && right === null) {
    return null
  }

  return left !== null ? left : right
}

let root = {
  val: 5,
  left: {
    val: 6,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null, 
    right: null
  }
}
let p = {
  val: 3,
  left: null,
  right: null
}
let q = {
  val: 6,
  left: null,
  right: null
}

console.log(lowestCommonAncestor(root, p, q))