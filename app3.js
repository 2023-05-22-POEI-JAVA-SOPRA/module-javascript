function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

Person.prototype.fullName = function () {
  return `${this.fname} ${this.lname}`;
};

Person.prototype.toString = function () {
  return `
        First name : ${this.fname}
        Last name : ${this.lname}
        Age : ${this.age}
    `;
};

const amine = new Person("Amine", "Skali", 78);
const julie = new Person("Julie", "Thomas", 79);
const chris = new Person("Chris", "Lis", 80);
