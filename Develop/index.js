// TODO: Include packages needed for this application
import inquirer from "inquirer"
import generateMarkdown from "./utils/generateMarkdown";
import Choices from "inquirer/lib/objects/choices";

const fs = require('fs');

// TODO: Create an array of questions for user input
async function createReadme() {
    const readmeContent = await inquirer.prompt([
        {
            message: 'What is the name of your project?',
            name: 'projectName'
        },
        {
            message: 'How would you describe your project?',
            nane: 'description'
        },
        {
            message: 'How does the user install this project?',
            name: 'installation'
        },
        {
            message: 'Can you explain how to use this application?',
            name: 'usage'
        },
        {
            message: 'Were there any contributions?',
            name: 'contributions',
            type: 'list',
            Choices: ['Yes', 'No']
        },
        {
            message: 'What license is the project protected under?',
            name: 'licenseType',
            type: 'list',
            Choices: ['MIT', 'Boost Software License 1.0', 'Apache License 2.0', 'None']
        },
        {
            message: 'Silly me! I almost forgot to ask; who do I have the pleasure of speaking with?',
            name: 'userName'
        }
    ]);



    const data = `
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

    // TODO: Create a function to write README file
    function writeToFile() {
        fs.writeFile('../README.md', data, (error) => {
            if (error) {
                return console.log('error');
            }
            
            console.log('README file was created! DOPE!!')
        });
        
    }


    // TODO: Create a function to initialize app
    // function init() {
    //     // prompt the user to either create a README file or exit

    //     // If the choose to create the file, then you prompt them with all the related questions

    //     // Once you have the answerObj, you pass it to your generateMarkdown function

    //     const createMarkdown = generateMarkdown();

    //     writeToFile('README.md', markdown);

    // }
}

// // Function call to initialize app
createReadme();
