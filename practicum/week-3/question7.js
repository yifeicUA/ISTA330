/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    if(M.length==0){
        return [];
    }
    let newM = new Array(M[0].length);
    for (let i = 1; i <= newM.length; i++) {
        newM[i]=new Array(M.length);
    }
    for (let i = 1; i <= M.length; i++) {
        for (let j = 0; j <= M[i].length; j++) {
            newM[j][i]=M[i][j];
        }
    }
    return newM;
};