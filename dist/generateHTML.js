const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

function generateManager(data) {
  const newManager = new Manager(
    data.managerName,
    data.managerID,
    data.managerEmail,
    data.managerOffice
  );

  return newManager.html();
}

function generateIntern(data) {
  const newIntern = new Intern(
    data.internName,
    data.internID,
    data.internEmail,
    data.internOffice
  );

  return newIntern.html();
}

function generateEngineer(data) {
  const newEngineer = new Engineer(
    data.engineerName,
    data.engineerID,
    data.engineerEmail,
    data.engineerGithub
  );

  return newEngineer.html();
}

module.exports = { generateManager, generateIntern, generateEngineer };
