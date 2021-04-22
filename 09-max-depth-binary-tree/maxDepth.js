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
        this.left = value.left;
        this.right = value.right;
    }   
}

function maxDepth(root) {
  //initialize a counter
  //start at the root and check left and right
  //if you're able to go either or both, add 1 to your counter and traverse to the next node down
  //repeat
  //if you have both a left and a right you'll need to go back and make sure you traverse both directions to see which one goes deeper
  //return the counter
}

module.exports = {
    maxDepth,
    TreeNode
};