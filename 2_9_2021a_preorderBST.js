// Binary Tree Preorder Traversal
//
// Given the root of a binary tree, return the preorder traversal of its nodes' values.


// push all current node, then if there is a node.left push it, with no node.left, push its right
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

// same idea as above but with ES6
var preorderTraversal = function(root) {
    return root?[root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
};

//using stack
var preorderTraversal = function(root, stack = [], res = []) {
    if (!root){
       return [];
    }
    stack.push(root);
    res.push(root.val);
    if (root.left){
        preorderTraversal(root.left, stack, res);
    }
    if (root.right){
        preorderTraversal(root.right, stack, res);
    }
    return res;
}

// var preorderTraversal = function(root) {
//     if (!root) return [];
//     let stack = [], res = [];
//     stack.push(root);
//     while (stack.length) {
//         let node = stack.pop();
//         res.push(node.val);
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
//     return res;
// };
