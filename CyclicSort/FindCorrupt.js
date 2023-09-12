// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

function findcurrupt(arr) {
    let i = 0;

    while (i < arr.length) {
        let j = arr[i] - 1;
        if (arr[i] != arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else i++;
    }
    let res=[]
    console.log(arr)
    for(i=0;i<arr.length;i++){
        // console.log(arr[i],i+1)
        if(arr[i]!=i+1){
            res.push(arr[i])
            res.push(i+1)
        }
    }

    return res;
}

console.log(findcurrupt([3, 1, 2, 3, 6,4]));
