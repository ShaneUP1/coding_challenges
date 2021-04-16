//link: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

function nearestValidPoint(x, y, points) {
  //iterate through the points arrays
  //1. for each subarray of points verify that it shares either the same x or y coordinate
  //2. compute the Manhattan distance of the points
  //3. if the distance is the smallest found, record it and the index (if it's a tie for shortest distance, keep original and toss out latest)
  //repeat steps 1-3 for each of the subarrays
  //return the index with the smallest distance
  //return '-1' if there are no valid points
}

module.exports = {
    nearestValidPoint
};