const inquirer = require("inquirer")
const fs = require('fs')
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description for your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project',
        default: "npm i"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kinda license do you have',
        choices: [
            {name: "MIT", value:"MIT"}, 
            {name: "APACHE 2.0", value:"APACHE-2.0"}, 
            {name: "GPL 3.0", value:"GPL-3.0"}, 
            {name: "None", value: "None"}
        ]
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project',
        default: "npm test"
    },
    {
        type: 'input',
        name: "usage",
        message: 'How does someone need to know about using this project'
    },
    {
        type: 'input',
        name: "contribute",
        message: 'How does someone need to know about contributing to this project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        default: "francisawa"
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync( //takes location of file + what to write in the file
        path.join(__dirname, fileName), //dirname = C:/.../Proffessional-Readme... + /README.md
        generateMarkdown(data) //take data = {title: "Hello"} => `#${data.title}`
    )
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(response => {
        console.log(response)
        writeToFile("README.md",response)
        })
}

// function call to initialize program
init();
