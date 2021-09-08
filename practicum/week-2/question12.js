/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/
/*
*OLD SOLUTION
 let numcount = 0;
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if(input[i] == "a"){
      numcount++;
    }else{
      numcount--;
    }
    if(numcount == 0){
      result++;
    }
  }
*  return result
*/
/*
*OLD SOLUTION2
 let numcount = 0;
  let result = 0;
  const maxnum = Array(input.length);
  for (let i = 0; i < input.length; i++) {
    numcount = 0;
    for (let j = i; j < input.length; j++) {
      if(input[j] == "a"){
        numcount++;
      }else{
        numcount--;
      }
      if(j-i >0 && numcount == 0){
        result++;
      }
    }
    maxnum.push(result);
  }
  return Math.max(...maxnum);
*/

var maxBalanceNumber = function(input) {
  let numcount = 0;
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if(input[i] == "a"){
      numcount++;
    }else{
      numcount--;
    }
    if(numcount == 0){
      result++;
    }
  }
  return result
};