const assert = require('assert');
Object.freeze(assert);
const check = require('./src/index.js');

const config1 = [
    ['(', ')']
];
const config2 = [
    ['(', ')'],
    ['[', ']']
];
const config3 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
];
const config4 = [
    ['|', '|']
];
const config5 = [
    ['(', ')'],
    ['|', '|']
];
const config6 = [
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
    ['7', '7'],
    ['8', '8']
];
const config7 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['|', '|']
];
const config8 = [
    ['(', '('],
    [']', ']']
]

it('should check if brackets sequence is correct 1', () => {
    assert.equal(check('()', config1), true);
});

it('should check if brackets sequence is correct 2', () => {
    assert.equal(check('((()))()', config1), true);
});

it('should check if brackets sequence is not correct 3', () => {
    assert.equal(check('())(', config1), false);
});

it('should check if brackets sequence is correct 4', () => {
    assert.equal(check('([{}])', config3), true);
});

it('should check if brackets sequence is not correct 5', () => {
    assert.equal(check('[(])', config2), false);
});

it('should check if brackets sequence is correct 6', () => {
    assert.equal(check('[]()', config2), true);
});

it('should check if brackets sequence is not correct 7', () => {
    assert.equal(check('[]()(', config2), false);
});

it('should check if brackets sequence is correct 8', () => {
    assert.equal(check('||', config4), true);
});

it('should check if brackets sequence is correct 9', () => {
    assert.equal(check('|()|', config5), true);
});

it('should check if brackets sequence is not correct 10', () => {
    assert.equal(check('|(|)', config5), false);
});

it('should check if brackets sequence is correct 11', () => {
    assert.equal(check('|()|(||)||', config5), true);
});

it('should check if brackets sequence is correct 12', () => {
    assert.equal(check('111115611111111222288888822225577877778775555666677777777776622222', config6), true);
});

it('should check if brackets sequence is not correct 13', () => {
    assert.equal(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6), false);
});

it('should check if brackets sequence is not correct 14', () => {
    assert.equal(check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6), false);
});

it('should check if brackets sequence is correct 15', () => {
    assert.equal(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6), true);
});

it('should check if brackets sequence is not correct 16', () => {
    assert.equal(check('[]][[]', config3), false);
});

it('should check if brackets sequence is not correct 17', () => {
    assert.equal(check('[]][[]', config2), false);
});

it('should check if brackets sequence is not correct 18', () => {
    assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7), false);
});

it('should check if brackets sequence is correct 19', () => {
    assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7), true);
});

it('should check if brackets sequence is correct 20', () => {
    assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7), true);
});

it('should check if brackets sequence is correct 21', () => {
    assert.equal(check('(]](', config8), true);
});

it('should check if brackets sequence is correct 22', () => {
    assert.equal(check('(](]', config8), false);
});