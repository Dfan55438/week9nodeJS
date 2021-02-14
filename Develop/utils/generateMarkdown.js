// TODO: Create a function that returns a license badge based on which license is passed in

const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");

// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if(license != 'None')
  {
    return `![yesBadge](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  else
  {
    return `![noBadge](https://img.shields.io/badge/license-None-lightgrey.svg)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if(license != 'None')
  {
    return `
    \n This project is protected under the following license '${license}'`
  }
  else
  {
    return `
    \n This project is not protected under any license`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) 
{return `
  # Project Title - ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  [Click here for more details](https://choosealicense.com/licenses/)

  ## Contributing
  ${data.credits}

  ## Tests
  ${data.tests}


  ## Questions?
  ${data.questions}
  \n ${data.email}
  \n [${data.githubUsername} Github Profile](https://github.com/${data.githubUsername}/)
  

`;}

module.exports = generateMarkdown;
