function MaximumSum(array,k) {
let sum=0;
let MaximumSum = 0;
let windowStart = 0;

for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
 sum=sum+array[windowEnd];

 if(windowEnd>=k-1){
   MaximumSum=Math.max(MaximumSum,sum);
   sum=sum-array[windowStart];
   windowStart++;
 }
}
return MaximumSum;
}


console.log(MaximumSum([2, 1, 5, 1, 3, 2], 3))