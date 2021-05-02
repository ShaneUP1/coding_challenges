//link: https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/

// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

// For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

// Return an array answer, where answer[j] is the answer to the jth query.

function countPoints(points, queries) {
  //iterate through the queries
    
    return queries.map((query) => {  
        //iterate through the points
        const pointResults = points.map(point => {
        
            //(x-h)^2 + (y-k)^2 = r^2
            const derivedRadius = Math.sqrt((point[0] - query[0]) ** 2 + (point[1] - query[1]) ** 2);
            console.log(derivedRadius);

            //we need to check that the point given returns a value equal to or smaller than the radius(r)
            if (derivedRadius <= query[2]) {
                return +1;
            }
            return 0;
        });
        //sum up the point results for each query
        return pointResults.reduce((accumulator, current) => {
            return accumulator += current;
        }, 0);
    });
}

module.exports = {
    countPoints
};