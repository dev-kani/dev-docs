function binarySearch(arr, val) {
  // Initialize pointers for the search range
  let left = 0
  let right = arr.length - 1

  // Continue searching as long as the search range is valid
  while (left <= right) {
    // Calculate the middle index of the current search range
    const mid = Math.floor((left + right) / 2)

    // Check if the middle element is the target value
    if (arr[mid] === val) {
      return mid // Return the index where the value is found
    } else if (arr[mid] < val) {
      left = mid + 1 // If the value is greater, search in the right half
    } else {
      right = mid - 1 // If the value is smaller, search in the left half
    }
  }

  // If the value is not found, return -1
  return -1
}

// Example usage:
console.log(`Index: ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)}`)
