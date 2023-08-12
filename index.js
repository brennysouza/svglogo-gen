const fs = require('fs');
const inquirer = require('inquirer');

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
