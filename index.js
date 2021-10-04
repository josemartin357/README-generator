const inquirer = require("inquirer");
const fs = require('fs');
const makeReadme = require('./makeReadme');

inquirer.prompt ([
    {
        // name prompt for licensing info
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
        // year prompt for licensing info
        type: 'input',
        name: 'year',
        message: 'In what year was this project developed?',
    },
    {
        // description prompt
        type: 'input',
        message: 'Explain what the project does and what problem it solves.',
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
])
.then((data) => {  
fs.writeFile('README.md', makeReadme.makeReadMe(data), (err) =>
    err ? console.log(err) : console.log('Success!')
);
// console.log(data)
});

