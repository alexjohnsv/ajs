import join from '../join';

test('join', () => {
  expect(join(['a', 'b', 'c'], '.')).toBe('a.b.c');
})
