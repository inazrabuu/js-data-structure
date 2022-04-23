const invertBinaryTree = function(root) {
  function invert(node) {
    if (node === null)
      return

    invert(node.left)
    invert(node.right)

    let temp = node.left
    node.left = node.right
    node.right = temp
  }

  invert(root)

  return root
}