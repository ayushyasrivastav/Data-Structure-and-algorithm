function bubbleSort(array) {
  var length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
        if(array[j] > array[j+1])
        let temp = array[j +1]
        array[j+1] = array[j]
        array[j] = temp
    }
  }
}

let initialArray = [4,7,3,1,2,88, 99,32,100]
console.log(bubbleSort(initialArray))