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

//no extras space used
var findDuplicates = function(nums) {
    const res = [];
    for (const num of nums) {
        const absNum = Math.abs(num);
        if (nums[absNum - 1] < 0) {
            res.push(absNum);
        } else {
            nums[absNum - 1] = -1 * nums[absNum - 1];
        }
    }

    return res;
};