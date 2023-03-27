// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please give a description of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please enter your installation instructions:',
        name: 'installInstr',
      },
      {
        type: 'input',
        message: 'Please enter your usage information:',
        name: 'usageInfo',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines"',
        name: 'contributionGuide',
      },
      {
        type: 'input',
        message: 'Please enter test instructions',
        name: 'testInstruc',
      },
      {
        type: 'list',
        message: 'Which license would you like to use?',
        choices: [
            'Apache License 2.0',
            'GNU general Public License v3.0',
            'MIT license',
            'BSD2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public LIcense v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1'
        ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUser',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      }
]

// TODO: Create a function to write README file
fs.writeFile('GeneratedReadme.md', content, function(error) {
    if (error) throw error;
    console.log('Problem generating readme, try again.')
})  


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(response.title, response)
    }) 
}

// Function call to initialize app
init();
