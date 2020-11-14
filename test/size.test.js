import size from '../size';

test('size', () => {
  expect(size([1, 2, 3])).toBe(3);
  expect(size({'a': 1, 'b': 2})).toBe(2);
  expect(size('hello')).toBe(5);
})
