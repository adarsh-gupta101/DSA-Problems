// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.



// My solution

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
  
    get_list() {
        result = "";
        temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
}


const reverse_every_k_elements = function(head, k) {
    if (k <= 1 || head === null) {
        return head;
    }

    let current = head,
        previous = null;
    while (true) {
        const last_node_of_previous_part = previous;
        // after reversing the LinkedList 'current' will become the last node of the sub-list
        const last_node_of_sub_list = current;
        let next = null; // will be used to temporarily store the next node
        let i = 0;
        while (current !== null && i < k) { // reverse 'k' nodes
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            i += 1;
        }

        // connect with the previous part
        if (last_node_of_previous_part !== null) {
            last_node_of_previous_part.next = previous;
        } else {
            head = previous;
        }

        // connect with the next part
        last_node_of_sub_list.next = current;

        if (current === null) {
            break;
        }
        previous = last_node_of_sub_list;
    }

    return head;

}
