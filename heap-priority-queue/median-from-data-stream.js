const MaxHeap = function() {
  this.heap = []
}

MaxHeap.prototype.size = function() {
  return this.heap.length
}

MaxHeap.prototype.getMax = function() {
  return this.heap[0]
}

MaxHeap.prototype.getParentIndex = function(index) {
  if (index === 0)
    return null

  return Math.floor((index - 1) / 2)
}

MaxHeap.prototype.getChildrenIndex = function(index) {
  const leftIndex = index * 2 + 1,
        rightIndex = leftIndex + 1

  return [leftIndex, rightIndex].map(i => i < this.size() ? i : null )
}

MaxHeap.prototype.push = function(node) {
  this.heap.push(parseInt(node))
  this.heapifyUp(this.size() - 1)
}

MaxHeap.prototype.heapifyUp = function(index) {
  const parentIndex = this.getParentIndex(index)

  if (parentIndex === null) {
    return null
  }

  let currentNode = this.heap[index],
      parentNode = this.heap[parentIndex]

  if (currentNode > parentNode) {
    this.swap(index, parentIndex)
    this.heapifyUp(parentIndex)
  }
}

MaxHeap.prototype.swap = function(index1, index2) {
  let temp = this.heap[index1]
  this.heap[index1] = this.heap[index2]
  this.heap[index2] = temp
}

MaxHeap.prototype.pop = function() {
  let node = this.heap[0],
      lastNode = this.heap.pop()

  if (this.size() > 0) {
    this.heap[0] = lastNode
    this.heapifyDown(0)
  }

  return node
}

MaxHeap.prototype.heapifyDown = function(index) {
  const [leftIndex, rightIndex] = this.getChildrenIndex(index)

  if (leftIndex === null) {
    return null
  }

  let swapIndex = null,
      parentNode = this.heap[index],
      leftNode = this.heap[leftIndex]

  if (leftNode > parentNode) {
    swapIndex = leftIndex
  }

  if (rightIndex !== null) {
    let rightNode = this.heap[rightIndex]
    
    if (rightNode > leftNode) {
      swapIndex = rightIndex
    }
  }

  if (swapIndex === null) {
    return null
  }

  this.swap(index, swapIndex)

  this.heapifyDown(swapIndex)
}

const MinHeap = function() {
  this.heap = []
}

MinHeap.prototype.size = function() {
  return this.heap.length
}

MinHeap.prototype.getMin = function() {
  return this.heap[0]
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

const MedianFinder = function() {
  // two heaps: large (minheap), small (maxheap)
  // length of two heaps are roughly same (only tolerate 1 in difference)
  this.large = new MinHeap()
  this.small = new MaxHeap()
}

MedianFinder.prototype.addNum = function(num) {
  this.small.push(num)

  // make sure every num in small is <= every num in large
  if (this.small.heap.length > 0 && this.large.heap.length > 0 
    && this.small.getMax() > this.large.getMin()) {
    let val = this.small.pop()
    this.large.push(val)
  }

  // check for uneven length (length difference is more than 1)
  if (this.small.heap.length > this.large.heap.length + 1) {
    let val = this.small.pop()
    this.large.push(val)
  }
  if (this.large.heap.length > this.small.heap.length + 1) {
    let val = this.large.pop()
    this.small.push(val)
  }
}

MedianFinder.prototype.findMedian = function() {
  if (this.small.heap.length > this.large.heap.length) {
    return this.small.getMax()
  } else if (this.small.heap.length < this.large.heap.length) {
    return this.large.getMin()
  } 

  return (this.small.getMax() + this.large.getMin()) / 2
}

// let minheap = new MinHeap()
// minheap.insert(5)
// minheap.insert(6)
// minheap.insert(4)
// minheap.insert(10)
// console.log(minheap.heap)
// console.log(minheap.remove())
// console.log(minheap.heap)
// console.log(minheap.remove())
// console.log(minheap.heap)
// console.log(minheap.remove())
// console.log(minheap.heap)

// let maxheap = new MaxHeap()
// maxheap.insert(-5)
// maxheap.insert(-3)
// maxheap.insert(-4)
// maxheap.insert(30)
// console.log(maxheap.getMax())
// console.log(maxheap.remove())
// console.log(maxheap.heap)
// console.log(maxheap.remove())
// console.log(maxheap.heap)
// console.log(maxheap.remove())
// console.log(maxheap.heap)

const medianFinder = new MedianFinder()
// medianFinder.addNum(6)    
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(10)    
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(2)    
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(6)    
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(5)
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(0)
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(6)
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(3)
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(1)
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(0)
// console.log(medianFinder.findMedian()) 
// medianFinder.addNum(0)
// console.log(medianFinder.findMedian()) 
// console.log(medianFinder)

medianFinder.addNum(1)
medianFinder.addNum(2)
medianFinder.addNum(3)
console.log(medianFinder.findMedian())
console.log(medianFinder)