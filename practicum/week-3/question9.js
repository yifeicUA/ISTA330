/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let numM = new Map();
    let largest = 1, largestS = 0;
    for(let i = 1; i <= n; i++){
        let sum = summer(i);
        curr = numM.get(sum)+1 || 1;
        numM.set(sum, curr);
        if(curr === largest){
            largestS++;
        }
        else if(curr > largest){
            largestS = 1;
        }
        largest = Math.max(largest, curr);
    }
    return largestS;
};

function summer(num){
    let sum = 0;
    while(num){
        sum += num%10;
        num = Math.trunc(num / 10);
    }
    return sum;
}