const inquirer = require("inquirer");
const fs = require("fs");
const {
  generateManager,
  generateIntern,
  generateEngineer,
} = require("./dist/generateHTML");
const startHtml = require("./src/start-html");
const endHtml = require("./src/end-html");
const css = require("./src/css");

// Initial manager questions
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
    wrapHTML("start");

    const managerHTML = generateManager(data);
    writeToFile(managerHTML);

    choices();
  });
}

// What kind of team member to add or finish building team
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
    if (data.teamChoice === "Intern") {
      internQuestions();
    } else if (data.teamChoice === "Engineer") {
      engineerQuestions();
    } else {
      wrapHTML("end");
    }
  });
}

// Questions for building an intern html snippet
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
    const internHTML = generateIntern(data);
    writeToFile(internHTML);
    choices();
  });
}

// Questions for building an engineer html snippet
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
    const engineerHTML = generateEngineer(data);
    writeToFile(engineerHTML);
    choices();
  });
}

// Starting and ending the html document
function wrapHTML(section) {
  if (section === "start") {
    let html = startHtml();
    let cssText = css();
    fs.writeFile("./generated-documents/index.html", html, (err) => {
      if (err) {
        console.log(err);
      }
    });
    fs.writeFile("./generated-documents/style.css", cssText, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else if (section === "end") {
    let html = endHtml();
    fs.appendFile("./generated-documents/index.html", html, (err) =>
      err ? console.log(err) : console.log("Successfully finished team!")
    );
  }
}

// Appends new team members to html document
function writeToFile(html) {
  fs.appendFile("./generated-documents/index.html", html, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// Starts application
init();
