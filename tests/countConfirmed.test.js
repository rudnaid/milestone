const countConfirmed = require('../solutions/countConfirmed');

const user1 = {
  id: 3242342,
  username: 'belakovacs12',
  email: 'bela@gmail.com',
  phone: '701231231',
  isConfirmed: true,
};

const user2 = {
  id: 2136523,
  username: 'lajosnagy',
  email: 'lajos@gmail.com',
  phone: '303214321',
  isConfirmed: true,
};

const user3 = {
  id: 8743534,
  username: 'akarki99',
  email: 'kazmer@gmail.com',
  phone: '206546547',
  isConfirmed: false,
};

test('It should return 0, if the array is empty.', () => {
  expect(countConfirmed([]))
    .toStrictEqual(0);
});

test('It should return 0, if the array contains only non confirmed users.', () => {
  const nonConfirmed1 = {
    id: 3242342,
    username: 'belakovacs12',
    email: 'bela@gmail.com',
    phone: '701231231',
    isConfirmed: false,
  };

  const nonConfirmed2 = {
    id: 2136523,
    username: 'lajosnagy',
    email: 'lajos@gmail.com',
    phone: '303214321',
    isConfirmed: false,
  };

  expect(countConfirmed([nonConfirmed1, nonConfirmed2]))
    .toStrictEqual(0);
});

test('It should return 1, if the array contain only 1, confimred user.', () => {
  const confirmed = {
    id: 3242342,
    username: 'belakovacs12',
    email: 'bela@gmail.com',
    phone: '701231231',
    isConfirmed: true,
  };

  expect(countConfirmed([confirmed]))
    .toStrictEqual(1);
});

test('It should return 3, if the array contains 3 confirmed users', () => {
  const confirmed1 = {
    id: 3242342,
    username: 'belakovacs12',
    email: 'bela@gmail.com',
    phone: '701231231',
    isConfirmed: true,
  };

  const confirmed2 = {
    id: 2136523,
    username: 'lajosnagy',
    email: 'lajos@gmail.com',
    phone: '303214321',
    isConfirmed: true,
  };

  const confirmed3 = {
    id: 8743534,
    username: 'akarki99',
    email: 'kazmer@gmail.com',
    phone: '206546547',
    isConfirmed: true,
  };

  expect(countConfirmed([confirmed1, confirmed2, confirmed3]))
    .toStrictEqual(3);
});

test('It should return 2, if the array contains 2 confirmed and 1 non confirmed users', () => {
  const confirmed1 = {
    id: 3242342,
    username: 'belakovacs12',
    email: 'bela@gmail.com',
    phone: '701231231',
    isConfirmed: true,
  };

  const confirmed2 = {
    id: 2136523,
    username: 'lajosnagy',
    email: 'lajos@gmail.com',
    phone: '303214321',
    isConfirmed: true,
  };

  const nonConfirmed1 = {
    id: 8743534,
    username: 'akarki99',
    email: 'kazmer@gmail.com',
    phone: '206546547',
    isConfirmed: false,
  };

  expect(countConfirmed([confirmed1, confirmed2, nonConfirmed1]))
    .toStrictEqual(2);
});
