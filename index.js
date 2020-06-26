// require fs
const fs = require("fs");
// require inquirer
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
// https://www.npmjs.com/package/inquirer#questions
const questions = [
   {
       type: "input",
       name:"username",
       message: "What is your Github username?",
   },
   {
        type: "input",
        name:"email",
        message: "What is your email?",
    },
    {
        type: "input",
        name:"title",
        message: "What is your project name?",
    },
    {
        type: "input",
        name:"description",
        message: "Give a short description of your project",
    },
    {
        type: "list",
        name:"license",
        message: "What license is your project under?",
        choices: ["MIT", "Apache", "GNU GPL", "Eclipse"],
    },
    {
        type: "input",
        name:"install",
        message: "Please provide instructions for installing the program?",
    },
    {
        type: "input",
        name:"tests",
        message: "What command do you want to use to run tests?",
    },
    {
        type: "input",
        name:"using",
        message: "What should user know about using this repo?",
    },
    {
        type: "input",
        name:"contributing",
        message: "What should user know about contributing to this repo?",
    },
];

  

function init() {
inquirer
    .prompt(questions)
    .then(function(data) {
  
        fs.writeFile("SampleREADME.md", generateMarkdown(data), function(err) {
        if (err) throw err;
        console.log("Success, you generated a new README!");
      });
    });
   };


   
init();

module.exports = {
    init: init,
};