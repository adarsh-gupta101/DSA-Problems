// Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

function MinimumMeetingRoom(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let minRooms = 0;
//   let minHeap = new Heap([], null, (a, b) => b[1] - a[1]);

  for (let i = 0; i < intervals.length; i++) {
    while (minHeap.length > 0 && intervals[i][0] >= minHeap.peek()[1]) {
      minHeap.pop();
    }

    minHeap.push(intervals[i]);
    minRooms = Math.max(minRooms, minHeap.length);
  }

  return minRooms;
}