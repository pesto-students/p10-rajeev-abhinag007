var Person = function() {};

Person.prototype.initialize = function(name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function() {}; // create Teacher class

Teacher.prototype = new Person(); // set Teacher's prototype to an instance of Person

Teacher.prototype.teach = function(subject) {
  console.log(this.name + " is now teaching " + subject);
};

var him = new Teacher(); // create an instance of Teacher
him.initialize("Adam", 45); // initialize him with name and age
him.teach("Inheritance"); // call teach method
