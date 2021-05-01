# Stacks and Queues

Enclosed are methods that utilize the data concepts of Stacks and Queues.

## Challenge

### Write methods for Stacks:

1. push - adds a new node to the top of the stack.
1. pop - removes the top node from the stack.
1. peek - looks at the top node and returns its' value.
1. isEmpty - returns null if the stack is empty.
1. print - concats all nodes and prints their values as `{ 2 } => { 3 } => { 4 } => NULL`

### Write methods for Queues:

1. enqueue - adds a new node to the back of the queue.
1. dequeue - removes a node from the front of the queue.
1. peek - looks at the front node and returns its' value.
1. isEmpty - returns null if the queue is empty.
1. print - concats all nodes and prints their values as `{ 2 } => { 3 } => { 4 } => NULL`

## Approach & Efficiency

- My approach was to use the models for stacks and queues and incorporate some of the linked list methods that perform similar functions.
- I wrote tests to confirm working code:
  - Can successfully push onto a stack
  - Can successfully push multiple values onto a stack
  - Can successfully pop off the stack
  - Can successfully empty a stack after multiple pops
  - Can successfully peek the next item on the stack
  - Can successfully instantiate an empty stack
  - Calling pop or peek on empty stack raises exception
  - Can successfully enqueue into a queue
  - Can successfully enqueue multiple values into a queue
  - Can successfully dequeue out of a queue the expected value
  - Can successfully peek into a queue, seeing the expected value
  - Can successfully empty a queue after multiple dequeues
  - Can successfully instantiate an empty queue
  - Calling dequeue or peek on empty queue raises exception

![Stacks and Queues](/challenges/stacks-queues/stacks_queues.png)