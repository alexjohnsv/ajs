import tail from '../tail';

test('tail', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3]);
  expect(tail([])).toEqual([]);
  expect(tail([1])).toEqual([]);
})
