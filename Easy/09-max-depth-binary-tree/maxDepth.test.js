const { maxDepth, TreeNode } = require('./maxDepth');

describe('maxDepth fxn', () => {
  
    const root1 = new TreeNode (3);
    root1.left = new TreeNode (9);
    root1.right = new TreeNode (20);
    root1.right.left = new TreeNode(15);
    root1.right.right = new TreeNode(7);

    const expected1 = 3;
    const actual1 = maxDepth(root1);

    expect(expected1).toEqual(actual1);

    const root2 = new TreeNode(1);
    root2.right = new TreeNode(2);

    const expected2 = 2;
    const actual2 = maxDepth(root2);

    expect(expected2).toEqual(actual2);

    const root3 = new TreeNode();

    const expected3 = 0;
    const actual3 = maxDepth(root3);

    expect(expected3).toEqual(actual3);

    const root4 = new TreeNode(0);

    const expected4 = 1;
    const actual4 = maxDepth(root4);

    expect(expected4).toEqual(actual4);
});