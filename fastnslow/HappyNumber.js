// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

function Happynumber(num) {
  


    let slow=num,fast=num;

    while(1){
        slow=findSquare(slow);//2.2 + 3.3 ==// 
        fast=findSquare(findSquare(fast));

        if(slow===fast){
            break;
        }
    }

    return slow===1;
}

function findSquare(num){
    let sum=0;
    while(num>0){
        let digit=num%10;
        sum+=digit*digit;
        num=Math.floor(num/10);
    }
    return sum;
}


console.log(Happynumber(23))