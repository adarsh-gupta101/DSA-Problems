// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some duplicates, find all the duplicate numbers without using any extra space.



function findAllDuplicate(arr) {
    let n = arr.length;
    let i = 0;
    while (i < arr.length) {
        let j = arr[i] - 1;

        if (arr[i] != arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else i++;
    }
    let res=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]!=i+1){
            res.push(arr[i])
        }
    }
    
    return res
}

console.log(findAllDuplicate([3, 4, 4, 5, 5]));
