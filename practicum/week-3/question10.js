/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    let diff = Number.POSITIVE_INFINITY;
    let newM = new Array();
    for (let i=0; i<input.length-1; i++){
        for (let j=i+1; j<input.length; j++){
            if (Math.abs((input[i] - input[j]) )< diff){
                diff = Math.abs((input[i] - input[j]));
                newM = new Array();
                newM.push([input[i],input[j]].sort());
            }
            else if(Math.abs((input[i] - input[j]) ) == diff){
                newM.push([input[i],input[j]].sort());
            }
        }
    }
    return newM;
};