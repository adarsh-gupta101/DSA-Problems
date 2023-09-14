// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

left = 0;
right = 0;
let sum = 0;
function AllPath(root, element) {
    if (root == null) {
        return false;
    }
    if (element == root.value && root.left == null && root.right == null) sum++;
    console.log(root.value, '-root', element, '-element');
    if (root.left) {
        AllPath(root.left, element - root.value);
    }
    if (root.right) {
        AllPath(root.right, element - root.value);
    }

    return sum;
}
var root = new Node(1);
root.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(2);
root.right.right = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(AllPath(root, 12));

//       1
//   2      3
// 4   5   6   7
