import concat from '../concat';

test('concat', () => {
  expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
})
