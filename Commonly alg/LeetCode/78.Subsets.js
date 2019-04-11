/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
    const arr = [];
  _subsets(arr, [], nums.sort(), 0);
  return arr;
}
const _subsets = (arr, tempArr, nums, start) => {
    arr.push(tempArr.slice());
  for (let i = start; i < nums.length; i++) {
      tempArr.push(nums[i]);
    _subsets(arr, tempArr, nums, i + 1);
    tempArr.pop();
  }
}