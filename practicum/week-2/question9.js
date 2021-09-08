/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    let astring = input;
    let newsting = '';
    let sumarray = new Array(shuffleIndices.length);
    for (let i = 0; i < shuffleIndices.length; i++) {
        sumarray[shuffleIndices[i]] = astring[i];
    }
    for (let j = 0; j < sumarray.length; j++) {
        newsting+=sumarray[j];
    }
    return newsting;
};