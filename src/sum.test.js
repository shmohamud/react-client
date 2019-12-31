const sum = require('./sum'); 
describe('Examining Syntax of Jest Tests', ()=> {
it('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(4);
});
});