const numbers = [99, 44, 55, 3, 4, 8, 9, 180, 0, 32, 564]

function selectionSort(array) {
  for (i = 0; i < array.length; i++) {
    let smallestIndex = i
    let temp = array[i]
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex])
        smallestIndex = j
    }

    array[i] = array[smallestIndex]
    array[smallestIndex] = temp
  }

  return array
}

console.log(selectionSort(numbers))