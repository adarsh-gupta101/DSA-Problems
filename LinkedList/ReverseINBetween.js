// Given the head of a Singly LinkedList, reverse the LinkedList between p and q. Write a function to return the new head of the reversed LinkedList.


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
function reverse(head, a, b) {
    if (a == b) return head;

    let i = 0;
    let current = head,
        prev = null,
        next = null;
    while (current != null && i < a - 1) {
        prev = current;
        current = current.next;

        i++;
    }

    let last_of_first_part = prev;
    let last_of_sub = current;

    i = 0;
    prev = null;
    while (i < b - a + 1 && current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
    }

    // print(prev)

    if (last_of_first_part != null) {
        last_of_first_part.next = prev;
    } else head = prev;

    last_of_sub.next = current;
    
    return head
}

let head = new Node(5);
head.next = new Node(6);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);
// head.next.next.next.next.next = new Node(10);
print(reverse(head, 2, 4));