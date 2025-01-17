
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
        var curr = 0, maxv = 0;
        for(var i = 0; i < input.length; i++){  
                curr = Math.max(0, curr + input[i]);
                maxv = Math.max(curr, maxv);
        }
        return maxv;
 };
