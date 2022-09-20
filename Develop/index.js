//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const util = require("util");

// array of questions for user input that goes into the generated .md file
const questions = [
    {
        type: 'input',
        name: 'titleInput',
        message: 'What would you like your project title to be?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub profile name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Which e-mail address would you like to associate with your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions for installing your project:',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please give a short description for how your project is to be used:',
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please add any pertinent contribution guidelines for your project:',
    },

    {
        type: 'input',
        name: 'testing',
        message: 'Please include any testing instructions that may be needed:',
    },

    {
        type: 'input',
        name: 'license',
        message: 'Please specify which licensing is to be used: (none, unlicensed, apache, or MIT)',
    },
];


// write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success! Enjoy your new README.md file!")
        }
    })
};

// initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data);
        })
};

// call initialize function!
init();