const ListNode = function(val, next) {
  this.val = val !== undefined ? val : null
  this.next = next !== undefined ? next : null
}

const mergeKLists = function(lists) {
  if (lists === null || lists.length === 0) {
    return null
  }

  return mergeK(lists, 0, lists.length - 1)

  function mergeK(lists, start, end) {
    if (start === end) {
      return lists[start]
    }

    let mid = Math.floor(start + (end - start) / 2)

    let left = mergeK(lists, start, mid)
    let right = mergeK(lists, mid + 1, end)
    
    return merge(left, right)
  }

  function merge(l1, l2) {
    let result = new ListNode(-1)
    let curr = result

    while (l1 !== null || l2 !== null) {
      if (l1 === null) {
        curr.next = l2
        l2 = l2.next
      } else if (l2 === null) {
        curr.next = l1
        l1 = l1.next
      } else if (l1.val < l2.val) {
        curr.next = l1
        l1 = l1.next
      } else {
        curr.next = l2
        l2 = l2.next
      }
      curr = curr.next
    }

    return result.next
  }
}

let lists = []

let node1 = new ListNode(1, new ListNode(4, new ListNode(5)))

lists.push(node1)

let node2 = new ListNode(1, new ListNode(3, new ListNode(4)))

lists.push(node2)

let node3 = new ListNode(2, new ListNode(6))

lists.push(node3)

console.log(mergeKLists(lists))