const engineerHtml = require("../src/engineer-html");
const internHTML = require("../src/intern-html");
const managerHtml = require("../src/manager-html");

function generateManager(data) {
  return managerHtml(data);
}

function generateIntern(data) {
  return internHTML(data);
}

function generateEngineer(data) {
  return engineerHtml(data);
}

module.exports = { generateManager, generateIntern, generateEngineer };
