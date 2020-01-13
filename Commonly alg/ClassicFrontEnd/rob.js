var rob = function(nums) {
    var len = nums.length;
    if(len < 2) return nums[len - 1]? nums[len - 1] : 0;
    var res = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < len; i++){
        res[i] = Math.max(res[i - 1], nums[i] + res[i - 2])
    }
    return res[len - 1]
}