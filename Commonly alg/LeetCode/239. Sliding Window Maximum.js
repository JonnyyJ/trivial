var maxSlidingWindow = function(nums, k) {
    const result = [];
    const temp = nums.slice(0, k);
    if (k === 0) {
        return result;
    }
    for (let i = 0; i < nums.length - k + 1; i += 1) {
        result.push(Math.max.apply(Math, temp));
        temp.shift();
        temp.push(nums[k + i]);
    }
    return result;
};