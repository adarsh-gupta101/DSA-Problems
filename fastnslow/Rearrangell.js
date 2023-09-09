// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
    printlist() {
      let temp = this;
      while (temp !== null) {
        console.log(temp.val);
        temp = temp.next;
        console.log("->");
      }
    }
  }
  
  function reorder(head) {
    let fast = head,
      slow = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let headSecond = reverse(slow);
    let headFirst = head;
  
    while (headFirst !== null && headSecond !== null) {
      let temp = headFirst.next;
      headFirst.next = headSecond;
      headFirst = temp;
  
      temp = headSecond.next;
      headSecond.next = headFirst;
      headSecond = temp;
    }
  
    if (headFirst !== null) {
      headFirst.next = null;
    }
  }
  
  function reverse(head) {
    let current = head,
      prev = null,
      next;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  var head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  head.next.next.next.next.next = new Node(12);
  console.log("Original LinkedList are: ",head);
  reorder(head);
  
  console.log("Reordered LinkedList are: ",head);
  head.printlist();
  