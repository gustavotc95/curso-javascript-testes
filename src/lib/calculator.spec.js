const { sum } = require('./calculator');

it('should sum 2 an 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 an 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', 2)).toBe(4);
});

it('should throw an error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sum('a', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum([2, 2], 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2], [2, 2]);
  }).toThrowError();

  expect(() => {
    sum(true, 2);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum({ number: 2 }, 2);
  }).toThrowError();

  expect(() => {
    sum(2);
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
