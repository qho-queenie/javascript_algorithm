// Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// recursively:
// keep going down to the last left, push to result, then the node itself, then the node's right
var inorderTraversal = function(root) {
    let result = [];
    let helper = (root, result) => {
        if(root !== null){
            if(root.left !== null){
                helper(root.left, result);
            }
            result.push(root.val);

            if(root.right !== null){
                helper(root.right, result);
            }
        }
    }
    helper(root, result);
    return result;
};


var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let curr = root;

    while(curr || stack.length){
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;

    }
    return result;
};
