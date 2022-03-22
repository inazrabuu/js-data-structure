const numbers = [99, 44, 55, 3, 4, 8, 9, 180, 0, 32, 564]

function quickSort(array, left, right) {
  const len = array.length
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    quickSort(array, left, partitionIndex- 1)
    quickSort(array, partitionIndex + 1, right)
  }

  return array
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]
  let partitionIndex = left

  for (i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }

  swap(array, right, partitionIndex)
  return partitionIndex
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

console.log(quickSort(numbers, 0, numbers.length - 1))