// Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.
//
// Find the node in the BST that the node's value equals val and return the
// subtree rooted with that node. If such a node does not exist, return null.
//
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
//
// Input: root = [4,2,7,1,3], val = 5
// Output: []

// recursion with helper func
var searchBST = function(root, val) {
    if (root === null) {
        return null;
    }
    if (val < root.val) {
        return searchBST(root.left, val);
    }
    else if (val > root.val) {
        return searchBST(root.right, val)
    }
    else {
        return root;
    }
};

// pure recursion
var searchBST = function(root, val) {
    if(!root) return root;
    if(root.val === val) return root;
    else if(root.val > val) return searchBST(root.left,val);
    else if(root.val < val) return searchBST(root.right,val);
};

// iterative
var searchBST = function(root, val) {
    while(root){
        if(root.val > val) root = root.left;
        else if(root.val < val) root = root.right;
        else return root;
    }
    return root;
};
