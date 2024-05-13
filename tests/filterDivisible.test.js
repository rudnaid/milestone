const filterDivisible = require('../solutions/filterDivisible');

test('number is 3 and all numbers are divisible by 3', () => {
  expect(filterDivisible([3, 6, 9, 12], 3))
    .toStrictEqual([3, 6, 9, 12]);
});

test('number is 2 and not all numbers are divisible by 2', () => {
  expect(filterDivisible([4, 6, 9, 12], 2))
    .toStrictEqual([4, 6, 12]);
});

test('number is 10 and none of the numbers are divisible by 10', () => {
  expect(filterDivisible([4, 6, 9, 12], 10))
    .toStrictEqual([]);
});

test('number is 0 and it should return null', () => {
  expect(filterDivisible([0, 4, 6, 9, 12], 0))
    .toStrictEqual(null);
});

test('number is 2 and the array is empty', () => {
  expect(filterDivisible([], 2))
    .toStrictEqual([]);
});

test('number is 6 and there are numbers divisible by 6', () => {
  expect(filterDivisible([2, 3, 4, 5, 8, 16, 24], 6))
    .toStrictEqual([24]);
});
