const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path")

const generateMarkdown = require ("./utils/generateMarkdown")

inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your github user name?"
    },
    {
      type: "input",
      name: "project",
      message: "what's the name of your project"
    },
    {
      type: "input",
      name: "email",
      message: "what is your email?"
    },
    {
      type: "list",
      name: "license",
      choices : ["MIT","Apache","None"],
      message: "select your license?"
    },
    {
      type: "input",
      name: "authors",
      message: "Names of authors"
    },
    {
      type: "input",
      name: "URL",
      message: "Enter your project URL."
    }
  ]).then(function(answer){
     createFile("README.md", generateMarkdown({...answer}))
  });

  function createFile(filename, data) {
      return fs.writeFileSync(path.join(process.cwd(),filename),data);
  }