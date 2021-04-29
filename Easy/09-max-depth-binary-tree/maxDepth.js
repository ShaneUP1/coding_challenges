//https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
 * @return {number}
 */


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root) {
    //initialize a counter
    // let current = this.node;
    if (root === null) {
        return 0;
    }

    //start at the root and check left and right
    let nodeLeft = maxDepth(root.left) + 1;
    
    let nodeRight = maxDepth(root.right) + 1;

    const result = nodeLeft > nodeRight ? nodeLeft : nodeRight;
    return result;
}

    //if you're able to go either or both, add 1 to your counter and traverse to the next node down
    // if (root.left || root.right) {
    //     counter++;
    //     // current = root;
    // }
    //repeat
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    //if you have both a left and a right you'll need to go back and make sure you traverse both directions to see which one goes deeper
    //return the counter

module.exports = {
    maxDepth,
    TreeNode
};