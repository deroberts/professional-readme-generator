// TODO: Include packages needed for this application

const inquirer = require('inquirer');
    console.log("it works, yay!")
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contribution',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What is the license?',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'None'],
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'type something please' } }
        },
    ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt()
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();
