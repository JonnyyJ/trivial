//basic method
function bubbleSort(arr){
   for (let i = arr.length - 1; i > 0; i--){
     for (let j = 0; j < i ; j++){
         if (arr[j] > arr[j + 1]){
             swap(arr, j, j + 1);
         }
     }
   }
   return arr;
}
// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort(arr));

//cache pos
/*
set a lconic variable pos for recording 
the last swaping position in each sorting.
As the record behind the position of pos has been swapped, 
therefor, as long as the next position is sorted, 
it is only to scan to the pos position
*/

function bubbleSort2(arr){
    let i = arr.length - 1;

    while (i > 0){
        let pos = 0;
        for(let j = 0; j < i ;j++){
            if(arr[j] > arr[j + 1]){
                pos = j;
                swap (arr, j, j +1);
            }
    }

   i = pos;
    }
    return arr;
}
// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort2(arr));

//for bubble sort, can u pass the second parameter(function) to control the ascending and descending
function bubbleSort(arr, compareFunc){
    for(let i = arr.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if(compareFunc(arr[j], arr[j + 1]) > 0){
                swap(arr, i, j+1);
            }
        }
    }
    return arr;
}
// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort(arr, (a, b) => a - b));
console.log(bubbleSort(arr, (a, b) => b - a));

