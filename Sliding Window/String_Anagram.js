// String Anagrams (hard) #
// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

function find_permutation(str, pattern) {
    let windowStart = 0;
    let matched = 0;
    let charFrequency = {};
  
    const resultIndices = [];
  //add all the characters in the pattern to the hashmap
    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      if (!(char in charFrequency)) {
        charFrequency[char] = 0;
      }
      charFrequency[char] += 1;
    }
  
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      //decrement the frequency of the matched character
      if (rightChar in charFrequency) {
        charFrequency[rightChar] -= 1;
        //if the frequency of the matched character becomes zero, we got a complete match
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  //if all the characters are matched, push the index to the result array
      if (matched === Object.keys(charFrequency).length) {
      //   return true;
      resultIndices.push(windowStart);
      }
//  shrink the window by one character
      if (windowEnd >= pattern.length - 1) {
        const leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
  
    return resultIndices;
  }
  
  find_permutation("ppqp","pq");
  