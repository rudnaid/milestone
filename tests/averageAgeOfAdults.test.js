const averageAgeOfAdults = require('../solutions/averageAgeOfAdults');

it('should return the average age of all users (only adults, over 18s)', () => {
  const adult1 = {
    id: 2136523,
    name: 'Kirandeep Farrington',
    age: 30,
  };
  const adult2 = {
    id: 4733631,
    name: 'Sumaiya Bridges',
    age: 24,
  };
  const adult3 = {
    id: 4733631,
    name: 'Becky Clarke',
    age: 60,
  };

  expect(averageAgeOfAdults([adult1, adult2, adult3]))
    .toStrictEqual(38);
});

it('should return the average age of all users (one adult, one at 18 yo exactly).', () => {
  const eighteener = {
    id: 8743534,
    name: 'Becky Clarke',
    age: 18,
  };

  const adult = {
    id: 2136523,
    name: 'Kirandeep Farrington',
    age: 30,
  };
  expect(averageAgeOfAdults([eighteener, adult]))
    .toStrictEqual(24);
});

test('should return the average age of all users (two at 18 yo exactly).', () => {
  const eighteener1 = {
    id: 8743534,
    name: 'Becky Clarke',
    age: 18,
  };

  const eighteener2 = {
    id: 2136523,
    name: 'Kirandeep Farrington',
    age: 18,
  };
  expect(averageAgeOfAdults([eighteener1, eighteener2]))
    .toStrictEqual(18);
});

test('should return the average age of all users (two adults, two underages).', () => {
  const adult1 = {
    id: 2136523,
    name: 'Kirandeep Farrington',
    age: 30,
  };
  const adult2 = {
    id: 4733631,
    name: 'Sumaiya Bridges',
    age: 24,
  };
  const underage1 = {
    id: 4733632,
    name: 'Anna-Marie Farley',
    age: 16,
  };

  const underage2 = {
    id: 3242342,
    name: 'Katie-Louise Rodrigues',
    age: 14,
  };

  expect(averageAgeOfAdults([adult1, adult2, underage1, underage2]))
    .toStrictEqual(27);
});

test('should return the average age of all users (all underage).', () => {
  const underage1 = {
    id: 4733632,
    name: 'Anna-Marie Farley',
    age: 16,
  };

  const underage2 = {
    id: 3242342,
    name: 'Katie-Louise Rodrigues',
    age: 14,
  };

  expect(averageAgeOfAdults([underage1, underage2]))
    .toStrictEqual(NaN);
});
