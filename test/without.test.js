import without from '../without';

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([1, 2], 1, 2)).toEqual([]);
  expect(without([])).toEqual([]);
})
