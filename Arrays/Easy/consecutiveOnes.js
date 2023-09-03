function consecutiveOnes(nums) {
  let count = 0;
  let maxCount = 0;

  for (end = 0; end < nums.length; end++) {
    if (nums[end] === 1) {
      count++;
      //   console.log(count,"-");
    } else {
      // console.log(count,maxCount)
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return maxCount + 1;
}
console.log(consecutiveOnes([1, 1, 0, 1, 1, 1]));
