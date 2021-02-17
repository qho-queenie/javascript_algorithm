// Leaf-Similar Trees
// Consider all the leaves of a binary tree, from left to right order, the values
// of those leaves form a leaf value sequence.
//
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
//
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
//
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

var leafSimilar = function(root1, root2) {
    let result1 = [];
    let result2 = [];

    function helper(node, result) {
        if(!node.left && !node.right) {
            result.push(node.val)
        }

        if(node.left) {
            helper(node.left, result)
        }
        if(node.right) {
            helper(node.right, result)
        }
    }
    helper(root1, result1);
    helper(root2, result2);

    if(result1.length !== result2.length) return false;

    for(var i = 0; i < result1.length; i++){
        if(result1[i] !== result2[i]) return false;
    }
    return true;
};
