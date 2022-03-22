const numbers = [99, 44, 55, 3, 4, 8, 9, 180, 0, 32, 564]

function bubbleSort(array) {
  const length = array.length

  for (i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }

  return array
}

console.log(bubbleSort(numbers))