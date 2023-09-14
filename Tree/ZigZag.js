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
    let L2R = true;

    while (queue.length > 0) {
        let level = queue.length;
        let currentLevel = [];
        for (i = 0; i < level; i++) {
            // console.log(queue.unshift())
            // currentLevel.push(queue.shift().value)

            let currentnode = queue.shift();
            if (L2R) {
                currentLevel.push(currentnode.value);
            } else currentLevel.unshift(currentnode.value);

            if (currentnode.left) {
                queue.push(currentnode.left);
            }
            if (currentnode.right) {
                queue.push(currentnode.right);
            }
        }

        L2R = !L2R;
        result.push(currentLevel);
    }
    return result;
}

function DFS(root) {
    // console.log(root)
    if (root == null) {
        return;
    }

    if (root?.right != null) root.right && DFS(root?.right);
    if (root?.left != null) DFS(root?.left);
    console.log(root?.value);
}

var root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.left.left = new Node(9);
root.right.left = new Node(10);
root.right.right = new Node(5);
console.log(BFStraverse(root));

console.log('[ [ 12 ], [ 7, 1 ], [ 9, 10, 5 ] ]');

// DFS(root);
