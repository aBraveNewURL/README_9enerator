// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   var badge = data.license
//   if (data.license == "MIT") {
//     let badge = ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
//   }
//   else if (data.license == "apache") {
//     let badge = ("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)")
//   }
//   if (data.license == "unlicensed") {
//     let badge = ("Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)")
//   }
//   else if (license == "undefined") {
//     return ("");
//   }
// };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.titleInput}    ![none](https://img.shields.io/badge/license-Unlicense-blue.svg)]
  
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribute)
* [Testing](#testing)
* [License](#license)
* [Questions](#github)
  


## Description
  ${data.description}
  
## Installation
  ${data.installation}
  
## Usage
  ${data.usage}

## Contributing
  ${data.contribute}

## Testing
  ${data.testing}

## License 
  ${data.license} 
  (http://unlicense.org/)
### Questions
If you have any questions, please reach me at:
- GitHub: (https://github.com/${data.github})
- E-mail: ${data.email}

`};

module.exports = generateMarkdown;
