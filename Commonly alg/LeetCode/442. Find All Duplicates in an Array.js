/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
	let result = [];
	let len = nums.length;
	let obj = {};
	for (let i = 0; i < len; i++) {
		let num = nums[i];
		if (num in obj) {
			result.push(num);
		}
		obj[num] = num;
	}
	return result;
};