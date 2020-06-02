class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(dob);
  }
  greeting() {
    return `Hello there! ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const ageDiff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(a, b) {
    return a + b;
  }
}

const yash = new Person("Yaswanth", "Iddibani", "01-30-1992");
console.log(typeof yash, yash);
console.log(yash.greeting());
console.log(yash.calculateAge());
console.log(yash.getsMarried("YashIK"));
console.log(yash.greeting());
console.log(Person.addNumbers(1, 2));
