function merge(intervals) {
  if (intervals.length < 2) return intervals;

  //sort
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i]; //current
    let previous = intervals[i - 1];
    console.log(current, "current");
    console.log(previous);

    if (previous[1] >= current[0]) {
      intervals[i] = [previous[0], Math.max(previous[1], current[1])];

      console.log(intervals);
      intervals.splice(i - 1, 1);
      i--;
    }
  }

  return intervals;
}

merge([
  [1, 4],
  [2, 5],
  [7, 9],
]); // [[1,5],[7,9]]
