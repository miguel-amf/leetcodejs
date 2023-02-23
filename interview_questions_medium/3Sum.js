/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*NOT PASSING, GOING 308~312 OUT OF 313 TEST CASES, TIMEOUT.*/
/*since it was not my original idea, i was trying not to use the idea of two loops: first iterate i and second iterate between j and k, according to the result of the sum*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var output = [];
    //sort the array
    //since we have three while in loop, we are seeing something between n^2 and n^3. So adding a nlogn sort will not hurt in the grand scheme, and help out a lot.
    //originally it was a three loops going to nums.length, but it was hitting TLE. so some adjustments were made like inverting the third loop direction.
    nums.sort((a, b) => a - b);
    var i = 0;
    while (i < nums.length-2) {
        //skip repeating numbers
        if (i > 0 && nums[i] == nums[i - 1]) {
            i++;
            //adding continue so it doesnt get in an infinite loop
            continue;
        }
        var j = i + 1;
        while (j < nums.length-1) {
            var k = nums.length - 1;
            while (k > j) {
                //skip repeating numbers
                if (k < nums.length && nums[k] == nums[k + 1]) {
                    k--;
                    continue;
                }
                //check if the sum equals zero
                if((nums[i] + nums[j] + nums[k]) === 0) {
                    //check if triplet is already in output
                    var foundEqual = 0;
                    var l = 0;
                    //goes though output
                    while (l < output.length) {
                        //since nums is sorted, the triplets will also be sorted, no need to check for permutations
                        if(nums[i] < output[l][0]) break;
                        if(nums[i] == output[l][0] && nums[j] == output[l][1] && nums[k] == output[l][2]) {
                            foundEqual = 1;
                            break;
                        }
                        l++;
                    }
                    if (foundEqual === 0) {
                        output.push([nums[i],nums[j],nums[k]]);
                    }
                //since we found a triplet and k is an inverted cursor, from now on we will either find
                //duplicates or sums smaller than 0, so breaking now will help with optimization
                break;
                }
            k--;
            }
        j++;
        }
    i++;
    }
    return output;
};