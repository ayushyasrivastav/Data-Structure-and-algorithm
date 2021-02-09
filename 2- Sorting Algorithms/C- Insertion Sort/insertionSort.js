function selectionSort(Array) {
    // write your code in JavaScript (Node.js 8.9.4)
    for(let i = 0; i<(Array.length-1); i++){
      let minValue_index = i
      for(let j = (i+1); j<Array.length; j++){
        if(Array[minValue_index] > Array[j]){
          minValue_index = j
        }
      }
      console.log(minValue_index, Array[minValue_index], Array[i])
      let temp = Array[minValue_index]
      Array[minValue_index] = Array[i]
      Array[i] = temp
    }
  
    return Array;
  }
  
  var d = [9,5,3,2,1,77,66];
  console.log(selectionSort(d));
  