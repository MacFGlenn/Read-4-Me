// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  // Title
  (title = "What is the name of your project?"),
  // Description
  (description = "Provide a description of the project"),
  // Table of Contents no question needed just add auto
  // Installation
  (install = "Enter instructions for installation"),
  // Usage
  (usage = "Provide reasons to use the project"),
  // License
  (license = "Choose which license you would like to use"),
  // Contributing
  (contribute = "Insert guidelines for how to help contribute to this project"),
  // Tests
  (tests = "Add any tests to use with your project"),
  // Questions
  (username = "Enter your github username"),
  (email = "Enter your email address"),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // writing files
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}.md`, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: title,
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: description,
    },
    {
      type: "input",
      name: "install",
      message: install,
    },
    {
      type: "input",
      name: "usage",
      message: usage,
    },
    {
      type: "checkbox",
      name: "license",
      message: license,
      choices: ["first", "second", "third"], // get the actual types
    },
    {
      type: "input",
      name: "contributing",
      message: contribute,
    },
    {
      type: "input",
      name: "tests",
      message: tests,
    },
    {
      type: "input",
      name: "username",
      message: username,
    },
    {
      type: "input",
      name: "email",
      message: email,
    },
  ]);
}

// Function call to initialize app
init()
  .then((data) => {
    return generateMarkdown(data);
  })
  .then((data) => {
    return writeToFile(data.title, data);
  });
