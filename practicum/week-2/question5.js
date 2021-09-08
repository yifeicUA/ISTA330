/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
    let nonnegative = n;
    let operations = 0;
    //while(((nonnegative/4)%1)===0){
    //while(isInteger(nonnegative)){
    while((nonnegative%4)===0){
        operations++;
        nonnegative = nonnegative/4;
    }
    while((nonnegative%3)===0){
        operations++;
        nonnegative = nonnegative/3;
    }
    while(nonnegative!=0){
        operations++;
        nonnegative--;
    }
    return operations;
};

/*
function isInteger(obj) {
    return typeof obj === 'number' && obj % 1 === 0
}
*/