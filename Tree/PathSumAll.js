// Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

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
function AllPath(root,sum=0) {
    if (root == null) {
        return false;
    }
    sum = 10 * sum + root.value;
    if (root.left == null && root.right == null) {
        return sum;
    }

    return AllPath(root.left,sum) + AllPath(root.right,sum);

    return sum;
}
var root = new Node(1);
root.left = new Node(0);
root.right = new Node(1);
root.right.left = new Node(6);
root.right.right = new Node(5);
root.left.left = new Node(1);
// root.left.right = new Node();
console.log(AllPath(root));

//       1
//   2      3
// 4   5   6   7
