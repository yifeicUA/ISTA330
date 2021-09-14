/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let maxNum = 0;
    let maxtimes = 0;
    for (let i = 0; i < input.length; i++) {
        let num = 0;
        for (let j = 0; j < input.length; j++) {
            if(input[i]==input[j]){
                num++;
            }
        }
        if(num>maxtimes){
            maxNum = input[i];
            maxtimes=num;
        }
        num = 0;
    }
    if(maxtimes<=1){
        return -1;
    }
    return maxNum;
};