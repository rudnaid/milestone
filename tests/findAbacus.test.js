const findAbacus = require('../solutions/findAbacus');

it('3 objects, should return 1', () => {
  const obj0 = {
    'name': 'Janos',
    'age': 30,
  };
  const obj1 = {
    'name': 'Abacus',
    'abacus': true,
  };
  const obj2 = {
    'index': 2,
  };
  expect(findAbacus([obj0, obj1, obj2]))
    .toStrictEqual(1);
});

it('3 objects, should return 2', () => {
  const obj0 = {
    'year': 2004,
    'value': 'key',
  };
  const obj1 = {
    'name': true,
    'age': 'yes',
  };
  const obj2 = {
    'index': 2,
    'year': 2004,
    'value': 'key',
    'abacus': true,
    'name': true,
    'age': 'yes',
  };
  expect(findAbacus([obj0, obj1, obj2]))
    .toStrictEqual(2);
});

it('2 objects, should return null', () => {
  const obj0 = {
    'year': 2004,
    'value': 'key',
  };
  const obj1 = {
    'name': true,
    'age': 'yes',
  };
  expect(findAbacus([obj0, obj1]))
    .toStrictEqual(null);
});

it('0 objects, should return null', () => {
  expect(findAbacus([]))
    .toStrictEqual(null);
});

it('2 objects, one has Abacus false, should return 1', () => {
  const obj0 = {
    'abacus': false,
    'year': 2004,
    'value': 'key',
  };
  const obj1 = {
    'name': true,
    'age': 'yes',
    'abacus': true,
  };
  expect(findAbacus([obj0, obj1]))
    .toStrictEqual(1);
});
