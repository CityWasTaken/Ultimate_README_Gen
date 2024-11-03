// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer"
import generateMarkdown from "./utils/generateMarkdown.js";
import Choices from "inquirer/lib/objects/choices.js";


// TODO: Create an array of questions for user input
async function createReadme() {
    const readmeContent = await inquirer.prompt([
        {
            message: 'What is the name of your project?',
            name: 'projectName'
        },
        {
            message: 'How would you describe your project?',
            name: 'description'
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
            message: 'What command would you type to run the test?',
            name: 'tests',
        },
        {
            message: 'Were there any contributions?',
            name: 'contributions',
            type: 'list',
            choices: ['Yes', 'No']
        },
        {
            message: 'Whats your Github username?',
            name: 'github',
        },
        {
            message: 'What is your email address?',
            name: 'email',
        },
        {
            message: 'What license is the project protected under?',
            name: 'licenseType',
            type: 'list',
            choices: ['MIT', 'Boost Software License 1.0', 'Apache License 2.0', 'None']
        },
        {
            message: 'Silly me! I almost forgot to ask; who do I have the pleasure of speaking with in case of questions?',
            name: 'userName'
        }
    ]);




    // TODO: Create a function to write README file
    function writeToFile() {
        fs.writeFile('README.md', data, (error) => {
            if (error) {
                return console.log('error');
            }

        });
        console.log('\nREADME file was created! DOPE!!')

    }

    const data = generateMarkdown(readmeContent);
    writeToFile();

}


// TODO: Create a function to initialize app
async function mainMenu() {
    // prompt the user to either create a README file or exit
    // show an option to create a markdown file
    const menuObj = await inquirer.prompt({
        message: `\n---------------\nULTIMATE README GEN\n---------------\nPlease select an option`,
        name: 'menuChoice',
        type: 'list',
        choices: ['Create README File', 'Exit']
    });

    switch (menuObj.menuChoice) {
        case 'Create README File':
            await createReadme();
            mainMenu();
            break;
        default:
            console.log('\nThanks for using the ULTIMATE README Gen! As you were!');
    }
}
//     // If the choose to create the file, then you prompt them with all the related questions

//     // Once you have the answerObj, you pass it to your generateMarkdown function {

//     const createMarkdown = generateMarkdown();

//     writeToFile('README.md', markdown);

// }

// // Function call to initialize app
mainMenu();
