const personPrototypes = {
  greeting: function () {
    return `Hello Person, ${this.firstName} ${this.lastName}`;
  },
  getMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

// Syntax 1
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 28;

console.log(mary);
console.log(mary.greeting());
mary.getMarried("Stephenson");
console.log(mary.greeting());

// Syntax 2
const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Mikey" },
  age: { value: 36 },
});

console.log(brad);
console.log(brad.greeting());
