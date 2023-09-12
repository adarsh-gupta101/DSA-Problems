function findMissingNumber(arr) {
  let n = arr.length;
  let sum = (n * (n + 1)) / 2;
  let res = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum - arr[i];
  }

  return sum;
}

console.log(findMissingNumber([4, 2, 3, 1])); // 2
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1])); // 7

// using cyclic sort

function findMissingNumber(arr) {
  let i = 0;
  while (i < arr.length) {
    let j = arr[i];
    if (arr[i] < arr.length && arr[i] != arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
  return arr.length;
}
