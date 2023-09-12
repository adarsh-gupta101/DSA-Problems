function CyclicSort(array) {
    let i = 0;

    while (i < array.length) {
        const j = array[i] - 1;
        // console.log(j,"llll")/
        if (array[i] != array[j]) {
            [array[i], array[j]] = [array[j], array[i]];
        } else i++;
    }

    return array;
}

console.log(CyclicSort([6, 4, 5, 3, 2, 1]));
