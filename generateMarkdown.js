// Function to return a license badge based on the selected license
function renderLicenseBadge(license) {
  if (!license) return '';
  
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPL-3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache-2.0': '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD-3-Clause': '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  };

  return badges[license] || '';
}

// Function to return a license link
function renderLicenseLink(license) {
  if (!license) return '';

  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache-2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'BSD-3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };

  return links[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) return '';

  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

For any questions, contact me at [${data.email}](mailto:${data.email}).  
GitHub: [${data.github}](https://github.com/${data.github})
`;
}

export default generateMarkdown;
