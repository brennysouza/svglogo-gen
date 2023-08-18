const { Shapes, Triangle, Circle, Square } = require('./lib/shapes');

describe('Shapes', () => {
    test('render method throws an error', () => {
        const shapes = new Shapes();
        expect(() => shapes.render()).toThrow('Any subclass that forgets to implement render method will trigger error');
    });
});

describe('Triangle', () => {
    test('render method will make SVG string for triangle shape with a color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual(
            '<polygon points="150,18 244, 182 56, 182" fill="blue" />'
        );
    });
});

describe('Square', () => {
    test('render method will make SVG string for square shape with a color', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual(
            '<rect x="50" y="50" width="200" height="200" fill="green" />'
        );
    });
});

describe('Circle', () => {
    test('render method will make SVG string for circle shape with a color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="red" />'
        );
    });
});