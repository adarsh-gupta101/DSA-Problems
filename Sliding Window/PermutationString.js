// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters it will have 
// �
// !
// n! permutations

function find_permutation(str, pattern) {
    let windowStart = 0;
    let matched = 0;
    let charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        if (!(char in charFrequency)) {
            charFrequency[char] = 0;
        }
        charFrequency[char] += 1;
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
       
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) {
            return true;
        }

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

    return false;

}
