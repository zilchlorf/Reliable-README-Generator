const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }, {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }, {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }, {
        type: 'list',
        name: "license",
        choices: ['MIT', 'GNU GPLv3', 'The Unlicense', 'Boost Software License 1.0']
    }, {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of the project'
    }, {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    }, {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    }, {
        type: 'input',
        name: 'contribute',
        message: 'Provide contribution guidelines for user collaboration.'
    }, {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for how to test the project.'
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
