/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    for (let i = 0; i < input.length; i++) {
        let num = 0;
        for (let j = 0; j < input.length; j++) {
            if(input[i]==input[j]){
                num++;
            }
        }
        if(num==input[i]){
            return num;
        }
        num = 0;
    }
    return -1;
};