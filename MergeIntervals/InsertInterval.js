// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

function InsertInterval(intervals, newone) {
  intervals.push(newone);
  console.log(intervals);
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  for (i = 1; i < intervals.length; i++) {
    let previous = intervals[i - 1];
    let current = intervals[i];

    if (current[0] <= previous[1]) {
      intervals[i] = [previous[0], Math.max(current[1], previous[1])];
      intervals.splice(i - 1, 1);
      i--;
    }
  }

  return intervals;
}

InsertInterval(
  [
    [1, 3],
    [5, 7],
    [8, 12],
  ],
  [4, 6]
);

//   solution 2

function InsertInterval2(intervals, newone) {
  let merged = [];
  i = 0;

  while (i < intervals.length && intervals[i][1] < newone[0]) {
    merged.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newone[1]) {
    newone[0] = Math.min(intervals[i][0], newone[0]);
    newone[1] = Math.max(intervals[i][1], newone[1]);

    i++;
  }
  merged.push(newone);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  console.log(merged);
  return merged;
}

InsertInterval(
  [
    [1, 3],
    [5, 7],
    [8, 12],
  ],
  [4, 6]
);
