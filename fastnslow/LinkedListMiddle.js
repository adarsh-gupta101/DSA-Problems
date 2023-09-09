// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.


class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}


function findMiddle(head){
    let fast=head,slow=head;
 while(fast!==null && fast.next!==null){
     fast=fast.next.next;
     slow=slow.next;
 }

 return slow;
}


head= new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next= new Node(5);
// head.next.next.next.next.next = new Node(6);
