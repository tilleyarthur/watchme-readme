const fs = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js');
const promptUser = require('./utils/prompt.js');
const emailValidator = require('email-validator');

// use async/await to write the readme file
writeToFile = async (fileName, fileText) => {
  try {
    await fs.writeFile(fileName, fileText);
    console.log();
  } catch (err) {
    console.log(err);
  }

}

init = () => {
  
  promptUser()
    .then(data => {

      let fileText = generateMarkdown(data);

      writeToFile('./dist/README.md', fileText);
    })
    .catch(err => {
      console.log(err);
    });
}

init();

