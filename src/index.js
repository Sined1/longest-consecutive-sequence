module.exports = function longestConsecutiveLength(array) {
  //compare numbers
  function compareNum(a, b) {
    return a - b;
  }
  //one value
  if (array.length == 1) {
    return 1;
  }
  //empty array
  if (array.length == 0) {
    return 0;
  }
  //return array in ascending order
  let ar = array.sort(compareNum);
  
  let sum = 0, max = 0;
  for (let i = 0; i < ar.length-1; i++) {
    if (Math.abs(ar[i]-ar[i+1]) == 1) {
      sum++;
    } else if (sum > max) {
      max = sum;
      sum = 0;
    } else {
      sum = 0;
    }
  }
  return max + 1;
}
