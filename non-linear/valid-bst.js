const isValidBST = function(root) {
  function check(node, l, r) {
    if (node === null)
      return true
  
    if (!(l < node.val && node.val < r))
      return false
      
    return check(node.left, l, node.val) && check(node.right, node.val, r)
  }
  
  return check(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
}

console.log(isValidBST(root))