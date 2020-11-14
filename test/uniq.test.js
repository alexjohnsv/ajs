import uniq from '../uniq';

test('uniq', () => {
  expect(uniq([1, 2, 3, 3])).toEqual([1, 2, 3]);
  expect(uniq([])).toEqual([]);
  expect(uniq([1, 1])).toEqual([1]);
})
