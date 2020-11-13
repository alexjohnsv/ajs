import chunk from '../chunk';

test('chunk', () => {
  expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([1, 2, 3, 4, 5], 5)).toEqual([[1, 2, 3, 4, 5]]);
})
