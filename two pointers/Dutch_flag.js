// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

function dutch_flag_sort(arr) {
  // console.log(arr.sort());

  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] == 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]];
      low++;
      i++;
    } else if (arr[i] == 2) {
      [arr[high], arr[i]] = [arr[i], arr[high]];
      high--;
      // i++
    } else {
      i++;
    }
  }

  return arr;
}

dutch_flag_sort([1, 0, 2, 2, 2, 1, 0]); // [0 0 1 1 2]
