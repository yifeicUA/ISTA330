/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    let intersection = 0;
    let string1 = A.toLowerCase();
    let string2 = B.toLowerCase();
    for (var i = 0; i < string1.length; i++) {
        for (var j = 0; j < string2.length; j++) {
            if (string1[i]==string2[j]){
                intersection++;
                break;
            }
        }
    }
    return intersection;
};