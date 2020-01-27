var singleNumber = function(nums){
    nums.sort(function(a,b){
        return a - b
    })

    var len = nums.length
    for(var i = 0; i < len; i = i + 2){
        if(nums[i] != nums[i+1]){
            return nums[i]
        }
    }
}
