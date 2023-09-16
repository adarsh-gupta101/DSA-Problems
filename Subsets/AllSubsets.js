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


function subsets(nums) {
    let result = [];

    function DFS(i, nums, slate) {
        // exit
        if (i == nums.length) {
            result.push(slate.slice());
            return;
        }

        // recustion
        // include
        DFS(i + 1, nums, slate);
        slate.push(nums[i]);

        DFS(i + 1, nums, slate);
        slate.pop();

        // exclude
    }

    DFS(0, nums, []);

    return result;
}

subsets([1, 2, 3]);

