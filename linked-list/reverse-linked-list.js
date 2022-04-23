const reverseLinkedList = function(head) {
  let prev = null
  let curr = head

  while (curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

const reverseLinkedListRecursive = function(head) {
  if (head === null)
    return null

  let newHead = head
  if (head.next !== null) {
    newHead = reverseLinkedListRecursive(head.next)
    head.next.next = head
  }
  head.next = null

  return newHead
}