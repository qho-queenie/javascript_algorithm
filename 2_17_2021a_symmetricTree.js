// Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric.
//
// But[1,2,2,null,3,null,3] is not.

var isSymmetric = function(root) {
    let helper = (root1, root2) =>{
        if(!root1 && !root2) return true; // all exhausted
        if(!root1 || !root2) return false;

        return root1.val === root2.val && helper(root1.right, root2.left) && helper(root1.left, root2.right)

    }
    return helper(root, root);
};
