const Employee = require("./Employee");
const internHTML = require("../src/intern-html");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  html() {
    return internHTML(this.name, this.id, this.school, this.email);
  }
}

module.exports = Intern;
