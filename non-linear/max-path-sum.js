const maxPathSum = function(root) {
  let res = [root.val]

  function dfs(node) {
    if (node === null) {
      return 0
    }

    let leftMax = dfs(node.left),
        rightMax = dfs(node.right)

    console.log(node.val, leftMax)
    
    leftMax = Math.max(leftMax, 0)
    rightMax = Math.max(rightMax, 0)

    res[0] = Math.max(res[0], node.val + leftMax + rightMax)

    return node.val + Math.max(leftMax, rightMax)
  }

  dfs(root)

  return res[0]
}

// let root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null
//   }
// }

// console.log(maxPathSum(root))

root = {
  val: -10,
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

console.log(maxPathSum(root))