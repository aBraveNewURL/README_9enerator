// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.titleInput}
  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Testing](#testing)
* [Licensing](#license)


## Description
  ${data.description}
  
## Installation
  ${data.installation}
  
## Usage
  ${data.usage}

## Contribute
  ${data.contribute}

## Testing
  ${data.testing}

## Licensing 
  ${data.license}

`};

module.exports = generateMarkdown;
