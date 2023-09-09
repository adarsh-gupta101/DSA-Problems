// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

function makeSquares(arr) {
  let n = arr.length;
  let newArray = new Array(n).fill(0);
  let highestIndex = n - 1;
  let left = 0,
    right = n - 1;

  while (left < right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      newArray[highestIndex] = leftSquare;
      left++;
    } else {
      newArray[highestIndex] = rightSquare;
      right--;
    }

    highestIndex--;
  }
  return newArray;
}

console.log(`Squares: ${makeSquares([-2, -1, 0, 2, 3])}`);
