const {
    returnTwo, 
    greeting, 
    add,
    subtract,
    multiply,
    divide,
    exponent
} = require('./functions')

describe('testTwo', () => {
    const res = returnTwo()
    test('returns a number', () => {
        expect(typeof res).toBe('number')
    })
    test('this is to see if the function returnTwo returns the number 2', () => {
        expect(res).toEqual(2)
    })
})

describe('test greeting', () => {
    test('return string', () => {
        expect(typeof greeting('James')).toBe('string')
    })
    test('James', () => {
        expect(greeting('James')).toEqual('Hello, James.')
    })
    test('Jill', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    })
})

describe('test math funcs', () => {
    describe('add', () => {
        test('1+2', () => {
            expect(add(1,2)).toBe(3)
        })
        test('5+9', () => {
            expect(add(5,9)).toBe(14)
        })
        test('a+b', () => {
            expect(add('a','b')).toBeFalsy()
        })
    })
    describe('subtract', () => {
        test('1-2', () => {
            expect(subtract(1,2)).toBe(-1)
        })
        test('5-9', () => {
            expect(subtract(5,9)).toBe(-4)
        })
    })
    describe('multiply', () => {
        test('1*2', () => {
            expect(multiply(1,2)).toBe(2)
        })
        test('5*9', () => {
            expect(multiply(5,9)).toBe(45)
        })
    })
    describe('divide', () => {
        test('1/2', () => {
            expect(divide(1,2)).toBe(0.5)
        })
        test('10/5', () => {
            expect(divide(10,5)).toBe(2)
        })
        test('10/0', () => {
            expect(divide(10,0)).toBeFalsy()
        })
    })
    describe('exponent', () => {
        test('2^3', () => {
            expect(exponent(2,3)).toBe(8)
        })
        test('2^1/2', () => {
            expect(exponent(2,0.5)).toBe(Math.sqrt(2))
        })
        test('2^0', () => {
            expect(exponent(2,0)).toBe(1)
        })
    })
})