const buildTree = function(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }

  const node = {
    val: preorder[0],
    left: null,
    right: null
  }

  let mid = inorder.indexOf(preorder[0])

  node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  node.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return node
}

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]

console.log(buildTree(preorder, inorder))