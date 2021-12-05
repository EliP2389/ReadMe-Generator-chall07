// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (license == "EPL") {
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    if (license == "BSD") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if (license == "MPL") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    // if (license == "MPL", "EPL", "BSD", "MPL") {
    //     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    //     [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
    //     [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    //     [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    // }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license == "MIT") {
//         return `https://opensource.org/licenses/MIT`
//     } if (license == "EPL") {
//         return `https://opensource.org/licenses/EPL-1.0`
//     } if (license == "BSD") {
//         return `https://opensource.org/licenses/BSD-3-Clause`
//     } if (license == "MPL") {
//         return `https://opensource.org/licenses/MPL-2.0`
//     } if (license == "MIT", "EPL", "BSD", "MPL") {
//         return `https://opensource.org/licenses/MIT
//         https://opensource.org/licenses/EPL-1.0
//         https://opensource.org/licenses/BSD-3-Clause
//         https://opensource.org/licenses/MPL-2.0`
//     }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    var renderBadge = renderLicenseBadge(data.license)
    // var renderLink = renderLicenseLink(data.license)
    return `

  
  ${renderBadge}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ##  Usage
  <img src="./assets/images/readme1-img.png">
  <img src="./assets/images/readme2-img.png">

  <a href="https://watch.screencastify.com/v/f1ToW1hfh8cVxxvjRppE">ReadMe Demo</a>

  ## Contributing
  ${data.collaborate}

  ## License
  ${data.license}

  ## Questions
  <a href="https://github.com/${data.link}">GitHub</a>
  You can reach me at ${data.email} for any further questions regasrding this project.



`
}

module.exports = generateMarkdown;