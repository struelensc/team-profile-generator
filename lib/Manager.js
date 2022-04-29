const Employee = require("./Employee");
const managerHtml = require("../src/manager-html");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  html() {
    return managerHtml(this.name, this.id, this.email, this.officeNumber);
  }
}

module.exports = Manager;
