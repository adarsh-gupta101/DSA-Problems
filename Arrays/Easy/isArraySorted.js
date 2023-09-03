// function isSorted(arr) {
//   let sorted = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       sorted = false;
//     }
//   }
//   return sorted;
// }

function isSorted(arr) {
  let sorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      sorted = false;
    }
  }
  return sorted;
}

isSorted([5, 12, 15, 20, 12]);
