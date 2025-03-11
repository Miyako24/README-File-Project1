// DONE: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// DONE: Create an array of questions for user input
const questions = [
  
  {
    type: 'input',
    message: 'What\'s the title of your project?',
    name: 'title',

  },

  {
    type: 'input',
    message: 'What is the description of you project?',
    name: 'description',
  },

  {

    type: 'input',
    message: 'What are the installation instructions for this project?',
    name: 'installation',


  },

  {
    type: 'input',
    message: 'What is usage information for your project?',
    name: 'usage',

  },

{
  type: 'input',
    message: 'What are the contributing guidelines for your project?',
    name: 'contributing',

},

{
  type: 'input',
    message: 'What are the test instructions for your project?',
    name: 'tests',

},

{
  type: 'list',
  message: 'Choose a license for your application:',
  name: 'license',
  choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},

{
  type: 'input',
  message: 'What is your GitHub username?',
  name: 'github',
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email',
}
];
  

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}

// DONE: Create a function to initialize app
function init() {  
    inquirer.prompt(questions).then((answers) => {
      const markdownContent = generateMarkdown(answers); // Generate markdown content
      writeToFile('README.md', markdownContent); // Write to file
  }).catch((error) => {
      console.error('Error during prompt:', error);
  });

}

// Function call to initialize app
init();
