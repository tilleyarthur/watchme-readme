const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (required)',
      validate: titleInput => {
        if (!titleInput) {
          console.log('Please enter your project title.');
          return false;
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project (required)',
      validate: descrInput => {
        if (!descrInput) {
          console.log('You need a description for your project.');
          return false;
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the steps required to install your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for using this app',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'If any, list collaborators, external assets, or tutorials here',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Provide your license',
    },
    {
      type: 'input',
      name: 'badge',
      message: 'If any, provide badge',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide the features of your app (optional)',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide your tests for the application',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Provide your GitHub username (required): ',
      validate: gitHubInput => {
        if (!gitHubInput) {
          console.log('You must enter your GitHub username.');
          return false;
        }
        return true;
      },
    }
  ])
}

      

    