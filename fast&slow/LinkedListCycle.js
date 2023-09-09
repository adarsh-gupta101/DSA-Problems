class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const has_cycle = function(head){

    let p1=head,p2=head;

    while(p1!==null && p2!==null){
        p1=p1.next;
        p2=p2.next.next;
        if(p1===p2){
            return true;
        }
    }

    return false

}



head= new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next= new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next.next = head.next.next.next;

console.log(`LinkedList has cycle: ${has_cycle(head)}`);