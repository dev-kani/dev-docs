function selectionSort(arr) {
  let min = 0

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], arr[j])
      if (arr[j] < arr[min]) {
        min = j
      }
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }




  }

  return arr
}

console.log(selectionSort([8, 4, 2, 6, 1, 10, 3]))
