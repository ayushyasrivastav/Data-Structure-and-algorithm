function insertionSort(arr) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    //while (key < arr[j] && j >= 0) {
    for (j; j >= 0 && key < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
}
//         0  1  2  3  4  5
var arr = [9, 1, 7, 4, 3, 5];

document.write(insertionSort(arr));

console.log(insertionSort(arr));
//Second way to do it
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (key < arr[j] && j >= 0) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// var arr = [9, 5];

// document.write(insertionSort(arr));

// console.log(insertionSort(arr));
