const { renderLicenseBadge, renderLicenseSection } = require('./license.js');

const testSection = require('./test-section');

module.exports =
  generateMarkdown = data => {
    return `# ${data.title} 
${renderLicenseBadge(data.license)}

<!-- screenshot here -->
<img src="" alt="">
## TABLE OF CONTENTS
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contribution)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Questions](#questions)
## Description
${data.desc}
## Installation
${data.install}
## Usage
${data.usage}
## Contribution
    
${data.contribute}
## Testing
${renderTestSection(data.test)}
## License
${renderLicenseSection(data.license)}
## Questions
You can find my GitHub profile [here](https://www.github.com/${data.github}).
Kindly reach out for any questions or pleasantries at <${data.email}>!
`;
  }

