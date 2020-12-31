class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello  there! ${this.firstName} ${this.lastName}`;
  }

  static getMembershipCost() {
    return 501;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.mebership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "James", "123", "good");

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
console.log(Person.getMembershipCost());
