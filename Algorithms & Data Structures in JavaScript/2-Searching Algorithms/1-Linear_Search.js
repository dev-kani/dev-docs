function linerSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}


console.log(linerSearch([3, 4, 9, 5, 6], 4))
console.log(linerSearch('Apple', 'e'))