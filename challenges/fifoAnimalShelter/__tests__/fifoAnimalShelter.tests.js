'use strict';

const Animal = require('../fifo-animal-shelter.js');

describe('****Queue Tests***', () => {
  it('should create an empty Queue', () => {
    let queue = new Animal;
    expect(queue.front).toEqual(undefined);
  });

  it('should add a new animal to the Queue', () => {
    let queue = new Animal;

    queue.newAnimal('dog', 'fido');
    queue.newAnimal('cat', 'spots');
    expect(queue.printDog()).toEqual('{ fido } => NULL');
    expect(queue.printCat()).toEqual('{ spots } => NULL');
  });


  it('should add multiple animals to the Queue', () => {
    let queue = new Animal;

    queue.newAnimal('dog', 'fido');
    queue.newAnimal('dog', 'oscar');
    queue.newAnimal('dog', 'pepper');
    queue.newAnimal('cat', 'spots');
    queue.newAnimal('cat', 'loki');
    queue.newAnimal('cat', 'booger');
    expect(queue.printDog()).toEqual('{ pepper } => { oscar } => { fido } => NULL');
    expect(queue.printCat()).toEqual('{ booger } => { loki } => { spots } => NULL');
  });

  it('should remove dogs and cats from the Queue', () => {
    let queue = new Animal;

    queue.newAnimal('dog', 'fido');
    queue.newAnimal('dog', 'oscar');
    queue.newAnimal('dog', 'pepper');
    queue.newAnimal('cat', 'spots');
    queue.newAnimal('cat', 'loki');
    queue.newAnimal('cat', 'booger');
    queue.dequeueCat();
    queue.dequeueDog();
    expect(queue.printDog()).toEqual('{ pepper } => { oscar } => NULL');
    expect(queue.printCat()).toEqual('{ booger } => { loki } => NULL');
  });


  it('should return the value of the front of Queue', () => {
    let queue = new Animal;

    queue.newAnimal('dog', 'fido');
    queue.newAnimal('dog', 'oscar');
    queue.newAnimal('dog', 'pepper');
    queue.newAnimal('cat', 'spots');
    queue.newAnimal('cat', 'loki');
    queue.newAnimal('cat', 'booger');

    expect(queue.dogQueue.peek()).toEqual('fido');
    expect(queue.catQueue.peek()).toEqual('spots');
  });

  it('should return at error when trying to add anything other than a dog or cat', () => {
    let queue = new Animal;

    expect(queue.newAnimal('bear', 'fido')).toEqual('sorry we only accept cats and dogs');
  });

  it('should return Null when trying to remove a node from an empty Queue', () => {
    let queue = new Animal;
    expect(queue.dequeueDog().length).toEqual(0);
    // console.log(queue);
  });

});
