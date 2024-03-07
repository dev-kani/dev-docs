function bubbleSort(arr) {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    // Flag to optimize the algorithm by checking if any swaps were made
    let swapped = false

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }

    // If no swaps were made, the array is already sorted, and we can break out of the loop
    if (!swapped) {
      break
    }
  }

  return arr
}

console.log(bubbleSort([8, 4, 2, 6, 1, 3]))
