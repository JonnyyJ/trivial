var maxSubArray = function(nums){
    var max = nums[0];
    var sum = 0
    for(let num of nums){
        if (sum < 0){
            sum = 0
        }
        sum += num;
        max = Math.max(sum, max)
    }
    return max
}