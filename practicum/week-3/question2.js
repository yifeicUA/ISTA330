
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        var curr_max = 0, max_so_far = 0;
        for(var i = 0; i < input.length; i++){  
                curr_max = Math.max(0, curr_max + input[i]);
                max_so_far = Math.max(curr_max, max_so_far);
        }
        return max_so_far;
 };
