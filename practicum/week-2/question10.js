/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let maxnum = n%10;
    let minnum = n%10;
    while(n>=10){
        if(n%10 > maxnum){
            maxnum = n%10;
        }
        if(n%10 < minnum){
            minnum = n%10;
        }
        n = parseInt(n/10);
    }
    if(n > maxnum){
        maxnum = n;
    }
    if(n < minnum){
        minnum = n;
    }
    return maxnum - minnum;
};