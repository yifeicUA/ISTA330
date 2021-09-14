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
    let maxnum = 0;
    for (let i = 0; i < n; i++) {
        if(i<10){
            if(maxnum<n){
                maxnum = n;
            }
        }else{
            let sum = 0;
            let curr = i;
            while(curr){
                sum += curr%10;
                curr /= 10;
            }
            if(maxnum<sum){
                maxnum = sum;
            }
        }
        
    }
    return maxnum;
};
