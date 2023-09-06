function moveZeros(nums) {
  let p1 = 0;

  for (p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] == 0) {
      nums[p2] = nums[p1];
      p1++;
    }
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12, 0]));
