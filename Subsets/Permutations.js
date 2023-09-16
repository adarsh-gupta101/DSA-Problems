function Permutations(nums) {
  let result = [];

  DFS(0, nums, result);

  return result;
}

function DFS(i, nums, result) {
  if (i === nums.length) {
    result.push(nums.slice());
    return;
  }
  for (j = 0; j < nums.length; j++) {
    [nums[j], nums[i]] = [nums[i], nums[j]];
    console.log(nums, i, j);
    DFS(i + 1, nums, result);
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }
}

Permutations([1, 2, 3]);
