// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var img = new Image();
  if (license === "Open License") {
    return (img.src = "../images/community.png");
  } else if (license === "MIT License") {
    return (img.src = "../images/arrows.png");
  } else if (license === "GNU General Public License") {
    return (img.src = "../images/cycle.png");
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Open License") {
    console.log("dang ok");
  } else if (license === "MIT License") {
  } else if (license === "GNU General Public License") {
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Open License") {
    console.log("dang ok");
  } else if (license === "MIT License") {
  } else if (license === "GNU General Public License") {
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact](#contact)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contribution

${data.contributing}

## Tests

${data.tests}

## Contact

Github: ${data.username}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
