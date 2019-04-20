fuction quickSort(arr){
    let left = 0,
    right = arr.length - 1;
    main(arr, left, right);
    return arr;
    function main(arr, left, right){
        //set the condition of recursive
        if(arr.length ===1){
            return;
        }
        //get left pointer to prepare for next round of decompose
        let index = partition(arr, left, right);
        if(left<index - 1){
            //continue to decompose the right array
            main(arr, left, index-1);
        }
        if(index<right){
            //decompose right array
            main(arr, index, right);
        }
    }
    //the array decomposing function
    function partition(arr, left, right){
        //make the middle term as pivot
        let pivot = arr[Math.floor((left+right)/2)];
        //recursive until left>right
        while(left<=right){
            //continue right shifting the left pointer until it's value is not less than pivot
            //if left still not more than right
            if(left <= right){
                //swap the value of both so that the value no greater than the pivot is on the left side, not less than the value of pivot on its right
                [arr[left], arr[right]] = [arr[right]], arr[left];
                //move the left pointer to the right and the right pointer to the left to prepare to start the next round, preventing the arr[left] and arr[right] from being equal to pivot and then causing an infinite loop
                left ++;
                right--;
            }
        }
        //return the left pointer as basis for the next round of decomposition
        return left;

    }
}