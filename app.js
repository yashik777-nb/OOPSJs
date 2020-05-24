const yashObject = {
  name: "Yash",
  age: 30,
};

console.log(yashObject.name, yashObject.age);
console.log(this, "Outside Constructor");

// Constructor
function Person(name, age, dob) {
  (this.name = name),
    (this.age = age),
    (this.birthday = new Date(dob)),
    (this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    });
}

const yash = new Person("Yash", 28, "9/10/1992");
const sai = new Person("Sai", 21, "9/10/1998");
console.log(yash);
const age = yash.calculateAge();
console.log(yash.calculateAge());
console.log(sai);
