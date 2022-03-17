const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided ', () => {
    const obj = {
      name: 'Gustavo',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Gustavo&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Gustavo',
      profession: 'developer',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe(
      'name=Gustavo&profession=developer&abilities=JS,TDD',
    );
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Gustavo',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const queryString = 'name=Gustavo&profession=developer';

    expect(parse(queryString)).toEqual({
      name: 'Gustavo',
      profession: 'developer',
    });
  });

  it('should convert a query string of a sigle key-value pair to object', () => {
    const queryString = 'name=Gustavo';

    expect(parse(queryString)).toEqual({
      name: 'Gustavo',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const queryString = 'name=Gustavo&abilities=JS,TDD';

    expect(parse(queryString)).toEqual({
      name: 'Gustavo',
      abilities: ['JS', 'TDD'],
    });
  });
});
