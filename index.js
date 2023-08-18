const fs = require('fs');
const inquirer = require('inquirer');
const logo = require('./logo.svg');
// This code below imports the parent and child classes of the shapes allowing them to be used here in this file. 
const { Triangle, Circle, Square } = require('./lib/shapes');



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

function generateSvgLogo(shape, shapeColor, monogram, monogramColor) {
    const logo = new shape();

    logo.setColor(shapeColor);

    const shapeSvg = logo.render();

    const monogramSvg = `<text x="20" y="40" font-size="30" fill="${monogramColor}">${monogram}</text>`;

    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${monogramSvg}
      ${shapeSvg}
    </svg>
  `;
}

function init() {
    inquirer.prompt(prompt).then((responses) => { 
        const { Shape, 'Shape Color': shapeColor, Monogram, 'Monogram Color': monogramColor } = responses; {
            let shape;
            switch (Shape) {
                case 'Circle':
                    shape = Circle;
                    break;
                case 'Square':
                    shape = Square;
                    break;
                case 'Triangle':
                    shape = Triangle;
                    break;
            }

        const logoSvgContent = generateSvgLogo(shape, shapeColor, Monogram, monogramColor);
        fs.writeFileSync('logo.svg', logoSvgContent);
        console.log('Generated logo.svg');

        }

        // writeToFile('logo.svg', logoContent);
    });
}

// Function call to initialize app
init();
