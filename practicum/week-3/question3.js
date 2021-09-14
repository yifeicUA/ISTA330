/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if (n === 0){
    return [];
  } 
  if (n === 1){
    return [[1]];
  } 
  let result = [];
  for (let i = 1; i <= n; i++) {
      let line = [];
      for (let j = 0; j < i; j++) {
          if (j === 0 || j === i - 1) {
            line.push(1);
          } else {
            line.push((result[i-2][j-1] + result[i-2][j]));
          }
      }
      result.push(line);
  }
  return result;
};