function LetterCasePermutation(S) {
  let result = [];
  let index = 0;
  DFS(S, result, [], index);
  return result;
}

function DFS(S, result, str, index) {
  if (index == S.length) {
    result.push(str.join(""));
    return;
  }

  let char = S[index];
  console.log(char, str);
  if (!Number.isInteger(parseInt(char))) {
    // upper
    str.push(char.toUpperCase());
    DFS(S, result, str, index + 1);
    str.pop();

    // lower
    str.push(char.toLowerCase());
    DFS(S, result, str, index + 1);
    str.pop();
  } else {
    str.push(char);
    DFS(S, result, str, index + 1);
    str.pop();
  }
}

console.log(LetterCasePermutation("a1b2"));
