/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// brute force solution with O(m+n)
var findMedianSortedArraysBasic = function(nums1, nums2) {
    let first = 0;
  
    let merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b);
    if (merged.length % 2 === 0) {
      first = (merged[Math.floor(merged.length / 2 - 1)] + merged[Math.floor(merged.length / 2)]) / 2;
    } else {
      first = merged[Math.floor(merged.length / 2)];
    }
    return first;
  };


  
  // With explanation from video
  
  var findMedianSortedArrays = function(nums1, nums2) {
    //if nums1 length is greater switch them so that nums1 is smaller than nums2.
    if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
    }
  
    let x = nums1.length;
    let y = nums2.length;
  
    // we can partition starting from 0 index up to length of nums1
    let low = 0;
    let high = x;
  
    while (low <= high) {
      //defining where exactly start partitioning for nums1 and nums2
      let partitionX = parseInt((low + high) / 2);
      let partitionY = parseInt((x + y + 1) / 2 - partitionX);
      //if partitionX is 0 it means nothing is there on left side. Use -INF for maxLeftX
      //if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
  
      let maxLeftX = partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
      let minRightX = partitionX === x ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
  
      let maxLeftY = partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
      let minRightY = partitionY === y ? Number.MAX_SAFE_INTEGER : nums2[partitionY];
  
      if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
        //We have partitioned array at correct place
        // Now get max of left elements and min of right elements to get the median in case of even length combined array size
        // or get max of left for odd length combined array size.
        if ((x + y) % 2 === 0) {
          return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
        } else {
          return Math.max(maxLeftX, maxLeftY);
        }
      } else if (maxLeftX > minRightY) {
        //we are too far on right side for partitionX. Go on left side.
        high = partitionX - 1;
      } else {
        //we are too far on left side for partitionX. Go on right side.
        low = partitionX + 1;
      }
    }
  };