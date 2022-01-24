const inquirer = require("inquirer");
const fs = require('fs');
const { userInfo } = require("os");


// const (function-name) = () => {
//     -----code block-----}
const answers = () => {


return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
       type: 'input',
       message: 'Give a short description of your project.',
       name: 'description',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Do you want a License?',
        name: 'licence',
    },
    {
        type: 'input',
        message: 'Credits',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Test',
        name: 'test',

    },
    {
        type: 'input',
        message: 'Features',
        name: 'features',

    }
])
}

const data = ({title, description, installation, usage, licence, credits, test, features}) =>
 `# ${title}

## Description 
${description}

### Features
${features}

### Table of Contents
* [Usage](#Usage)
* [Installantion](#Installation)
* [Contributing](#Contributing)
* [Test](#Text)
* [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

### Credits
${credits}

### Test
${test}

![licence](https://img.shields.io/badge/License-${licence}-blue.svg)
`

//answers data


const content = () =>{
    answers()
    .then((userInput) => fs.writeFileSync(`README.md`, data(userInput)))
    // .then(() => console.log("generating")) 
    .catch((err) => {throw err})
}
content()