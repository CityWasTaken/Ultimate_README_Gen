

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeContent) {
  return `
  # ${readmeContent.projectName}
  - This project was created by ${readmeContent.userName}
  \n
  ## Table of Contents
  \n
  ## Description
  ${readmeContent.description}
  ## Installation
  ${readmeContent.installation}
  ## Usage
  ${readmeContent.usage}
  ## Contributions
  ${readmeContent.contributions}
  ## License
  ${readmeContent.licenseType}
  `;
}

export default generateMarkdown;