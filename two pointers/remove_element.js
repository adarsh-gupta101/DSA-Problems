function remove_element(arr,key){
    let nextElement = 0;
    for(let i = 0; i < arr.length; i++){
        // if the current element is not the key, put it in the next available index
        
        if(arr[i] !== key){
            arr[nextElement] = arr[i];
            nextElement++;
        }
    }
    return nextElement;
}