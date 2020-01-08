var twoSum = function(nums, target){
    let len = nums.length;
    for(i = 0; i < len; i++){
        for(j = i + 1; j < len; j++){
            if(num[i] + num[j] == target){
                 return [i, j]
            }
        }
    }
    return []
}