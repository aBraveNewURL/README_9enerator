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
        message: 'Please specify which licensing is to be used: (none or MIT)',
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




// GIVEN a command-line application that accepts user input
//   WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README