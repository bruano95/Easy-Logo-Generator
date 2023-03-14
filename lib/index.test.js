const {circle, triangle, square} = require('../lib/shape.js');

describe('circle', () => {
    it('should create a shape that is slected by the user', () => {
        const shape = new circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})