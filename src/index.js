module.exports = function longestConsecutiveLength(array) {
  //empty array
  if (array.length == 0) {
    return 0;
  }
  //return array in ascending order
  let ar = array.sort((a, b) => a - b);
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
