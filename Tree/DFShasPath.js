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
function CanPath(root, element) {
  if (root == null) {
    return false;
  }
  if (element == root.value && root.left == null && root.right == null)
    return true;
  console.log(root.value, "-root", element, "-element");
  return (
    CanPath(root.left, element - root.value) ||
    CanPath(root.right, element - root.value)
  );

  return false;
}
var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left = new Node(4);

root.left.right = new Node(5);
console.log(CanPath(root, 10));

//       1
//   2      3
// 4   5   6   7
