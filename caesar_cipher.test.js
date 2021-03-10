const caesarCipher = require('./caesar_cipher');

test('correctly ciphers given text left', () => {
  expect(caesarCipher('hello', 'left', 5)).toBe('czggj');
});

test('correctly ciphers given text right', () => {
  expect(caesarCipher('hello', 'right', 5)).toBe('mjqqt');
});

test('correctly ciphers given large shift left', () => {
  expect(caesarCipher('hello', 'left', 500)).toBe('byffi');
});

test('correctly ciphers given large shift right', () => {
  expect(caesarCipher('hello', 'right', 500)).toBe('nkrru');
});

test('correctly ciphers given no shift', () => {
  expect(caesarCipher('hello', 'left', 0)).toBe('hello');
});