// Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

export class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}
