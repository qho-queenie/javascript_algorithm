// Find Mode in Binary Search Tree
// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
//
// Note: If a tree has more than one mode, you can return them in any order.


//very brute force: use inorder traversal, sort the object by values(occurance), then find any key with the same value
var findMode = function(root) {
    let hash = {};
    let node = root;
    let result = [];

    let helper = (node, hash) => {
        if(!node)return;
        helper(node.left, hash);
        hash[node.val]? hash[node.val]++ : hash[node.val] = 1;
        helper(node.right, hash);
    }
    helper(node, hash)

    if(Object.keys(hash).length > 0){
        let largestVal = parseInt(Object.entries(hash).sort((a,b) => b[1] - a[1])[0][1]);
        for(val in hash){
            if(hash[val] === largestVal){
                result.push(parseInt(val))
            }
        }
        return result;
    }
    return result;
};

// taking advantage of inorder traversal is ascending order, count each consecutive value's occurances
// if current node's occurances is greater than the last recorded max, replace everything in the result (array)
// if current node's occurances is equal to the last recorded max, push it into the result
var findMode = function(root) {
    let currentNodeVal = Number.POSITIVE_INFINITY;
    let currentNodeCount = 0;
    let result = [];
    let maxCount = 0;

    let helper = (root) =>{
        if(!root) return;
        helper(root.left);

        if(currentNodeVal === root.val){
            currentNodeCount++;
        }
        else{
            currentNodeCount = 1;
        }
        currentNodeVal = root.val;

        if(currentNodeCount > maxCount){
            maxCount = currentNodeCount;
            result = [currentNodeVal];
        }
        else if(currentNodeCount === maxCount){
            result.push(currentNodeVal);
        }
        helper(root.right);
    }
    helper(root);
    return result;
};
