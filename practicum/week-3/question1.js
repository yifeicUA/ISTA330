/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   const largestv = Math.max(...input);
   for(var i=0; i<input.length; i++){
        if(input[i]!=largestv){
                if(input[i]*2 > largestv){
                        return false;
                }
        }
    }
    return true;
};