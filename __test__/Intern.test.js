const Intern = require('../lib/Intern.js')

test('creates Intern object', () => {
  const intern = new Intern('Fulano', 'fulanosutano@gmail.com', 'Intern', 'Mengano');
  expect(intern.email).toBe('fulanosutano@gmail.com');
  expect(intern.school).toBe('Mengano');
  expect(intern.role).toBe('Intern');
  expect(intern.name).toBe('Fulano');
});

test('gets the Engineers Git', () => {
  const intern = new Intern('Fulano', 'fulanosutano@gmail.com', 'Intern', 'Mengano');
  expect(intern.getSchool()).toBe('Mengano');
});