// geometry.js

class ShapeError extends Error {
    constructor(message) {
        super(message);
        this.name = "ShapeError";
    }
}

class Geometry {
    // Calcula el área de un círculo
    static calculateCircleArea(radius) {
        if (radius <= 0) {
            throw new ShapeError('Radius must be greater than zero');
        }
        return Math.PI * radius * radius;
    }

    // Calcula el perímetro de un círculo
    static calculateCirclePerimeter(radius) {
        if (radius <= 0) {
            throw new ShapeError('Radius must be greater than zero');
        }
        return 2 * Math.PI * radius;
    }

    // Calcula el área de un cuadrado
    static calculateSquareArea(side) {
        if (side <= 0) {
            throw new ShapeError('Side length must be greater than zero');
        }
        return side * side;
    }

    // Calcula el perímetro de un cuadrado
    static calculateSquarePerimeter(side) {
        if (side <= 0) {
            throw new ShapeError('Side length must be greater than zero');
        }
        return 4 * side;
    }

    // Calcula el área de un rectángulo
    static calculateRectangleArea(length, width) {
        if (length <= 0 || width <= 0) {
            throw new ShapeError('Length and width must be greater than zero');
        }
        return length * width;
    }

    // Calcula el perímetro de un rectángulo
    static calculateRectanglePerimeter(length, width) {
        if (length <= 0 || width <= 0) {
            throw new ShapeError('Length and width must be greater than zero');
        }
        return 2 * (length + width);
    }
}

// Ejemplo de uso
try {
    const circleRadius = 5;
    const squareSide = 4;
    const rectangleLength = 6;
    const rectangleWidth = 3;

    console.log(`Circle Area: ${Geometry.calculateCircleArea(circleRadius)}`);
    console.log(`Circle Perimeter: ${Geometry.calculateCirclePerimeter(circleRadius)}`);

    console.log(`Square Area: ${Geometry.calculateSquareArea(squareSide)}`);
    console.log(`Square Perimeter: ${Geometry.calculateSquarePerimeter(squareSide)}`);

    console.log(`Rectangle Area: ${Geometry.calculateRectangleArea(rectangleLength, rectangleWidth)}`);
    console.log(`Rectangle Perimeter: ${Geometry.calculateRectanglePerimeter(rectangleLength, rectangleWidth)}`);
    
} catch (error) {
    if (error instanceof ShapeError) {
        console.error(`Shape Error: ${error.message}`);
    } else {
        console.error(`Unknown Error: ${error.message}`);
    }
}
