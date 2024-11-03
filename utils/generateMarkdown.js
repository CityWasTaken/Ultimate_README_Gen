// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeContent) {
  const licenseBadge = renderLicenseBadge(readmeContent.licenseType);
  const licenseLink = renderLicenseLink(readmeContent.licenseType);
  const licenseSection = renderLicenseSection(readmeContent.licenseType);

  return `
  # ${readmeContent.projectName}
  - This project was created by ${readmeContent.userName}
  \n
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributions](#contributions)
  - [License](#license)
  - [Questions](#questions)
  \n
  ## Description
  ${readmeContent.description}
  ## Installation
  ${readmeContent.installation}
  ## Usage
  ${readmeContent.usage}
  ## Tests
  \`\`\`bash
  ${readmeContent.tests}
  \`\`\`
  ## Contributions
  ${readmeContent.userName}
  ## Questions
  Github: https://github.com/${readmeContent.github}
  \nEmail: ${readmeContent.email}
  ## License
  ${licenseSection}
  \n${licenseBadge}
  \n${licenseLink}
  `;
}

export default generateMarkdown;
