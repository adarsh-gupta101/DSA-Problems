function DuplicateSubsets(nums) {

     
    nums.sort((a,b)=>a-b);
    let res=[[]];
    for(let i=0;i<nums.length;i++){
        let len=res.length;
        for(let j=0;j<len;j++){
            res.push([...res[j],nums[i]]);
        }
    }
    // Remove duplicates using set
    res=new Set(res.map((arr)=>JSON.stringify(arr)));
    return Array.from(res,JSON.parse);
}

function DuplicateSubsetsBFS(nums){

}

console.log(DuplicateSubsets([1, 3, 5, 3]));




function subsets(nums) {
    nums.sort((a,b)=>a-b)
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

    let hash = {};
    for (el of result) {
        if (hash[el]) continue;
        hash[el] = el;
    }

    console.log(hash);

    return Object.values(hash);
}

subsets([3,2,1,3]);
