function find(arr = [1, 2, 3, 4, 3, 2, 1]) {
  let num = 0;

  for (i = 0; i < arr.length; i++) {
    num ^= arr[i];
    console.log(num);
  }
  return num;
}

find();


// In a non-empty array of integers, every number appears twice except for one, find that single number.

// Example 1:
