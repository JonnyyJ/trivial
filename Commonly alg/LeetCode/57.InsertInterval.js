/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    let index;
    if(intervals.length === 0) return new Array(newInterval);
    
    for(let i = intervals.length - 1; i >= 0; i --){
        if(intervals[i].start <= newInterval.start){
            intervals.splice(i + 1, 0, newInterval);
            index = i + 1;
            break;
        } 
        else if(i === 0){
            intervals.unshift(newInterval);
            index = 0;
            break;
        }
    }

    while(true){
        if(index > 0 && intervals[index].start <= intervals[index - 1].end){
            intervals[index - 1].end = Math.max(intervals[index].end, intervals[index - 1].end);
            intervals.splice(index, 1);
            index --;
        }
        if(index < intervals.length - 1 && intervals[index].end >= intervals[index + 1].start){
            intervals[index].end = Math.max(intervals[index].end, intervals[index + 1].end);
            intervals.splice(index + 1, 1);
        }
        else break;
    }
    
    return intervals;
};