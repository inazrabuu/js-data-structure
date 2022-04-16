const lowestCommonAncestor2 = function(root, p, q) {
  let cur = root
  while (cur !== null) {
    if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right
    } else if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left
    } else {
      return cur
    }
  }
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

console.log(lowestCommonAncestor2(root, p, q))