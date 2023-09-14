class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function BFStraverse(root) {
  let result = [];
  let queue = [];

  if (root === null) return result;

  queue.push(root);

  while (queue.length > 0) {
      let level = queue.length;
      let currentLevel = [];
      for (i = 0; i < level; i++) {
          // console.log(queue.unshift())
          // currentLevel.push(queue.shift().value)

          let currentnode = queue.shift();
          currentLevel.push(currentnode.value);

          if (currentnode.left) {
              queue.push(currentnode.left);
          }
          if (currentnode.right) {
              queue.push(currentnode.right);
          }
      }
      result.push(currentLevel);
  }
  return result;
}

// function DFS(root) {
//     if ((root = null)) {
//         return;
//     }

//     if (root?.left != null) DFS(root?.left);
//     console.log(root?.value);
//     if (root?.right != null) root.right && DFS(root?.right);
// }

var root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.left.left = new Node(9);
root.right.left = new Node(10);
root.right.right = new Node(5);
console.log(`Level order traversal: ${BFStraverse(root)}`);

// DFS(root);
