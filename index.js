const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// function call to initialize program
init();

// array of questions for user
async function init() {
    const { github, email, title, license, description, installation, usage, contribute, tests } = await inquirer.prompt([
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
            message: 'Please write a short description of the project:'
        }, {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        }, {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        }, {
            type: 'input',
            name: 'contribute',
            message: 'Provide contribution guidelines for user collaboration:'
        }, {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions for how to test the project:'
        }

    ])
    const HTML = buildHTML(github, email, title, license, description, installation, usage, contribute, tests)

    // function to write README file
    fs.writeFile(`README.md`, HTML, (err) => err && console.log('error in write file is: ', err));


    function buildHTML(github, email, title, license, description, installation, usage, contribute, tests) {
        return `

# ${title}

Table of Contents:
        
- [Project Description](#Project Description)
- [Usage](#usage)
- [Installation](#installation)
- [contribute](#contribute)
- [tests](#tests)
- [Contact](#email)


# Project Description:
${description} 

# Usage:
 ${usage} 

# Installation:
 ${installation} 

# Contribute:
 ${contribute} 

# How to test project functionality:
 ${tests} 

# Contact
Email address: ${email}
Github profile name: ${github}

# License
${license} © ${github} 
        `

    }

};









// ${title}


// Project Description:  ${description} 
//   Installation: ${installation} 
//   Usage: ${usage} 
//   Contribute: ${contribute} 
//   How to test project functionality: ${tests} 
// Github profile name: ${github}
//  Email address: ${email}


//   ${license} © ${github} 