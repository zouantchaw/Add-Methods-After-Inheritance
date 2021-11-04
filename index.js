// Dog should inherit from Animal and the Dog's prototype constructor should be set to Dog
// add bark() method to the Dog object so beagle can both eat() and bark().
// The bark() method should print 'Woof!'

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = () => {
  console.log('Woof!') 
}

let beagle = new Dog();
beagle.eat()
beagle.bark()