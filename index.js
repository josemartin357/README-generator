const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt ([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        // title prompt
        type: 'input',
        message: "What's the project's title?",
        name:'title',
    },
    {
        // description prompt
        type: 'input',
        message: 'Provide a description of your project:',
        name:'description',
    },
    {
        // installation instructions prompt
        type: 'input',
        message: 'Provide installation instructions for this project:',
        name:'installation',
    },
    {
        // usage information prompt
        type: 'input',
        message: 'What are the steps to use this application?',
        name:'usage',
    },
    {
        // contribution guidelines prompt
        type: 'input',
        message: 'Provide guidelines to contribute in this project:',
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
            'MIT License',
            'GNU General Public License (GPL) 2.0',
            'GNU General Public License (GPL) 3.0',
            'Apache License 2.0',
            'Other',
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
## Installation: 
${data.installation}
## Usage: 
${data.usage}
## Contribution: 
${data.contributors}
## Test:  
${data.test}
## License: 
${data.license}
## Contact me 
GitHub: https://github.com/${data.github}
Email: ${data.email}
`;
    
fs.writeFile('README.md', readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
);
console.log(readMe)
});






// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
