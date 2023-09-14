class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

left = 0;
right = 0;

function MinDepth(root) {
  if (root == null) {
    return 0;
  }
  let queue = [root];
  let result = [];
  let minimumDepth = 0;
  while (queue.length > 0) {
    minimumDepth++;
    let level = queue.length;
    let currlevel = [];

    for (i = 0; i < level; i++) {
      let current = queue.shift();

      if (current.left == null && current.right == null) {
        return minimumDepth;
      }

      currlevel.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    result.push(currlevel);
  }
  // return result;
}

var root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.right.left = new Node(10);
root.right.right = new Node(5);
console.log(MinDepth(root));
root.left.left = new Node(9);
console.log(MinDepth(root));

// DFS(root);
