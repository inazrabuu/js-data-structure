const maxDepth = function(root) {
  let stack = [[root, 1]],
      res = 0

  while (stack.length > 0) {
    let [node, depth] = stack.pop()
    
    if (node !== null) {
      res = Math.max(res, depth)
      stack.push([node.left, depth + 1])
      stack.push([node.right, depth + 1])
    }
  }

  return res
}

let root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(maxDepth(root))

root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null
  }
}

console.log(maxDepth(root))