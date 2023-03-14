const {circle, triangle, square} = require('./shape.js');

describe('circle', () => {
    it('should create a shape/color that is slected by the user', () => {
        const shape = new circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    })
});

describe('triangle', () => {
    it('should create a shape/color that is slected by the user', () => {
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});

describe('square', () => {
    it('should create a shape/color that is slected by the user', () => {
        const shape = new square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="purple" />');
    })
})