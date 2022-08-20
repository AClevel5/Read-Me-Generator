// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please describe your project?',
    name: 'description',
},
{
    type: 'input',
    message: 'How do you install your program?',
    name: 'installation',
},
{
    type: 'input',
    message: 'How do you use your program?',
    name: 'usage',
},
{
    type: 'input',
    message: 'How do you contribute?',
    name: 'contributing',
},
{
    type: 'input',
    message: 'How do you test your program?',
    name: 'tests',
},
{
    type: 'list',
    message: 'What license did you use?',
    choices: [
        "MIT",
        "APACHE",
        "RUST",
        "OpenBSD",
        "WordPress",
    ],
    name: 'license',
},
{
    type: 'input',
    message: 'What is your github url?',
    name: 'gitHubUrl',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }

const generateReadme = ({title, description, installation, usage, contributing, tests, license, gitHubUrl, email}) =>
`# ${title}
![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## License
${license}

## Tests
${tests}

## Questions
github.com/${gitHubUrl}
Please reach me via email ${email}
`;

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const readMeContent = generateReadme(response);
        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('README file generated'))
        
    })
    
};

// Function call to initialize app
init();
