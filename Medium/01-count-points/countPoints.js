//link: https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/

// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

// For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

// Return an array answer, where answer[j] is the answer to the jth query.

function countPoints(points, queries) {
  //iterate through all the points
  //set a count array with same length of queries
  //for each point check to see if it falls into each querie
  //if it does add 1 to count array for that specific query index
  //return the count array

}

module.exports = {
  countPoints
};