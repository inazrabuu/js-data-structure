const numbers = [99, 44, 55, 3, 4, 8, 9, 180, 0, 32, 564]

function insertionSort(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    }
    else {
      for (j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }  
    }
  }

  return array
}

console.log(insertionSort(numbers))