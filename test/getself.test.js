import { expect, test } from 'vitest'
import getself from '../src/index.js'

test('expects the number to return the number', () => {
    expect(getself(123)).toBe(123);
    expect(getself(-123)).toBe(-123);
    expect(getself(0)).toBe(0);
    expect(getself(Infinity)).toBe(Infinity);
    expect(getself(-Infinity)).toBe(-Infinity);
    expect(getself(NaN)).toBe(NaN);
    expect(getself(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
    expect(getself(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    expect(getself(Number.EPSILON)).toBe(Number.EPSILON);
    expect(getself(12.3)).toBe(12.3);
    expect(getself(-12.3)).toBe(-12.3);
    expect(getself(0.0)).toBe(0.0);
})

test('expects the string to return the string', () => {
    expect(getself('Hello')).toBe('Hello');
    expect(getself('')).toBe('');
    expect(getself('0')).toBe('0');
    expect(getself('hola' + 'mundo')).toBe('holamundo');
    expect(getself('hipótamo' + ' volador')).toBe('hipótamo volador');
})

test('expects booleans to return booleans', () => {
    expect(getself(true)).toBe(true);
    expect(getself(false)).toBe(false);
    expect(getself(!true)).toBe(false);
    expect(getself(!false)).toBe(true);
})

test('expects objects to return objects', () => {
    expect(getself({ key: 'value' })).toEqual({ key: 'value' });
    expect(getself({})).toEqual({});
    expect(getself({ key: 'value', key2: 'value2' })).toEqual({ key: 'value', key2: 'value2' });
})

test('expects new objects to return new objects', () => {
    expect(getself(new Date())).toEqual(new Date());
    expect(getself(new Date('2022-01-01'))).toEqual(new Date('2022-01-01'));

    class TestClass {
        constructor() {
            this.key = 'value';
        }
    }
    expect(getself(new TestClass())).toEqual(new TestClass());
    expect(getself(new TestClass())).not.toBe(new TestClass());
})

test('expects arrays to return arrays', () => {
    expect(getself([1, 2, 3])).toEqual([1, 2, 3]);
    expect(getself([])).toEqual([]);
    expect(getself([1, 'a', { key: 'value' }])).toEqual([1, 'a', { key: 'value' }]);
})

test('expects callbacks to return callbacks', () => {
    const f = (v) => v;
    expect(getself(f)).toBe(f);
})
