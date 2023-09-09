// Given the head of a Singly LinkedList that
// contains a cycle,
// write a function to find the starting node of
//  the cycle.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

    if (head?.next == null) return null

    let fast = slow = head;
    let curlength = 0
    let hasCycle=false

    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next;



        if (fast == slow) {
            hasCycle=true
            curlength = findlength(slow)
            break

        }

    }
     if(!hasCycle) {
        return null;
    }
    return findStart(curlength, head)

    function findStart(curlength, head) {

        let pointer1 = head, pointer2 = head;

        while (curlength > 0) {
            pointer2 = pointer2.next
            curlength--
        }

        while (pointer1 != pointer2) {
            pointer1 = pointer1.next
            pointer2 = pointer2.next
        }
        if (pointer1 != pointer2) return null
        return pointer1 ? pointer1 : null

    }


    function findlength(slow) {
        let current = slow;
        let curlength = 0;

        while (true) {
            current = current.next
            curlength++

            if (current == slow) {
                break;
            }
        }

        return curlength
    }

    return null
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(Start(head)); // 3
