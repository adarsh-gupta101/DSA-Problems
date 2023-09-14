function AllSubsets(arr) {
    let test = [[]];

    for (i = 0; i < arr.length; i++) {
        let current = arr[i];
        let subLen = test.length;

        for (j = 0; j < subLen; j++) {
            test.push([...test[j], current]);
        }
    }

    return test;
}

console.log(AllSubsets([1, 2, 3]));
