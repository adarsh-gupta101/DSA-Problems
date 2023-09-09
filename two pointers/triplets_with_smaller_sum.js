// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

function triplets_with_smaller_sum(arr, k) {
  arr.sort((a, b) => {
    return a - b;
  });
  const triplets = [];

  for (i = 0; i < arr.length; i++) {
    console.log("hi");

    searchPairs(arr, k - arr[i], i, triplets);
  }

  return triplets;
}

function searchPairs(arr, target, first, triplets) {
  console.log("hi");
  let left = first + 1,
    right = arr.length - 1;
  console.log(first, right);
  while (left < right) {
    if (target > arr[left] + arr[right]) {
      triplets.push([arr[first], arr[left], arr[right]]);

      left++;
      right--;
    } else {
      right--;
    }
  }
}

console.log(triplets_with_smaller_sum([2, 3, 4, 1, 3], 8));
