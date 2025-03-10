const {sum , capitalize, reverseString} = require('./practice');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Captializes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});