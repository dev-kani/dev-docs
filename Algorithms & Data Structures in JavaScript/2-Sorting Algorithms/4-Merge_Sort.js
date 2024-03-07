function merge(a1, a2) {
  let a3 = []
  let i = 0
  let j = 0

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      a3.push(a1[i])
      i++
    } else {
      a3.push(a2[j])
      j++
    }
  }

  // Add remaining elements from both arrays
  while (i < a1.length) {
    a3.push(a1[i])
    i++
  }

  while (j < a2.length) {
    a3.push(a2[j])
    j++
  }

  return a3
}

console.log(merge([2, 4, 3, 5], [1, 3, 9]))
