// Testing

import { Tree } from "./binarysearchtree.js";

// Formulates a random array of nums within a specified arr size
const randomArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
};

const BST = new Tree(randomArray(15));
console.log(BST);

console.log(BST.isBalanced()); // true

console.log(BST.levelOrder()); // [36,16,66,5,29,54,78,4,7,25,34,46,65,74,79]
console.log(BST.inOrder()); // [4,5,7,16,25,29,34,36,46,54,65,66,74,78,79]
console.log(BST.preOrder()); // [36,16,5,4,7,29,25,34,66,54,46,65,78,74,79]
console.log(BST.postOrder()); // [4,7,5,25,34,29,16,46,65,54,74,79,78,66,36]

BST.insert(283);
BST.insert(457);
BST.insert(811);

console.log(BST.isBalanced()); // false
BST.prettyPrint();

/*
"|                       ┌── 811"
"|                   ┌── 457"
"|               ┌── 283"
"|           ┌── 95"
"|       ┌── 89"
"|       |   └── 86"
"|   ┌── 81"
"|   |   |   ┌── 71"
"|   |   └── 51"
"└── 41"
"    |       ┌── 33"
"    |   ┌── 24"
"    |   |   └── 20"
"    └── 10"
"        |   ┌── 4"
"        └── 2"
*/

BST.rebalance();
console.log(BST.isBalanced()); // true

console.log(BST.levelOrder()); // [46,16,78,5,29,65,283,4,7,25,34,54,66,79,457,36,74,811]
console.log(BST.inOrder()); // [4,5,7,16,25,29,34,36,46,54,65,66,74,78,79,283,457,811]
console.log(BST.preOrder()); // [46,16,5,4,7,29,25,34,36,78,65,54,66,74,283,79,457,811]
console.log(BST.postOrder()); // [4,7,5,25,36,34,29,16,54,74,66,65,79,811,457,283,78,46]

BST.prettyPrint();

/*
"|               ┌── 811"
"|           ┌── 457"
"|       ┌── 283"
"|       |   └── 79"
"|   ┌── 78"
"|   |   |       ┌── 74"
"|   |   |   ┌── 66"
"|   |   └── 65"
"|   |       └── 54"
"└── 46"
"    |           ┌── 36"
"    |       ┌── 34"
"    |   ┌── 29"
"    |   |   └── 25"
"    └── 16"
"        |   ┌── 7"
"        └── 5"
"            └── 4"
*/
