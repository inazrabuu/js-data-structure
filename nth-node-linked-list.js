const removeNthFromEnd = function(head, n) {
  let temp = {
    val: 0,
    next: head
  },
      left = temp,
      right = head

  while (right !== null && n > 0) {
    right = right.next
    n--
  }

  while (right !== null) {
    right = right.next
    left = left.next
  }

  left.next = left.next.next

  return temp.next
}

const head = {
  val: 1,
  next: {
    val: 2, 
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(removeNthFromEnd(head, 3))