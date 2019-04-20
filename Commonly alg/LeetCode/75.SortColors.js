/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (arr, sortedColors = 0, sortedIndex = 0, colorQuantity = 2) => {
    let len = arr.length;
    let partitionIndex = len - sortedIndex;
    let count = 0;
    let i;
    
    if (len <= 1) return;
    if (sortedColors > colorQuantity) return; 
    
    for (i = 0; i < partitionIndex; i++) {
        if (arr[i] !== sortedColors) {
          arr[count++] = arr[i];
        }
    }
          
    while (count < partitionIndex) {
        arr[count++] = sortedColors;
    }
      
    return sortColors(arr, sortedColors + 1, len - count);
    
  }