function stringSearch(long, short) {
  // Initialize a counter to keep track of the number of occurrences
  let count = 0

  // Iterate through possible starting positions in long
  for (let i = 0; i <= long.length - short.length; i++) {
    // Assume a match is found until proven otherwise
    let match = true

    // Inner loop to check for matching characters in long and short
    for (let j = 0; j < short.length; j++) {
      // Compare characters at the corresponding positions
      if (long[i + j] !== short[j]) {
        // If characters don't match, set match to false and break out of the inner loop
        match = false
        break
      }
    }

    // If match is still true, it means the entire substring short was found in long
    if (match) {
      // Increment the counter
      count++
    }
  }

  // Return the final count of occurrences
  return count
}

// Example usage
console.log(stringSearch('I love Django', 'go'))
