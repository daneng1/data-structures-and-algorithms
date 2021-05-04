# Queues with Stacks

Enclosed are methods that utilize the data concepts of Queues with Stacks.

## Challenge

### Write methods for Queues:

1. enqueue - adds a new node to the back of the queue.
1. dequeue - removes a node from the front of the queue.
1. peek - looks at the front node and returns its' value.
1. print - concats all nodes and prints their values as `{ 2 } => { 3 } => { 4 } => NULL`

## Approach & Efficiency

- My approach was to use the models for stacks and queues and incorporate some of the linked list methods that perform similar functions.
- I wrote tests to confirm working code:
  - Can successfully enqueue into a queue
  - Can successfully enqueue multiple values into a queue
  - Can successfully dequeue out of a queue the expected value
  - Can successfully peek into a queue, seeing the expected value
  - Can successfully instantiate an empty queue
  - Calling dequeue or peek on empty queue raises exception

---

![Queues with Stacks](/challenges/stacks-queues/queues-with-stacks.png)