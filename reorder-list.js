function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const reorderList = function(head) {
  let slow = head,
      fast = head.next

  while (fast !== null && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let secondHalf = slow.next,
      prev = null
  slow.next = null

  // reverse the second half of the list
  while (secondHalf !== null) {
    let tmp = secondHalf.next
    secondHalf.next = prev
    prev = secondHalf
    secondHalf = tmp
    console.log(prev.val, secondHalf, tmp)
  }

  // merge the first & second half of the list
  let firstHalf = head
  secondHalf = prev
  while (secondHalf !== null) {
    console.log('here')
    let tmp1 = firstHalf.next,
        tmp2 = secondHalf.next
    firstHalf.next = secondHalf
    secondHalf.next = tmp1
    firstHalf = tmp1
    secondHalf = tmp2
  }
}

let head = new ListNode(1, 
  new ListNode(2, 
    new ListNode(3, 
      new ListNode(4, 
        new ListNode(5,
          new ListNode(6, 
            new ListNode(7)))))))
reorderList(head)
while (head !== null) {
  console.log(head.val)
  head = head.next
}