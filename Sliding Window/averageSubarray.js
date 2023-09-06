// iterative approach
function averageSubarray(array, k) {
  let result = [];
  for (let i = 0; i <= array.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
      // console.log(sum)
    }
    result.push(sum / k);
  }
  return result;
}

// \sliding window approach

function averageSubarray_Sliding(array, k) {
  let windowStart = 0;
  let sum = 0;
  let result = [];

  for (windowEnd = 0; windowEnd < array.length; windowEnd++) {
    sum = sum + array[windowEnd];

    if (windowEnd >= k - 1) {
      result.push(sum / k);
      sum = sum - array[windowStart];
      windowStart++;
    }
  }
  return result;
}

console.log(averageSubarray_Sliding([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
