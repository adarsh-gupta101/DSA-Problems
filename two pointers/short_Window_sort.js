// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

function shortest_window(arr) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
      low++;
    }
  
    if (low == arr.length - 1) return 0;
  
    while (high > 0 && arr[high] >= arr[high - 1]) {
      high--;
    }
  
    let minOfSubArray = +Infinity,
      maxOfSubArray = -Infinity;
  
    for (k = low; k < high; k++) {
      minOfSubArray = Math.min(minOfSubArray, arr[k]);
      maxOfSubArray = Math.max(maxOfSubArray, arr[k]);
    }
  
    while (low > 0 && arr[low - 1] > minOfSubArray) low--;
    while (high < arr.length - 1 && arr[high + 1] < maxOfSubArray) high++;
  
    console.log(low, high);
    
    return high-low+1
  }
  
  shortest_window([1, 3, 2, 0, -1, 7, 10]);
  