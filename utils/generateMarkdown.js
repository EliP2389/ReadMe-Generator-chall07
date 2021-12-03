// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license == "MIT"){
       return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
       } 
       if(license == "EPL"){
       return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
       } 
       if(license == "BSD"){
           return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
       } 
       if(license == "MPL"){
           return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
       }
       if(license == "MPL", "EPL", "BSD", "MPL"){
           return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
           ![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)
           ![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
           ![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
       }
       return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license == "MIT"){
        return `https://opensource.org/licenses/MIT`
    } if(license == "EPL"){
        return `https://opensource.org/licenses/EPL-1.0`
    } if(license == "BSD"){
        return `https://opensource.org/licenses/BSD-3-Clause`
    }if(license == "MPL"){
        return `https://opensource.org/licenses/MPL-2.0`
    }if(license == "MIT", "EPL", "BSD", "MPL"){
        return `https://opensource.org/licenses/MIT
        https://opensource.org/licenses/EPL-1.0
        https://opensource.org/licenses/BSD-3-Clause
        https://opensource.org/licenses/MPL-2.0`
    }
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
var renderBadge = renderLicenseBadge(data.license)
var renderLink = renderLicenseLink(data.license)
  return `

  # ${data.title}



  ## Description
  ${data.description}



  ##  Usage
  ${data.link}


  
  ## Credits
   ${data.collaborate}


  
  ## License
  ${data.license}
  ${renderBadge}
  ${renderLink}

  
  
`;
}

module.exports = generateMarkdown;