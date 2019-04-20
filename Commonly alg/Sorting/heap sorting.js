function heapSort(arr){
    let size = arr.length;

    //initialize heap, i adapte from the last parent node until all the nodes are sorted
    for (let i = Math.floor(size /2) - 1; i >= 0; i --){
        heapify(arr, i, size);
    }
    //heap sort: swap the first element with the element which is in front of the sorted one, then readjust until sorted
    for ( let i =size - 1; i > 0; i --){
        swap(arr, 0, i);
        size -= 1;
        heapify(arr, 0, size);
    }
    return arr;
}
function heapify(arr, index, size){
    let largest = index;
    let left = 2 * index +1;
    let right = 2 * index +2;

    if(left < size && arr[left] > arr[largest]){
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]){
        largest = right;
    }
    if(largest !== index){
        swap(arr, index, largest);
        heapify(arr, largest, size);
    }
}

//test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 25];
console.log(heapSort(arr));

function swap(arr, indexA, indexB){
    [arr[indexA], arr[indexB] = [arr[indexB], arr[indexA]]];
}