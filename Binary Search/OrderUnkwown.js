function BinarySearch(arr, num) {
  // ascending or descending

  let low = 0;
  let high = arr.length - 1;

  // recursive
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

console.log(
  BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 12)
);

// Binary Search Recursive

function BinarySearchRecursive(arr, num, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] < num) {
    return BinarySearchRecursive(arr, num, mid + 1, high);
  } else {
    return BinarySearchRecursive(arr, num, low, mid - 1);
  }
}

console.log(BinarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12, 0, 9));
