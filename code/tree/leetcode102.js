/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }

    let res = []
    let queue = [root];
    let node, currentLevel, i, left, right;

    while(queue.length) {
        i = queue.length;
        currentLevel = [];
        while(i) {
            node = queue.shift();
            i--;
            currentLevel.push(node.val);
            left = node.left;
            right = node.right;
            if(left) {
                queue.push(left);
            }
            if(right) {
                queue.push(right);
            }
        }
        res.push(currentLevel);
    }
    return res;
};

module.exports = levelOrder;