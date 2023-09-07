function length_of_longest_substring(arr, k) {
    let windowStart = 0;
    let maxLength = 0;
    let maxOnesCount = 0;
  
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 1) {
        maxOnesCount += 1;
      }
  
      if (windowEnd - windowStart + 1 - maxOnesCount > k) {
        if (arr[windowStart] == 1) {
          maxOnesCount--;
        }
        windowStart++;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2);
  