// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')

const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
// const questions = []
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },

        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information About yourself?',
            default: true
        },

        {
            title: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your ReadMe'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Write a detailed description of your project'
        },

        {
            type: 'input',
            name: 'link',
            message: 'Add screenshots of project'
        },
        
        {
            type: 'confirm',
            name: 'confirmCollaborators',
            message: 'Do you want to list any collaborators on this project?',
            default: true
        },

        {
           type: 'input',
           name: 'collaborate',
           message: 'List the collaborators that worked on this project',
           when: ({ confirmCollaborators }) => confirmCollaborators
        }
    ])
 }


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

questions()