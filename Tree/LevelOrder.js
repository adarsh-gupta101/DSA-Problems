class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

left = 0;
right = 0;

function FindSuccessor(root, element) {
  if (root == null) {
    return 0;
  }
  // return result;

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let currentLevel = [];
    let n = queue.length;
    for (i = 0; i < n; i++) {
      let current = queue.shift();

      currentLevel.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);

      if (current.value == element) {
        break;
      }
    }

    if (queue.length > 0) {
      return queue.shift().value;
    }

    result.push(currentLevel);
  }
  return result;
}
var root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.right.left = new Node(10);
root.right.right = new Node(5);
root.left.left = new Node(9);
console.log(FindSuccessor(root, 7));
