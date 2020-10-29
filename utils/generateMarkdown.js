function badge(license){
  if(license === "None"){
    return ""
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
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



## Installation
${data.install}

`;
}

module.exports = generateMarkdown;
