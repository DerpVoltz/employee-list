const Intern = require('../lib/Intern');

test('creates new intern object', () => {
    const intern = new Intern('John', '1', 'john@gmail.com', 'Rice');
    
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('john@gmail.com');
    expect(intern.school).toBe('Rice')
});

test('getSchool returns school', () => {
    const intern = new Intern('John', '1', 'john@gmail.com', 'Rice');

    expect(intern.getSchool()).toBe('Rice');
});

test('getRole returns Intern', () => {
    const intern = new Intern('John', '1', 'john@gmail.com', 'Rice');

    expect(intern.getRole()).toBe('Intern');
});
