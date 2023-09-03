function Find_Missing_Number(nums){
let sum=0
    for(let i=0;i<nums.length;i++){
       sum+=nums[i]
    }

    
    let SUM=((nums.length+1)*(nums.length+2))/2
    // console.log(SUM,"-")
    return SUM-sum
}


console.log(Find_Missing_Number([1,2,3,4,5,6,7,8,10]))