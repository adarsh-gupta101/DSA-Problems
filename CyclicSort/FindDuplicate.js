findDuplicate = (nums) => {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1;
      if (nums[i] != nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        return nums[i];
      }
    } else i++;
  }
  return -1
};
