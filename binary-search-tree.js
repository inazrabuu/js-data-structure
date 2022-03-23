class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) { 
    const newNode = new Node(value)
    if (this.root === null){
      this.root = newNode
    } else {
      let holderNode = this.root
      while (true) {
        if (value > holderNode.value) {
          if (holderNode.right === null) {
            holderNode.right = newNode
            break
          } 
          holderNode = holderNode.right
        } else {
          if (holderNode.left === null) {
            holderNode.left = newNode
            break
          } 
          holderNode = holderNode.left
        }
      }
    }

    return this
  }

  lookup(value) {
    let found = null
    let holderNode = this.root
    while (holderNode !== null) {
      if (holderNode.value === value) {
        found = holderNode
        break
      } else if (value > holderNode.value) {
        holderNode = holderNode.right
      } else {
        holderNode = holderNode.left
      }
    }
    return found
  }

  remove(value) {
    if (this.root === null)
      return null

    let holderNode = this.root
    let parentNode = null

    while(holderNode !== null) {
      if (value > holderNode.value) {
        parentNode = holderNode
        holderNode = holderNode.right
      } else if (value < holderNode.value) {
        parentNode = holderNode
        holderNode = holderNode.left
      } else if (value === holderNode.value) {
        if (holderNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            if (holderNode.value < parentNode.value) {
              parentNode.left = holderNode.left
            } else if (holderNode.value > parentNode.value) {
              parentNode.right = holderNode.left
            }
          } 
        } else if (holderNode.right.left === null) {
          holderNode.right.left = holderNode.left
          if (parentNode === null) {
            this.root = holderNode.right
          } else {
            if (holderNode.value < parentNode.value) {
              parentNode.left = holderNode.right
            } else if (holderNode.value > parentNode.value) {
              parentNode.right = holderNode.right
            }
          }
        } else {
          let leftmost = holderNode.right.left
          let leftmostParent = holderNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          leftmostParent.left = leftmost.right
          leftmost.left = holderNode.left
          leftmost.right = holderNode.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (holderNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (holderNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }

        return value
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = []
    queue.push(currentNode)

    while (queue.length > 0) {
      currentNode = queue.shift()
      list.push(currentNode.value)

      if (currentNode.left !== null)
        queue.push(currentNode.left)

      if (currentNode.right !== null)
        queue.push(currentNode.right)
    }

    return list
  }

  breadthFirstSearchRecursive(queue, list) {
    if (queue.length === 0) {
      return list
    }

    let currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left !== null)
      queue.push(currentNode.left)

    if (currentNode.right !== null)
      queue.push(currentNode.right)

    return this.breadthFirstSearchRecursive(queue, list)
  }

  DFSInOrder() {
    return this.traverseInOrder(this.root, [])
  }

  DFSPreOrder() {
    return this.traversePreOrder(this.root, [])
  }

  DFSPostOrder() {
    return this.traversePostOrder(this.root, [])
  }

  traverseInOrder(node, list) {
    if (node.left !== null) {
      this.traverseInOrder(node.left, list)
    }

    list.push(node.value)

    if (node.right !== null) {
      this.traverseInOrder(node.right, list)
    }

    return list
  }

  traversePreOrder(node, list) {
    list.push(node.value)

    if (node.left !== null) {
      this.traversePreOrder(node.left, list)
    }

    if (node.right !== null) {
      this.traversePreOrder(node.right, list)
    }

    return list
  }

  traversePostOrder(node, list) {
    if (node.left !== null) {
      this.traversePostOrder(node.left, list)
    }

    if (node.right !== null) {
      this.traversePostOrder(node.right, list)
    }

    list.push(node.value)

    return list
  }
} 

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(20)
tree.insert(8)
tree.insert(1)
tree.insert(40)
tree.insert(9)
tree.insert(15)

// tree.remove(20)

// console.log(JSON.stringify(traverse(tree.root)))

// console.log(tree.lookup(20))
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchRecursive([tree.root], []))
// console.log(tree.DFSInOrder())
// console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())