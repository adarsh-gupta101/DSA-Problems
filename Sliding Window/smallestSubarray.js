//  Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.


function smallest_subarray_with_given_sum(array,k){

    let windowStart=0;
    let sum=0;
    let minLength=Infinity;

    for(windowEnd=0;windowEnd<array.length;windowEnd++){

       sum=sum+array[windowEnd];
    //    console.log(sum)
        while(sum>=k){
            minLength=Math.min(minLength,windowEnd-windowStart+1);
            sum=sum-array[windowStart];
            windowStart++
        }
    }

    return minLength;

}

console.log(smallest_subarray_with_given_sum([2, 1, 5, 2, 8], 7))