// N-ary Tree Preorder Traversal
//
// Given an n-ary tree, return the preorder traversal of its nodes' values.
//
// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value (See examples).
//
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
//
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

let preorder = function(root) {
    const result = [];
    function traverse(node) {
        if (!node) return;
        result.push(node.val);

        for (child of node.children) { // all children of that one node
            traverse(child);
        }
    }
    traverse(root);
    return result;
};
