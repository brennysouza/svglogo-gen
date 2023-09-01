const fs = require('fs');
const inquirer = require('inquirer');
// const logo = require('./logo.svg');
// This code below imports the parent and child classes of the shapes allowing them to be used here in this file. 
const { Circle, Square, Triangle } = require('./lib/shapes');


const prompt = [
    {
        type: 'input',
        message: 'Please enter a monogram of three letters that best represents your brand, logo, or business.',
        name: 'monogram',
    },
    {
        type: 'input',
        message: 'Please enter in a color for your logo monogram.',
        name: 'monogramColor',
    },
    {
        type: 'list',
        message: 'Please choose a logo shape to use for your logo.',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'Please enter in a color for your logo shape.',
        name: 'shapeColor',
    },
];

async function init() {

    try {
        const responses = await inquirer.prompt(prompt);

        const { shape, shapeColor, monogram, monogramColor } = responses; 
        
        let shapeClass;
            switch (shape) {
                case 'Circle':
                    shapeClass = Circle;
                    break;
                case 'Square':
                    shapeClass = Square;
                    break;
                case 'Triangle':
                    shapeClass = Triangle;
                    break;
            }

        const logoSvgContent = generateSvgLogo(shapeClass, shapeColor, monogram, monogramColor);
        const timeStamp = Date.now();
        const filePath = `examples/logo_${timeStamp}.svg`;
        fs.writeFileSync(filePath, logoSvgContent);
        console.log(`Generated logo.svg`);

        } catch (error) {
            console.error('An error occurred:', error);

        }
        
        // writeToFile('logo.svg', logoContent);
    }

    function generateSvgLogo(shapeClass, shapeColor, monogram, monogramColor) {
        const logo = new shapeClass();
        logo.setColor(shapeColor);
        const shapeSvg = logo.render();
    
        // Thise code is for the position and font size of the text based on the shape
        let textX, textY, fontSize;
    
        switch (shapeClass.name) {
            case 'Circle':
                textX = 150; // Center of the SVG
                textY = 100; // Center of the SVG
                break;
            case 'Square':
                textX = 150; // Center of the SVG
                textY = 130; // Center of the SVG
                break;
            case 'Triangle':
                textX = 145; // Center of the SVG
                textY = 140; // Center of the SVG
                break; 
        }
    
        fontSize = 30;
    
        const monogramSvg = `<text x="${textX}" y="${textY}" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${monogramColor}">${monogram}</text>`;
    
    
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shapeSvg}
          ${monogramSvg}
        </svg>
      `;
    }

// Function call to initialize app
init();
