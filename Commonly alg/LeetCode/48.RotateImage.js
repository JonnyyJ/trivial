/**
 * given an n x n 2D matrix 
 * representing an image....

Rotate the image by 90 degrees (clockwise).
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function transpose(array = [[]]) {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < row; col++) {
        let temp = array[row][col]
        array[row][col] = array[col][row]
        array[col][row] = temp

        
      }
    }
  }
  
  function reverse(nums, start = 0, end = nums.length - 1) {
    while (start < end) {
      tmp = nums[start]
      nums[start] = nums[end]
      nums[end] = tmp
      start++
      end--
    }
    return nums
  }
  
  function rotate2dArray(arr = [[]]) {
    transpose(arr)
    arr.forEach(row => {
      reverse(row)
    })
  }
  
  var rotate = function(matrix) {
    rotate2dArray(matrix)       
  };