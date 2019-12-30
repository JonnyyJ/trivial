var arrayNesting = function(nums) {
    let result = 0, set = new Set()
    for(let i = 0; i < nums.length; i++) {
        let j = i, count = 0
        while(!set.has(nums[j])){
            set.add(nums[j])
            j = nums[j]
            count += 1
        }
        result = Math.max(result, count)
    }
    return result
};