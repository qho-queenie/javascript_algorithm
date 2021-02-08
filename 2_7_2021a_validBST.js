// Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree
//
//
// easiest way: do a inorder traversal, check if the elements in the result array is ascending
var isValidBST = function(root) {
    let result = [];
    let helper = (root, result) => {
        if(root){
            if(root.left){
                helper(root.left, result);
            }
            result.push(root.val);
            if(root.right){
                helper(root.right, result);
            }
        }
    }

    helper(root, result);

    for(var i = 0; i < result.length - 1; i++){
        if(result[i] >= result[i + 1]){
            return false;
        }
    }
    return true;
};


// same method is inorder traversal using stacks, just we are comparing each time instead of storing each node
var isValidBST = function(root) {
    let stack = [];
    let node = root;
    let prev = Number.NEGATIVE_INFINITY;

    while(node || stack.length){
        while(node){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if(node.val <= prev){
            return false;
        }
        prev = node.val;
        node = node.right;
    }
    return true;
};
