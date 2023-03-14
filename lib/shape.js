class shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    setColor(color) {
        this.shapecolor = color
    }
}

class circle extends shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
    }
}

class triangle extends shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182"  fill="${this.shapecolor}" />`
    }
}

class square extends shape{
    constructor(shapeColor){
        super(shapeColor);
    }
    render() {
        return `<rect x="0" y="0" width="200" height="200" fill="${this.shapecolor}" />`
    }
}

module.exports = {circle, triangle, square};