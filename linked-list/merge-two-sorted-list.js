const ListNode = function(val = 0, next = null) {
  this.val = val
  this.next = next
}

const mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(),
      tail  = dummy,
      l1 = list1,
      l2 = list2

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  if (l1) {
    tail.next = l1
  }
  if (l2) {
    tail.next = l2
  }

  return dummy.next
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4))),
    list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

let res = mergeTwoLists(list1, list2)
console.log(res)
console.log(res.next)
console.log(res.next.next)
console.log(res.next.next.next)