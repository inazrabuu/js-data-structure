const levelOrder = function(root) {
  let res = [],
      queue = []

  if (root !== null) {
    queue.push(root)
  }
  
  while (queue.length > 0) {
    let values = [],
        queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift()

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
      values.push(node.val)
    }

    res.push(values)
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

console.log(levelOrder(root))

root = {
  val: 1,
  left: null,
  right: null
}

console.log(levelOrder(root))