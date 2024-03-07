// Function to build the Longest Prefix Suffix (LPS) array for the pattern
function buildLPSArray(pattern) {
  let lps = Array(pattern.length).fill(0)  // Initialize the LPS array with zeros
  let len = 0  // Length of the previous longest prefix suffix
  let i = 1   // Current index in the pattern

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len !== 0) {
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }

  return lps
}

// Function to perform string search using the KMP algorithm
function stringSearchKMP(text, pattern) {
  let n = text.length
  let m = pattern.length
  let lps = buildLPSArray(pattern)  // Preprocess the pattern to build the LPS array
  let i = 0   // Index for the text
  let j = 0   // Index for the pattern
  let count = 0  // Counter for the number of occurrences

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++
      j++
    }

    if (j === m) {
      // Pattern found at position i - j
      count++
      j = lps[j - 1]  // Continue searching for the next occurrence
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        // Adjust the pattern index based on the LPS array
        j = lps[j - 1]
      } else {
        i++  // Move to the next character in the text
      }
    }
  }

  return count
}

// Example usage
console.log(stringSearchKMP('I love Django', 'go'))
