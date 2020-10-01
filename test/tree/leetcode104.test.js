const maxDepth = require('../../code/tree/leetcode104');

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node4 = new TreeNode(7);
let node3 = new TreeNode(15);
let node2 = new TreeNode(20, node3, node4);
let node1 = new TreeNode(9);
let node0 = new TreeNode(3, node1, node2);
let node5 = null;

test('maxDepth', () => {
    expect(maxDepth(node0)).toBe(3);
    expect(maxDepth(node5)).toBe(0);
});