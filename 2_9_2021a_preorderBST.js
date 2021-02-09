// Binary Tree Preorder Traversal
//
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    let result = [];
    let helper = (root,result) => {

        if(root) {
            result.push(root.val);
            helper(root.left, result);
            helper(root.right, result);
        }
    }
    helper(root, result);
    return result;
};
