// Object.prototype

function Person(firstName, lastName, dob) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthday = new Date(dob)),
    (this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    });
}
const yash = new Person("Yaswanth", "Iddibani", "01-11-1991");
const sai = new Person("Sai", "Iddibani", "02-11-1998");

console.log(yash);
