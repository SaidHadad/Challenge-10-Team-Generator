const Manager = require('../lib/Manager.js')

test('creates manager object', () => {
  const manager = new Manager('Fulano', 'fulanosutano@gmail.com', 'Manager', 101);
  expect(manager.email).toBe('fulanosutano@gmail.com');
  expect(manager.office).toEqual(expect.any(Number));
  expect(manager.role).toBe('Manager');
  expect(manager.name).toBe('Fulano');
});

test('gets the office number of the manager', () => {
  const manager = new Manager('Fulano', 'fulanosutano@gmail.com', 'Manager', 101);
  expect(manager.getOffice()).toEqual(expect.any(Number));
});