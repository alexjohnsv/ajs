import head from '../head';

test('head', () => {
  expect(head([1, 2, 3])).toBe(1);
  expect(head([])).toBe(undefined);
})
