class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color[0].toUpperCase() + color.substring(1,color.length)
    }



    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(20, 30, 'yellow');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
