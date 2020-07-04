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
        [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

# ${title}

Table of Contents:
        
- [Project_Description](#Project_Description)
- [Usage](#usage)
- [Installation](#installation)
- [contribute](#contribute)
- [tests](#tests)
- [Contact](#Questions)


# Project_Description:
${description} 

# Usage:
 ${usage} 

# Installation:
 ${installation} 

# Contribute:
 ${contribute} 

# tests
How to test project functionality: ${tests} 

# Questions
Email address: ${email}
Github profile name: ${github}

# License
${license} © 2020 ${github}
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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