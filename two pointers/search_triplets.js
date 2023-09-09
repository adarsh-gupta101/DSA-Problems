// Given an arr of unsorted numbers, find all unique triplets in it that add up to zero.

// Given an arr of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  triplets = [];

  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    searchPair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function searchPair(arr, target, left, triplets) {
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum == target) {
      triplets.push([-target, arr[left], arr[right]]);

      left++;
      right--;
    //   while (left < right && arr[left] === arr[left - 1]) {
    //     left++;
    //   }
    //   while (left < right && arr[right] === arr[right + 1]) {
    //     right--;
    //   }
    } else if (target > currentSum) left++;
    else right--;
  }
}

console.log(search_triplets([-3, -3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));
