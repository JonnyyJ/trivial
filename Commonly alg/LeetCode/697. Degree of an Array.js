/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var degree = 0;
    var listOfModes = {};
    
    for(var i=0;i<nums.length;i++) {        
        var count = listOfModes[nums[i]] === undefined ? 1 : listOfModes[nums[i]].count + 1;
        
        // as we go, keep track of the first & last index of this #, as well as the count
        listOfModes[nums[i]] = {
            minIndex: listOfModes[nums[i]] === undefined ? i : listOfModes[nums[i]].minIndex,
            maxIndex: i,
            count
        };
        degree = Math.max(degree, count);                      
    }

    //now find the minimum difference between the min and max index of the modes
    var minLength = Infinity;
    Object.keys(listOfModes).filter((key) => listOfModes[key].count === degree).forEach((key)=> {
        minLength = Math.min(minLength, listOfModes[key].maxIndex - listOfModes[key].minIndex + 1);
    })
    
    return minLength;
};