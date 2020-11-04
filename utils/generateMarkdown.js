function badge(license){
  if(license === "None"){
    return ""
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}
function licenseLink(license){
  if(license === "None"){
    return ""
  } else {
    return `* [License](#license)`
  }
}
function licenseSection(license){
  if(license === "None"){
    return ""
  } else {
    return `## License
This is licensed under ${license}    
`
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${badge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
${licenseLink(data.license)}
* [Tests](#tests)
* [Usage](#usage)
* [Contribute](#contribute)
* [Contact](#contact)

## Installation
${data.install}

${licenseSection(data.license)}

## Tests
To run tests, run this command ${data.test}

## Usage
${data.usage}

## Contribute
${data.contribute}

## Contact
If you have an questions email me at ${data.email}. 
You can also find me at my LinkedIn: ${data.linkedin}.
For more repos you can find me at: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
