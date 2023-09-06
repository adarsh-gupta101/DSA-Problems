function LinearSearch(array1) {
  for (var i = 0; i < array1.length; i) {
    if (array1[i] === i) {
      return i;
    }
  }
  return -1;
}


function BinarySearch(array1) {
  var low = 0;
  var high = array1.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (array1[mid] === mid) {
      return mid;
    } else if (array1[mid] > mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;

}




// function ExponentialSearch(array1) {
//   if (array1[0] === 0) {
//     return 0;
//   }
//   var i = 1;
//   while (i < array1.length && array1[i] <= i) {
//     i = i * 2;
//   }
//   if (i < array1.length) {
//     return BinarySearch(array1);
//   }
//   return -1;
// }