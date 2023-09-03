function LargestElementArray(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}


function LargestElementArray2(array){
    return array.sort((a,b)=>a-b)[array.length-1]
}
console.log(LargestElementArray([1,2,3,4,5,6,7,8,10]));