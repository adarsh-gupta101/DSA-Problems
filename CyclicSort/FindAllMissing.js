function findAllMissing(nums) {
    let i = 0;

    while (i < nums.length) {
        const j = nums[i] - 1;

        if (nums[i] != nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else i++;
    }

    missing=[]
    
    for(i=0;i<nums.length;i++){
        if(nums[i]!==i+1){
            missing.push(i+1)
        }
    }
    
    return missing;
}

console.log(findAllMissing([2, 3, 1, 8, 2, 3, 5, 1])); // [4, 6, 7]
