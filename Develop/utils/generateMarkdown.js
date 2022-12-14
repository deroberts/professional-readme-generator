// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//data is going to be the answers from the questions.
//need to add table of contents.
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## License:
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)} ${renderLicenseSection(data.license)}

  ## Description: 
    ${data.description}
  ## Table of Contents: 
    ${data.tableOfContents}
  
  ## Installation: 
    ${data.installation}
  ## Usage:
    ${data.usage}

  ## Contribution Guidelines: 
    ${data.contribution}
  ## Test Instructions: 
    ${data.instructions}

  ## Questions: 
  ### Github: ${data.username}
  ### Email: ${data.email} 
`;
}

module.exports = generateMarkdown;
