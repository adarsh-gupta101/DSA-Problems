// Given a string, find the length of the longest substring in it with no more than K distinct characters.

function Longest_Substring_with_K_Distinct_Characters(array, k) {
  let windowStart = 0;
  let uniqueChar = {};
  let maxLength = 0;

  for (windowEnd = 0; windowEnd < array.length; windowEnd++) {
    if (!(array[windowEnd] in uniqueChar)) {
      uniqueChar[array[windowEnd]] = 0;
    }
    uniqueChar[array[windowEnd]] = uniqueChar[array[windowEnd]] + 1;
    console.log(uniqueChar);
    while (Object.keys(uniqueChar).length > k) {
      uniqueChar[array[windowStart]] = uniqueChar[array[windowStart]] - 1;
      if (uniqueChar[array[windowStart]] === 0) {
        delete uniqueChar[array[windowStart]];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart+1);
  }
    return maxLength;
}

console.log(Longest_Substring_with_K_Distinct_Characters("araaci", 2));
