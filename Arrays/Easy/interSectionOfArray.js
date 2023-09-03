function interSectionOfArray(array1, array2){

    let set1={}
    let set2={}


    for(i=0;i<array1.length;i++){
        set1[array1[i]]=true
    }

    for(i=0;i<array2.length;i++){
        set2[array2[i]]=true
    }


    let result=[]
    for(let key in set1){
        if(set2[key]){
            result.push(key)
        }
    }


    return result


}

A=[1, 2, 3, 3, 4, 5, 6]
B= [3 ,5]

 console.log( interSectionOfArray(A,B))