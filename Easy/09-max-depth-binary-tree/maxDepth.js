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
        this.value = value === undefined ? 0 : value;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root) {
    // start by checking initial case only
    // if root is falsey return 0
    if (!root) {
        return 0;
    }
    //look left and right and use recursion to check those nodes
    //we will add 1 in either case, right or left, because if the code gets to this point we know our depth is at least 1, meaning we at least have a root
    //then we use recursion to perform the same series of steps on all the children
    let nodeLeft = maxDepth(root.left) + 1;
    console.log('nodeleft:', nodeLeft);
    
    let nodeRight = maxDepth(root.right) + 1;
    console.log('noderight:', nodeRight);

    //this is how we check to find the deepest branch and return it
    const result = nodeLeft > nodeRight ? nodeLeft : nodeRight;
    return result;
}

module.exports = {
    maxDepth,
    TreeNode
};