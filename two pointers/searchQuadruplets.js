// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

function searchQuadruplets(arr, target) {
    arr.sort((a, b) => a - b);
    const quadruplets = [];
  
    for (i = 0; i < arr.length - 3; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) continue;
      for (j = i + 1; j < arr.length - 2; j++) {
        if (j > i + 1 && arr[j] === arr[j - 1]) {
          continue;
        }
        console.log(arr, target, i, j, quadruplets,"-")
        searchPairs(arr, target, i, j, quadruplets);
      }
    }
  
    return quadruplets;
  }
  function searchPairs(arr, target, first, second, quadruplets) {
    let left = second + 1;
    let right = arr.length - 1;
  
    while (left < right) {
      sum = arr[left] + arr[right] + arr[first] + arr[second];
  
      if (sum == target) {
        quadruplets.push([arr[left], arr[right], arr[first], arr[second]]);
        console.log(quadruplets)
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else right--;
    }
  }
  
  console.log(searchQuadruplets([4, 1, 2, -1, 1, -3], 1)); // [-3, -1, 1, 4], [-3, 1, 1, 2]
  