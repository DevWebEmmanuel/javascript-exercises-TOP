const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Emmanuel', () => {
    expect(values.firstName).toEqual('Emmanuel');
  });
  test.skip('lastName is ADJIBABA', () => {
    expect(values.lastName).toEqual('ADJIBABA');
  });
  test.skip('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(1965);
  });
  test.skip('birthYear is 2006', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Emmanuel ADJIBABA and I am 20 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Emmanuel ADJIBABA', () => {
    expect(values.fullName).toEqual('Emmanuel ADJIBABA');
  });
  test.skip('age is 20', () => {
    expect(values.age).toEqual(20);
  });
});
