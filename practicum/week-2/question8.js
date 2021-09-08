/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    let sumarray = new Array(input.length) 
    for (var i = 0; i < input.length; i++) {
        let targetnum = 0;
        for (var j = 0; j < input.length; j++) {
            if ((input[j]>input[j])&&((input[j]%2 === 0))){
                targetnum+=1;
            }
        }
        sumarray[i]=targetnum;
    }
};