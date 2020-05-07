import assert from 'assert';
import maskNIGPhone from '../src/index';

const testSamples = [
    { input: 'abc', expectedResult: 'abc', description: 'should return pristine value when receiving "abc"' },
    { input: 'abc1234567', expectedResult: 'abc1234567', description: 'should return pristine value when receiving "abc1234567"' },
    { input: 'abcdefghij', expectedResult: 'abcdefghij', description: 'should return pristine value when receiving "abcdefghij"' },
    { input: '9012345678', expectedResult: '(234) 90-1234-5678', description: 'should return (234) 90-1234-5678' },
    { input: '8198765432', expectedResult: '(234) 81-9876-5432', description: 'should return (234) 81-9876-5432' },
];


// describe('Array', () => {
//     describe('#indexOf', () => {
//         it('should return -1 when the value is not present', () => {
//             assert.equal([1,2,3].indexOf(4), -1)
//         })
//     })
// })

describe('Array', () => {
    testSamples.forEach(sample => {
        it(sample.description, () => {
            console.log(maskNIGPhone(sample.input))
            assert.equal(maskNIGPhone(sample.input), sample.expectedResult)
        })
    })
})