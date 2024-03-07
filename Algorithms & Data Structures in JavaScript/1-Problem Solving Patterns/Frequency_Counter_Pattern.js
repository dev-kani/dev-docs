function same(arr1, arr2) {
  // If the arrays have different lengths, they can't have the same frequency of values, so we return false.
  if (arr1.length != arr2.length) {
    return false
  }

  // We create two empty objects to use as frequency counters for each array.
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}

  // We loop through each value in arr1 and add it to frequencyCounter1, or increment its count if it's already in the object.
  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
  }
  // Then the object will be like this:  { 1:1, 2:1, 3:1 }

  // We do the same for arr2 and frequencyCounter2.
  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
  }

  // We loop through each key in frequencyCounter1.
  for (let key in frequencyCounter1) {
    // We check whether the square of the key is in frequencyCounter2. If it isn't, the arrays can't have the same frequency of values, so we return false.
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // We check whether the frequency of the key in frequencyCounter2 is the same as the frequency of the key in frequencyCounter1. If it isn't, the arrays can't have the same frequency of values, so we return false.
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  // If we get through all the keys without returning false, the arrays must have the same frequency of values, so we return true.
  return true
}


console.log(same([1, 2, 3], [1, 4, 9])) // true
