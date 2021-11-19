const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Should have length of 4', () => {
        expect(shuffleArray([3, 4, 5, 6])).toHaveLength(4)
    })
    test('Should be an array', () => {
        expect(Array.isArray(shuffleArray([1, 2, 3, 4]))).toBe(true);
    })

})