import { assert } from 'chai';
import bind from './index';

const testFnc1 = (...args) => args;
const testFnc2 = (...args) => args;
const testFnc3 = (...args) => args;

const testObj = {};
const testArray = [];

it('bind', function() {
    let bound1 = bind(testFnc1, 1, testObj, '3', testArray, 5);
    let bound2 = bind(testFnc1, 1, testObj, '3', testArray, '5');
    let bound3 = bind(testFnc1, 1, testObj, '3', testArray, 5);
    let bound4 = bind(testFnc1, 1, testObj, '3', [], 5);
    let bound5 = bind(testFnc1, 1, {}, '3', testArray, 5);
    assert.strictEqual(bound1, bound3);
    assert.notStrictEqual(bound1, bound2);
    assert.notStrictEqual(bound1, bound4);
    assert.notStrictEqual(bound1, bound5);
});