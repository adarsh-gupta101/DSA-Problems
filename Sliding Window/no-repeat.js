// Given a string, find the length of the longest substring which has no repeating characters.

function non_repeating(str) {
  let windowStart = 0;
  let maxLength = 0;
  let charIndex = {};

  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charIndex) {
      windowStart = Math.max(windowStart, charIndex[rightChar] + 1);
    }
    charIndex[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(non_repeating("aabccbb"));
