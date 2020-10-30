import unzip from '../unzip';

test('unzip', () => {
  expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
})
