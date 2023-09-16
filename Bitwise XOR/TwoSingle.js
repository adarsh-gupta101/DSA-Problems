// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. Find the two numbers that appear only once.

//

function find_single_number(arr) {
  let num1 = 0;
  let num2 = 0;
  let n = 0;
  for (i = 0; i < arr.length; i++) {
    n ^= arr[i];
  }
  let rightmost = 1;
  while ((rightmost & n) === 0) {
    rightmost = rightmost << 1;
  }
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] & rightmost) === 0) {
      num1 ^= arr[i];
    } else {
      num2 ^= arr[i];
    }
  }
  return [num1, num2];
}
