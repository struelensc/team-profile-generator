const Employee = require("./Employee");
const engineerHtml = require("../src/engineer-html");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  html() {
    return engineerHtml(this.name, this.id, this.email, this.github);
  }
}

module.exports = Engineer;
