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

function generateSvgLogo(shapeClass, shapeColor, monogram, monogramColor) {
    const logo = new shapeClass();
    logo.setColor(shapeColor);
    const shapeSvg = logo.render();

    // Thise code is for the position and font size of the text based on the shape
    let textX, textY, fontSize;

        switch (shapeClass.name) {
            case 'Circle':
                textX = 100; 
                textY = 100; 
                fontSize = 50;
                break;
            case 'Square':
                textX = 150; 
                textY = 150; 
                fontSize = 50;
                break;
            case 'Triangle':
                textX = 150; 
                textY = 110; 
                fontSize = 50;
                break;
        }

    // console.log(`Debug - textX: ${textX}, textY: ${textY}, fontSize: ${fontSize}`);

    const monogramSvg = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${monogramColor}">${monogram}</text>`;


    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSvg}
      ${monogramSvg}
    </svg>
  `;
}

async function init() {
    // inquirer.prompt(prompt).then((responses) => { 
    //     const { Shape, 'Shape Color': shapeColor, Monogram, 'Monogram Color': monogramColor } = responses; 
    //         let shape;
    //         switch (Shape) {
    //             case 'Circle':
    //                 shape = Circle;
    //                 break;
    //             case 'Square':
    //                 shape = Square;
    //                 break;
    //             case 'Triangle':
    //                 shape = Triangle;
    //                 break;

    try {
        const responses = await inquirer.prompt(prompt);

        const { shape, shapeColor, Monogram, monogramColor } = responses; 
        
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

        const logoSvgContent = generateSvgLogo(shapeClass, shapeColor, Monogram, monogramColor);
        fs.writeFileSync('logo.svg', logoSvgContent);
        console.log('Generated logo.svg');

        } catch (error) {
            console.error('An error occurred:', error);

        }
        
        // writeToFile('logo.svg', logoContent);
    }

// Function call to initialize app
init();
