// Given an unsorted array containing numbers, find the smallest missing positive number in it.

function findMinimalNumber(arr) {
    let i = 0;

    while (i < arr.length) {
        let j = arr[i] - 1;

        if (arr[i] != arr[j] && arr[i] > 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else i++;
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) return i + 1;
    }

    return arr;
}

console.log(findMinimalNumber([3, -2, 0, 1, 2]));
