function serialize(root) {
  let res = []
  function dfs(node) {
    if (node === null) {
      res.push('x') 
      return
    }

    res.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }
    
  dfs(root)
    
  return res.join(' ')
}

function deserialize(s) {
  const serial = s.split(' ')
  function dfs() {
    val = serial.shift()
    if (val === 'x') {
      return null   
    }
      
    let node = new Node(val)
    node.left = dfs()
    node.right = dfs()

    return node
  }
    
  return dfs()
}

const Node = function(val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

let n = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3))
// let s = serialize(n)
// console.log(deserialize(s))

const flattenTree = function(n) {
  let head = new Node(n.val),
      tail = head,
      stackTrace = [n.right, n.left]

  while (stackTrace.length > 0) {
    let top = stackTrace.pop()
    if (top === null) {
      continue
    }

    tail.right = new Node(top.val)
    tail = tail.right
    stackTrace.push(top.right)
    stackTrace.push(top.left)
  }

  return head
}

// console.log(flattenTree(n).right.right)

function partition(s) {
  let ans = [],
      n = s.length
  
  function is_palindrome(word) {
      return word === word.split('').reverse().join('')   
  }
  
  function dfs(start, curPath) {
      if (start === n) {
          ans.push(curPath)   
      }
      
      for (let i = start + 1; i < n + 1; i++) {
          let prefix = s.substring(start, i)
          if (is_palindrome(prefix)) {
              dfs(i, [...curPath, prefix])   
          }
      }
  }
  
  dfs(0, [])
  
  return ans;
}

console.log(partition("aab"))