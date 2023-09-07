function pair_with_target_sum(arr, targetsum) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const currentsum = arr[left] + arr[right];
    if (currentsum === targetsum) {
      return [left, right];
    }
    if (targetSum > currentsum) {
      left++; // we need a pair with a bigger sum
      // we need a pair with a smaller sum
    } else {
      right--;
    }
  }
  return [-1, -1];
}


// with has table
function pair_with_target_sum_with_hashtable(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (targetSum - num in nums) {
        return [nums[targetSum - num], i];
        }
        nums[arr[i]] = i; // save the number and its index
    }
    return [-1, -1];






}