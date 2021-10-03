const inquirer = require("inquirer");
const fs = require('fs');
const makeReadme = require('./makeReadme');

inquirer.prompt ([
    // {
    //     type: 'input',
    //     message: 'What is your name?',
    //     name: 'name',
    // },
    {
        // title prompt
        type: 'input',
        message: "What's the project's title?",
        name:'title',
    },
    {
        // description prompt
        type: 'input',
        message: 'Explain the motivation for the project, the reason to build it and what problem it solves.',
        name:'description',
    },
    {
        // installation instructions prompt
        type: 'input',
        message: 'Provide steps required to install this project.',
        name:'installation',
    },
    {
        // usage information prompt
        type: 'input',
        message: 'Provide instructions for use.',
        name:'usage',
    },
    {
        // contribution guidelines prompt
        type: 'input',
        message: 'Provide guidelines to contribute in this project.',
        name:'contributors',
    },
    {
        // test instructions prompt
        type: 'input',
        message: 'Provide instructions to test this application:',
        name:'test',
    },
    {
        // choose license prompt
        type: 'list',
        message: 'Select a license',
        choices: [
            'MIT',
            'GNU 2.0',
            'GNU 3.0',
            'Apache',
            'None',
        ],
        name:'license',
    },
    {
        // github prompt
        type:'input',
        message:"What's your Github username?",
        name:'github',
    },
    {
        //email prompt
        type:'input',
        message:"What's your email address?",
        name:'email', 
    },
]).then((data) => {
    // console.log(data);
        const readMe = 
        `
        # ${data.title}
## Description:
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contributors}
## Test
${data.test}
## License
${data.license}
${renderLicenseSection(data)}
## Questions
Use information below to contact me for questions or future collaboration.
GitHub: https://github.com/${data.github}
Email: ${data.email}
`;
    
fs.writeFile('README.md', readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
);
console.log(readMe)
});


// function includes to explain what license covers
function renderLicenseSection(license) {
    switch (license.license) {
      case 'MIT':
        return makeReadme.mitText

      case 'GNU 2.0':
        return makeReadme.gnu2Text

      case 'GNU 3.0':
        return makeReadme.gnu3Text
        
      case 'Apache':
          return makeReadme.apacheText

      case 'None':
        return ''
    }
}


// PENDING: Add a badge for that license is added near the top of the README 

