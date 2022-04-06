const serialize = function(root) {
  let res = []

  function dfs(node) {
    if (node === null) {
      res.push('N')
      return 
    }

    res.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return res.join(',')
}

const deserialize = function(data) {
  let vals = data.split(',')
  let i = 0

  function dfs() {
    if (vals[i] === 'N') {
      i++
      return null
    }

    let node = {
      val: vals[i],
      left: null,
      right: null
    }
    i++
    node.left = dfs()
    node.right = dfs()

    return node
  }

  return dfs()
}

let root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
}
const ser = serialize(root)
console.log(ser)
console.log(deserialize(ser))