const { kidsWithCandies } = require('./candies');

describe('Kids With the Greatest Number of Candies', () => {
    it('Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has. For each kid, check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.', () => {

        // Explanation: 
        // Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
        // Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
        // Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
        // Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
        // Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
        const expected1 = [true, true, true, false, true];
        const actual1 = shuffle([2, 3, 5, 1, 3], 3);

        expect(actual1).toEqual(expected1);

        // Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
        const expected2 = [true, false, false, false, false];
        const actual2 = shuffle([4, 2, 1, 1, 2], 1);

        expect(actual2).toEqual(expected2);

        const expected3 = [true, false, true];
        const actual3 = shuffle([12, 1, 12], 10);

        expect(actual3).toEqual(expected3);
    });
});
