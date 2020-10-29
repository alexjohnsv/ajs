import chunk from '../chunk';

test('chunk', () => {
  expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
})
