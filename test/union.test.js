import union from '../union';

test('union', () => {
  expect(union([2, 1], [2, 3])).toEqual([2, 1, 3]);
  expect(union([2, 1], [2, 3], [6])).toEqual([2, 1, 3, 6]);
  expect(union([], [])).toEqual([]);
})
