// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(2);
  
  function isPalindrome(head) {
    console.log("------------");
  
    let slow = (fast = head);
// finding the middle of the linked list
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
//    reversing the second half of the linked list
    headSecond = reverse(slow);
    copy = headSecond;
//    comparing the first half with the second half
    while (head != null && headSecond != null) {
      if (head.val != headSecond.val) {
        break;
      }
      head = head.next;
      headSecond = headSecond.next;
    }
    // reversing the second half back
    reverse(copy);
  
    if (head == null || headSecond == null) {
      return true;
    }
  
    return false;
  }
  
  function reverse(slow) {
    let current = slow,
      prev = null,
      next;
  
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  isPalindrome(head);
  