// TODO: Create a function that returns a license badge based on which license is passed in

const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if(license != 'None')
  {
    return `https://img.shields.io/badge/license-${license}-blue.svg`
  }
  else
  {
    return `https://img.shields.io/badge/license-None-lightgrey.svg`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if(license != 'None')
  {
    return `# License 
    \n This project is protected under the following license '${license}'`
  }
  else
  {
    return `# License 
    \n This project is not protected under any license`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) 
{return `
  # Project Title - ${data.title} 
 
  ### Description
  ${data.description}

  #### Installation
  ${data.installation}

  #### Usage
  ${data.usage}
  
  ##### License
  ${data.license}

  ##### Credits
  ${data.credits}

  ##### Tests
  ${data.tests}

  ##### GithubUsername
  ${data.githubUsername}

  ##### Email
  ${data.email}

  ##### Questions
  ${data.questions}

`;}

module.exports = generateMarkdown;
