// The shape class below is implemented as a parent class for the child shapes classes i.e. triangle, circle, square. 
class Shapes {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error("Any subclass that forgets to implement render method will trigger error")
    }
}

// Child classes below for the specific shapes
// Triangle class for users who choose a triangle style logo
class Triangle extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150,18 244, 182 56, 182" fill="${this.color}" />`;
    }
} 

// Circle class for users who choose a triangle style logo
class Circle extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
} 

// Square class for users who choose a triangle style logo
class Square extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
} 

// This code below exports the classes called out in order for them to be imported and used in other files i.e. index.js
module.exports = {
    Shapes, 
    Triangle,
    Circle,
    Square,
};
