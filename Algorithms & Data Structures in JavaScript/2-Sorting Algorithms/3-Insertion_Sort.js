function insertionSort(arr) {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    // Store the current element to be compared
    const currentElement = arr[i]

    // Find the correct position for the current element in the sorted part of the array
    let j = i - 1
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }

    // Insert the current element in its correct position
    arr[j + 1] = currentElement
  }

  return arr
}

console.log(insertionSort([8, 4, 2, 6, 1, 3]))
