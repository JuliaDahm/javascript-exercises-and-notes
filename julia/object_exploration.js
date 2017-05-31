/* jshint esversion:6 */

// Differs from how Ruby objects are instantiated by
// writing a class that defines it's properties

// Object Example:

// CAR
// =======
// Properties: color (string), mpg (num), model (string), make (string),
// numOfDoors (num), isFast (boolean), haveAc (boolean), year (num),
// capactiy (num), whatCds (array)

// Methods: acccel, brake, rollDownWindows, drive, addFuel, getWashed, getOlder

// Methods should correlate to properties

// Create Object Car (first letter capitalized for objects)
// props: color, make, model, hasAC

const Car = {
  color: 'green',
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false, // technincally all of the left side is a string
  paint: function(newColor){ //functions on objects are called methods
    // Car.color = newColor; is written like so:
    this.color = newColor; //inside of object, 'this' refers to object
  },
  fixAC: function(){
    this.hasAC = true;
  }
};

// called OBJECT LITERAL (literally creating an object)
// objects require defaults that showcase what data type it will handle
// no semi-colons inside of objects
// colons are for mapping

console.log('Car: ', Car);
// I want to fix the AC
Car.hasAC = true; //this is shorthand
console.log('Car: ', Car);
// Alternatively
Car['hasAC'] = false;
console.log('Car: ', Car);


// I want to check color of Car
console.log('Color of car: ', Car.color);

// Paint the Car
Car.paint('seafoam');
console.log('Car: ', Car);

// Fix the AC with method
Car.fixAC();
console.log('After AC fix: ', Car.hasAC);



// Shirt objects
// Need at least 3 properties
// 3 Methods
// One method should modify a property such as paint did above
// You need to demonstrate the usage of each method

const Shirt = {
  size: 'small',
  department: 'mens',
  new: true,
  resize: function(newSize){
    this.resize = newSize;
  },
  return: function(){
    this.new = false;
  },
  inStock: function() {
    this.inStock = true;
  }
};

console.log(Shirt);
