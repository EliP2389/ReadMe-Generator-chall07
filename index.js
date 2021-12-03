// TODO: Include packages needed for this application
var { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const questions = require('./questions')
const { writeFileSync } = require('fs')






// TODO: Create an array of questions for user input
// const questions = []


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}
    


// TODO: Create a function to initialize app
function init() { 
    prompt (questions)
    .then(generateMarkdown)
    .then((readmeToSave) => {
        writeFileSync("README.md", readmeToSave)
    })
       
}

// Function call to initialize app
init();

