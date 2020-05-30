// Person Constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Prototype Method
Person.prototype.greeting = function () {
  return `Hello Person, ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Yaswanth", "Iddibani");
console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, memmbership) {
  Person.call(this, firstName, lastName),
    (this.phone = phone),
    (this.memmbership = memmbership);
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer
Customer.prototype.contructor = Customer;

// Create a Customemr
const customer1 = new Customer("Tom", "Smith", "1234", "standard");
console.log(customer1);
console.log(customer1.greeting());

// Customer Greeting - Overrides Person Greeting
Customer.prototype.greeting = function () {
  return `Hello Customer, ${this.firstName} ${this.lastName}`;
};

console.log(customer1.greeting());
console.log(person1.greeting());
