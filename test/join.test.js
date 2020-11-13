import join from '../join';

test('join', () => {
  expect(join(['a', 'b', 'c'], '.')).toBe('a.b.c');
  expect(join(['a', '.', 'c'], '.')).toBe('a...c');
})
