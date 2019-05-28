/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = new Map()
    for (let num of nums){
        let cur = map.get(num) || 0
        if(cur && cur === 2) {
            map.delete(num)
        }else{
            map.set(num, ++cur)
        }
    }
    return [...map][0][0]
};

