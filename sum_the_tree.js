Description:

Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
In C++:

struct node
{
  int value;
  node* left;
  node* right;
}
write a function that returns the sum of all values, including the root.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3

function sumTheTreeValues(root){
console.log(root);
  if  (!root){
   return 0;
 }
 var sum = root.value;
 sum += sumTheTreeValues(root.left);
 sum += sumTheTreeValues(root.right);
 return sum;
}
