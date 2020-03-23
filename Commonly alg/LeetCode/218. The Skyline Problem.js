/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    if (buildings.length === 0) return [];
    const points = [];
    for (let b of buildings) {
        points.push(b[0]);
        points.push(b[1]);
    }
    points.sort((a,b)=> a-b);
    const segments = [];
    for (let i=1;i<points.length;i++) {
        let start = points[i-1];
        let end = points[i];
        if (start === end) continue;
        segments.push({start, end, height:0});
    }
    
    const copy = segments.slice();
    
    let l = segments.length;
    while (l > 1) {
        for (let i=0;i<l-1;i+=2) {
            const node = {
                start: segments[i].start,
                end: segments[i+1].end,
                height: 0
            };
            node.left = segments[i];
            node.right = segments[i+1];
            segments[~~(i/2)] = node;
        }
        if (l % 2 == 1) {
            segments[~~(l/2)] = segments[l-1];
        }
        l = ~~(l/2) + (l % 2);
    }
    for (let [start, end, height] of buildings) {
        update(segments[0], start, end, height);
    }
    
    function update(node, s, e, h) {
        const {start, end, height, left, right} = node;
        if (left == null && right == null) {
            node.height = Math.max(height, h);
        } else {
            const m = left.end;
            if (e <= m) {
                update(left, s, e, h);
            } else if (s >= m) {
                update(right, s, e, h);
            } else {
                update(left, s, m, h);
                update(right, m, e, h);
            }
        }
    }
    const ret = [];
    for (let n of copy) {
        if (ret.length && ret[ret.length-1][1] === n.height) continue;
        ret.push([n.start, n.height]);
    }
    ret.push([points[points.length -1], 0])
    return ret;
};