const MinHeap = function() {
  this.heap = []
}

MinHeap.prototype.size = function() {
  return this.heap.length
}

MinHeap.prototype.getParentIndex = function(index) {
  if (index === 0)
    return null

  return Math.floor((index - 1) / 2)
}

MinHeap.prototype.getChildrenIndex = function(index) {
  const leftIndex = index * 2 + 1,
        rightIndex = leftIndex + 1

  return [leftIndex, rightIndex].map(i => i < this.size() ? i : null )
}

MinHeap.prototype.push = function(node) {
  this.heap.push(parseInt(node))
  this.heapifyUp(this.size() - 1)
}

MinHeap.prototype.heapifyUp = function(index) {
  const parentIndex = this.getParentIndex(index)

  if (parentIndex === null) {
    return null
  }

  let currentNode = this.heap[index],
      parentNode = this.heap[parentIndex]

  if (currentNode < parentNode) {
    this.swap(index, parentIndex)
    this.heapifyUp(parentIndex)
  }
}

MinHeap.prototype.swap = function(index1, index2) {
  let temp = this.heap[index1]
  this.heap[index1] = this.heap[index2]
  this.heap[index2] = temp
}

MinHeap.prototype.pop = function() {
  let node = this.heap[0],
      lastNode = this.heap.pop()

  if (this.size() > 0) {
    this.heap[0] = lastNode
    this.heapifyDown(0)
  }

  return node
}

MinHeap.prototype.heapifyDown = function(index) {
  const [leftIndex, rightIndex] = this.getChildrenIndex(index)

  if (leftIndex === null) {
    return null
  }

  let swapIndex = null,
      parentNode = this.heap[index],
      leftNode = this.heap[leftIndex]

  if (leftNode < parentNode) {
    swapIndex = leftIndex
  }

  if (rightIndex !== null) {
    let rightNode = this.heap[rightIndex]
    if (swapIndex !== null) {
      if (rightNode < leftNode) {
        swapIndex = rightIndex
      }
    }
  }

  if (swapIndex === null) {
    return null
  }

  this.swap(index, swapIndex)

  this.heapifyDown(swapIndex)
}

const heap = new MinHeap()
heap.push(4)
heap.push(9)
heap.push(8)
heap.push(10)
heap.push(12)
heap.push(18)
heap.push(19)
console.log(heap.pop())
console.log(heap)