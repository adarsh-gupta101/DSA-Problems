var searchRange = function (nums = [5, 7, 7, 8, 8, 10], target = 8) {
    left = binary(nums, target, true);
    right = binary(nums, target, false);
  
    return [left, right];
  
    function binary(nums, target, leftbias) {
      lefts = 0;
      rights = nums.length - 1;
      let i = -1;
  
      while (lefts <= rights) {
       let mid = Math.floor((lefts + rights) / 2);
        console.log(mid, "mid");
  
        if (target > nums[mid]) {
          lefts = mid + 1;
        } else if (target < nums[mid]) {
          rights = mid - 1;
        } else {
          i = mid;
           if(leftbias) rights = mid - 1;
           else  lefts = mid + 1;
          
        }
      }
      return i;
    }
  };