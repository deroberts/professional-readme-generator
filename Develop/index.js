// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What is the license?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
        },
    ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
