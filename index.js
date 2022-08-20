//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Create an array of questions for user input
const questions = [{
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
    message: 'What is your github username?',
    name: 'gitHubUrl',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
];

//Takes in response data and places into Readme structure

const generateReadme = ({ title, description, installation, usage, contributing, tests, license, gitHubUrl, email }) =>
    `# ${title}
![License](https://img.shields.io/badge/License-${license}-blue.svg)

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
GitHub: [${gitHubUrl}'s GitHub](https://github.com/${gitHubUrl})

Please reach me via email ${email}
`;

//Initializing
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const readMeContent = generateReadme(response);
            fs.writeFile('README.md', readMeContent, (err) =>
                err ? console.log(err) : console.log('README file generated'))

        })

};

//Function call to initialize app
init();
