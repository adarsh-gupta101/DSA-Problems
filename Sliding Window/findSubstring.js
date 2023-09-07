// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

function find_substring(str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let minLength = str.length + 1;
  let subStrStart = 0;
  let charFrequency = {};

  // add all the characters in the pattern to the hashmap

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char] += 1;
  }

  // try to extend the range [windowStart, windowEnd]

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) {
        // count every matching of a character
        matched += 1;
      }
    }

    // shrink the window if we can, finish as soon as we remove a matched character

    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        subStrStart = windowStart;
      }

      const leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        // note that we could have redundant matching characters, therefore we'll decrement the matched count only when a useful occurrence of a matched character is going out of the window
        if (charFrequency[leftChar] == 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  if (minLength > str.length) {
    return "";
  }
  return str.substring(subStrStart, subStrStart + minLength);
}
