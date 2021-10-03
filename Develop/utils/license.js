renderLicenseBadge = license => {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unilicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

renderLicenseLink = license => {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GNU':
      return 'https://www.gnu.org/licenses/licenses.en.html';
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'Mozilla':
      return 'https://www.mozilla.org/en-US/MPL/';
    case 'Boost':
      return 'https://www.boost.org/users/license.html';
    case 'Unilicense':
      return 'https://unlicense.org/';
    default:
      return '';
  }
}

renderLicenseSection = license => {
  
  return license !== 'None' ? `This application is covered under the [${license}](${renderLicenseLink(license)}) license.` : `No licensing.`
}


module.exports = { renderLicenseBadge, renderLicenseSection };