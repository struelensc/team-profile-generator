const inquirer = require("inquirer");
const fs = require("fs");

function init() {
  const managerQuestions = [
    {
      type: "input",
      name: "managerName",
      message: "Team Manager Name:",
    },
    {
      type: "input",
      name: "managerID",
      message: "Team Manager Employee ID:",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Team Manager Email Address:",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "Team Manager Office Number:",
    },
  ];

  inquirer.prompt(managerQuestions).then((data) => {
    console.log(data);
    // generateManager(data);
    choices();
  });
}

function choices() {
  const teamChoices = [
    {
      type: "list",
      name: "teamChoice",
      message: "Select to build your team.",
      choices: ["Engineer", "Intern", "Finished building my team"],
    },
  ];

  inquirer.prompt(teamChoices).then((data) => {
    console.log(data.teamChoice);
    if (data.teamChoice === "Intern") {
      internQuestions();
    } else if (data.teamChoice === "Engineer") {
      engineerQuestions();
    } else {
      return;
    }
  });
}

function internQuestions() {
  const internChoices = [
    {
      type: "input",
      name: "internName",
      message: "Intern Name:",
    },
    {
      type: "input",
      name: "internID",
      message: "Intern Employee ID:",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Intern Email:",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Intern School:",
    },
  ];

  inquirer.prompt(internChoices).then((data) => {
    console.log(data);
    // generateIntern(data);
    choices();
  });
}

function engineerQuestions() {
  const engineerQuestions = [
    {
      type: "input",
      name: "engineerName",
      message: "Engineer Name:",
    },
    {
      type: "input",
      name: "engineerID",
      message: "Engineer Employee ID:",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Engineer Email:",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Engineer Github Username:",
    },
  ];

  inquirer.prompt(engineerQuestions).then((data) => {
    console.log(data);
    // generateEngineer(data);
    choices();
  });
}

init();
