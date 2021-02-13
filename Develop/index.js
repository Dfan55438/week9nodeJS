// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
var generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
//1. Project Title
//2. Short description of the project
//3. Table of Contents
//3. Installation steps
//4. Usage
//5. License
//6. Credits - list collaborators
//7. Tests
//8. Questions
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
    },

    {
    type: 'input',
    name: 'description',
    message: 'Give a short description of your project'
    },
   
    {
    type: 'input',
    name: 'installation',
    message: 'List the installation steps'
    }, 

    {
    type: 'input',
    name: 'usage',
    message: 'What is the use of your project'
    },

    {
    type: 'list',
    name: 'license',
    message: 'Please choose a license below',
    choices: ['Apache','OpenBSD','GNU','MIT','None']
    }, 

    {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators'
    }, 

    {
    type: 'input',
    name: 'tests',
    message: 'List test cases'
    }, 

    {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username'
    }, 
   
    {
    type: 'input',
    name: 'email',
    message: 'Enter your email'
    },
    
    {
    type: 'input',
    name: 'questions',
    message: 'How can users reach you for additional questions'
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
   // return fs.writeFileSync(file, data,options, callback)
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() 
{
    inquirer.prompt(questions).then(inquirerResponses => 
        {
            console.log('File was succesfully generated');
            writeToFile('ReadMe.md', generateMarkdown({...inquirerResponses}))
        }) 
        
    
}

// Function call to initialize app
init();
