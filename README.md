# BinarySearchTree

## ABOUT

> An excercise on how to create a **Balanced Binary Search Tree**, instantiating it as class *"Tree"* containing branches of *"Nodes"*. The BST contains a multitude of desired functions listed below:

## FUNCTIONS

1. `buildTree(array)` takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The `buildTree` function should return the level-0 root node.
2. `insert(value)` & `delete(value)` that insert/delete a given value. `delete(value)` deals with multiple hypotheticals including none, one or two children of given node to be deleted. 
3. `find(value)` function that returns the node with the given value.
4. `levelOrder(callback)` function that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument.
5. `inOrder(callback)`, `preOrder(callback)`, and `postOrder(callback)` functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. 
6. `height(node)` function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
7. `depth(node)` function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
8. `isBalanced` function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
9. `rebalance` function that rebalances an unbalanced tree. Uses **in order** traversal method to provide a new array to the buildTree function.

## BONUS

This BST incorporates a `prettyPrint` function which helpfully provides a visual representation of the tree, displayed in the console once called upon.

## THIS ASSIGNMENT WAS COMPLETED USING

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
