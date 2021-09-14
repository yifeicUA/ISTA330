/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    let sortedarray = Array(input);
    sortedarray.sort(function(a,b){
        return a-b;
    })
    if(sortedarray ==input ){
        return true;
    }
    sortedarray.sort(function(a,b){
        return b-a;
    })
    if(sortedarray ==input ){
        return true;
    }
    return false;
};

console.log('hi');