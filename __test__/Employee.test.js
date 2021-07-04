const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee ('Fulano', 'fulanosutano@gmail.com', 'Role');
  expect(employee.email).toBe('fulanosutano@gmail.com');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.name).toBe('Fulano');
  expect(employee.role).toBe('Role');
});

test('gets employee name', () => {
  const employee = new Employee ('Fulano', 'fulanosutano@gmail.com', 'Role');
  expect(employee.getName()).toBe('Fulano');
});

test('gets employee id', () => {
  const employee = new Employee ();
  expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
  const employee = new Employee ('Fulano', 'fulanosutano@gmail.com', 'Role');
  expect(employee.getEmail()).toBe('fulanosutano@gmail.com');
});

test('gets employee role', () => {
  const employee = new Employee ('Fulano', 'fulanosutano@gmail.com', 'Role');
  expect(employee.getRole()).toBe('Role');
});