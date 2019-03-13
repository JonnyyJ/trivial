/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const mergeIntervals = function(intervals){
    if(intervals === null || intervals.length <= 1 ) return intervals
    const starts = [], ends = [], res = []
    for(let interval of intervals){
      let[s,e] = interval
      starts.push(s)
      ends.push(e)
    }
    starts.sort((a,b)=> a-b)
    ends.sort((a,b)=> a-b)
    var s = 0, e = 0, curS = starts[s]
    while(s < starts.length){
      while(starts[s] <= ends[e] && s < starts.length) ++s
      while(ends[e] < starts[s]) e++
      res.push([curS,ends[e-1]])
      curS = starts[s]
    }
    res[res.length-1][1] = ends[ends.length-1]
    return res
  }