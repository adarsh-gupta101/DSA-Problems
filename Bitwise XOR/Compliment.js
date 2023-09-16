// For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.



function base10Complement(num) {
    // bit ^ compliment ==all_bit_to one
    // bit ^ compliment ^ bit ==all_bit_to one ^ bit
    // 0 ^ cmpliment =number ^bit

    let numberOfbit = 0;
    let n = num;

    while (n > 0) {
        numberOfbit++;
        // n=n>>1
        n = n >> 1;
        console.log(n);
    }

    let all = Math.pow(2, numberOfbit)-1;
    return all^num;
}

console.log(`Bitwise complement is: ${base10Complement(8)}`);

// 8>>1
