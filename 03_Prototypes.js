// Object.prototype

function Person(firstName, lastName, dob) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthday = new Date(dob));
  // (this.calculateAge = function () {
  //   const ageDiff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(ageDiff);
  //   return Math.abs(ageDate.getUTCFullYear()-1970);
  // });
}

// Calculate Age
Person.prototype.calculateAge = function () {
  const ageDiff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName;
};

const yash = new Person("Yaswanth", "Iddibani", "01-11-1991");
const amulya = new Person("Amulya", "D", "02-11-1998");

console.log(yash);
console.log(yash.calculateAge());
console.log(yash.getFullName());

amulya.getMarried("Yaswanth");
console.log(amulya.getFullName());

// Has Own Property
console.log(yash.hasOwnProperty("firstName"));
console.log(yash.hasOwnProperty("getFullName"));
