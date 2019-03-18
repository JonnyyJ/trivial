/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 * We have a list of points on the plane.  Find the K closest points to the origin (0, 0).
 */
var kClosest = function(points, K) {
    return points.sort((a, b) => a[0]*a[0]+a[1]*a[1] - b[0]*b[0] - b[1]*b[1]).slice(0, K);
};