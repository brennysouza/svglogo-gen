const fs = require('fs');
const inquirer = require('inquirer');
const logo = require('./logo.svg');
// This code below imports the parent and child classes of the shapes allowing them to be used here in this file. 
const { Shapes, Triangle, Circle, Square } = require('./lib/shapes');



const prompt = [
    {
        type: 'input',
        message: 'Please enter a monogram of three letters that best represents your brand, logo, or business.',
        name: 'Monogram',
    },
    {
        type: 'input',
        message: 'Please enter in a color for your logo monogram.',
        name: 'Monogram Color',
    },
    {
        type: 'list',
        message: 'Please choose a logo shape to use for your logo.',
        name: 'Shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'Please enter in a color for your logo shape.',
        name: 'Shape Color',
    },
];

function init() {
    inquirer.prompt(questions).then((responses, data) => { 
        const logoContent = logo.generateLogo({
            Title: responses.Title,
            Description: responses.Description,
            Installation: responses.Installation,
            Usage: responses.Usage,
            License: responses.License,
            Contribution: responses.Contribution,
            Tests: responses.Tests,
            GitHub: responses.GitHub.replace(/\s+/g, '-'),
            Email: responses.Email,
        });

        writeToFile('logo.svg', logoContent);
    });
}

// Function call to initialize app
init();
