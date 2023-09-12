// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function print(head) {
    temp = head;
    res = [];
    while (temp != null) {
        res.push(temp.value);
        temp = temp.next;
    }
    console.log(res);
}
function reverse(head){
    let current=head;
    let prev=null,next=null;
    
    while(current!=null){
        next=current.next;
        current.next=prev;
        prev=current
        current=next;
    }
    print(prev)
    return prev
    
    
}

let head = new Node(5);
head.next = new Node(6);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);
head.next.next.next.next.next = new Node(10);
print(head);
reverse(head)
