// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

import { Node } from "./node.js";

export class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }
  // Write a buildTree(array) function that takes an array of data, turns it into a BST. Array must be sorted, no duplicates permitted
  buildTree(arr) {
    const sortedArray = this.sortArray(arr);
    const uniqueValueArray = this.removeDuplicates(sortedArray); // remove duplicates from sorted array
    const n = uniqueValueArray.length;
    const root = this.BinarySearchTree(uniqueValueArray, 0, n - 1);
    return root;
  }
  sortArray(arr) {
    const sortArr = arr.sort((a, b) => a - b); // SORT array
    return sortArr;
  }
  removeDuplicates(arr) {
    const uniquesArr = [...new Set(arr)];
    return uniquesArr;
  }
  BinarySearchTree(arr, startIndex, endIndex) {
    if (startIndex > endIndex) return null;

    const midpoint = Math.floor((startIndex + endIndex) / 2);
    const rootNode = new Node(arr[midpoint]);
    rootNode.leftChild = this.BinarySearchTree(arr, startIndex, midpoint - 1);
    rootNode.rightChild = this.BinarySearchTree(arr, midpoint + 1, endIndex);

    return rootNode;
  }
  // Write insert(value) and deleteItem(value) functions that insert/delete the given value.
  insert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);
    if (currentNode.data === value) return; // do nothing, no duplciates allowed
    if (value > currentNode.data) {
      currentNode.rightChild = this.insert(value, currentNode.rightChild); // add right child if greater value
    } else {
      currentNode.leftChild = this.insert(value, currentNode.leftChild); // add left child if lesser value
    }
    return currentNode;
  }

  delete(value, currentNode = this.root) {
    if (currentNode === null) return currentNode; // base case
    // Deal with several cases for delete, such as when a node has children or not
    if (value > currentNode.data) {
      // if value exists in subtrees
      currentNode.rightChild = this.delete(value, currentNode.rightChild);
    } else if (value < currentNode.data) {
      currentNode.leftChild = this.delete(value, currentNode.leftChild);
    } else {
      // node with only one child
      if (currentNode.leftChild === null) return currentNode.rightChild;
      if (currentNode.rightChild === null) return currentNode.leftChild;

      // to remove a node, which has two children:
      // find minimum element in the right subtree of node to be removed
      // replace value of the node to be removed with found minimum from previous action. Now, right subtree contains a duplicate!
      // apply remove to the right subtree to remove a duplicate value. Original desired node and its value was replaced and removed
      currentNode.data = this.minValue(currentNode.rightChild);
      currentNode.rightChild = this.delete(
        currentNode.data,
        currentNode.rightChild
      );
    }
    return currentNode;
  }
  // deleting uses inorder tarversal, looks to the leftmost child of right subtree
  minValue(node) {
    let minVal = node.data;
    while (node.leftChild != null) {
      minVal = node.leftChild.data; // assigned duplicate value to duplicate node which will now be removed
      node = node.leftChild;
    }
    return minVal;
  }
  // Write a find(value) function that returns the node with the given value.
  find(value, currentNode = this.root) {
    if (currentNode.data === value || currentNode === null) {
      return currentNode;
    }
    if (value < currentNode.data) {
      return this.find(value, currentNode.leftChild); // recurisve check left childNode
    }
    return this.find(value, currentNode.rightChild); // check right childNode
  }
  // levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument
  levelOrder(currentNode = this.root, levelOrderData = [], queue = []) {
    if (currentNode === null) return;

    levelOrderData.push(currentNode.data); // Visit the root node

    queue.push(currentNode.leftChild); // traverse left => enqueues children
    queue.push(currentNode.rightChild); // traverse right => enqueues children

    while (queue.length) {
      const level = queue[0]; // begins at first el in queue
      queue.shift(); // removes first element and returns it
      this.levelOrder(level, levelOrderData, queue); // recursively repeats the process
    }

    return levelOrderData;
  }
  // Recursive preOrder traversal : root, left, right
  // Traverse through in this order then return values in arr to be printed
  preOrder(currentNode = this.root, preOrderData = []) {
    if (currentNode === null) return;

    preOrderData.push(currentNode.data); // Visit the node

    if (currentNode.leftChild)
      this.preOrder(currentNode.leftChild, preOrderData); // traverse left

    if (currentNode.rightChild)
      this.preOrder(currentNode.rightChild, preOrderData); // traverse right

    return preOrderData;
  }
  // Recursive preOrder traversal : left, root, right
  inOrder(currentNode = this.root, inOrderData = []) {
    if (currentNode === null) return;

    if (currentNode.leftChild) this.inOrder(currentNode.leftChild, inOrderData); // traverse left

    inOrderData.push(currentNode.data); // Visit the node

    if (currentNode.rightChild)
      this.inOrder(currentNode.rightChild, inOrderData); // traverse right

    return inOrderData;
  }
  // Recursive preOrder traversal : left, right, root
  postOrder(currentNode = this.root, postOrderData = []) {
    if (currentNode === null) return;

    if (currentNode.leftChild)
      this.postOrder(currentNode.leftChild, postOrderData); // traverse left

    if (currentNode.rightChild)
      this.postOrder(currentNode.rightChild, postOrderData); // traverse right

    postOrderData.push(currentNode.data); // Visit the node

    return postOrderData;
  }
  // Write a height(node) function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
  height(currentNode = this.root) {
    if (currentNode === null) return 0;

    const leftHeight = this.height(currentNode.leftChild); // return height of each path, L and R
    const rightHeight = this.height(currentNode.rightChild);

    return Math.max(leftHeight, rightHeight) + 1; // + 1 because include given node
    // Math.max() => takes numeric expression, evaluates & returns the larger set
  }
  // Write a depth(node) function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  depth(givenNodeValue, currentNode = this.root, edgeCount = 0) {
    if (currentNode === null) return; // given node does not exist
    if (currentNode.data === givenNodeValue) return edgeCount; // stop clause and give count if rootNode val equals givenNode val

    if (currentNode.data < givenNodeValue) {
      return this.depth(givenNodeValue, currentNode.rightChild, edgeCount + 1); // increment on right subtree
    } else {
      return this.depth(givenNodeValue, currentNode.leftChild, edgeCount + 1); // increment count left subtree
    }
  }
  isBalanced(currentNode = this.root) {
    if (currentNode === null) return;
    const leftSubtree = this.height(currentNode.leftChild); // return height of each path, L and R
    const rightSubtree = this.height(currentNode.rightChild);
    if (Math.abs(leftSubtree - rightSubtree) > 1) {
      return false;
    }
    return true;
  }
  // Write a rebalance function that rebalances an unbalanced tree. Tip: Use a traversal method to provide a new array to the buildTree function.
  // use inOrder traversal as binary search trees use this method
  rebalance() {
    const currentTreeArr = this.inOrder();
    this.root = this.buildTree(currentTreeArr);
  }
  // visualize binary search tree, prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.
  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node.rightChild) {
      this.prettyPrint(
        node.rightChild,
        `${prefix}${isLeft ? "|   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.leftChild) {
      this.prettyPrint(
        node.leftChild,
        `${prefix}${isLeft ? "    " : "|   "}`,
        true
      );
    }
  }
}
