// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

const remove_duplicates = (arr) => {
  let next = 0;
  let next_non_duplicate = 0;

  while (next < arr.length) {
    if (arr[next] !== arr[next_non_duplicate]) {
      arr[next_non_duplicate] = arr[next];
      next_non_duplicate++;
    }
    next++
  }

  return next_non_duplicate;
};



console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));