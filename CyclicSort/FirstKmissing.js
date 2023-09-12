// Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

function firstKMissing(arr, k) {
    i = 0;
    while (i < arr.length) {
        let j = arr[i] - 1;
        if (arr[i] != arr[j] && arr[i] > 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else i++;
    }
    console.log(arr);
    let res = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) {
            res.push(i + 1);
        }
    }
    console.log('res', res);
    i = 1;
    while (res.length < k) {
        N = i + arr.length;

        res.push(N);
        i++;
    }

    res.length = k;
    return res;
}

console.log(firstKMissing([3, 4, 1], 2));
