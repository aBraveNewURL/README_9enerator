// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license == "MIT") {

//   }
//   if (license == "apache") {
//   }
//   if (license == "unlicensed") {
//   }

//   else if (license == null) {
//     return ("");
//   } 
   
// };

// apache: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// MIT: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// unlicense: [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)





// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.titleInput}
  
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Testing](#testing)
* [Licensing](#license)
* [Contact Info](#github)
  


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
  ${data.license} [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

### Contact Info
  ${data.github}
  ${data.email}
  
`};

module.exports = generateMarkdown;
