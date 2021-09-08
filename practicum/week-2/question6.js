/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    let sortedarray = input;
    sortedarray.sort(function(a,b){
        return a-b;
    })
    if(sortedarray.length % 2){
        return sortedarray[parseInt(sortedarray.length/2)];
    }else{
        return (sortedarray[parseInt(sortedarray.length/2)]+sortedarray[parseInt(sortedarray.length/2)-1])/2;
    }
};