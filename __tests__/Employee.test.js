const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const employee = new Employee('John', '1', 'john@gmail.com');

    expect(employee.name).toBe('John')
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('john@gmail.com');

});

test('getName return the employee name', () => {
    const employee = new Employee('John', '1', 'john@gmail.com');

    expect(employee.getName()).toBe('John');
})

test('getId returns the employee ID', () => {
    const employee = new Employee('John', '1', 'john@gmail.com');

    expect(employee.getId()).toBe('1');
});

test('getEmail return the employee email', () => {
    const employee = new Employee('John', '1', 'john@gmail.com');

    expect(employee.getEmail()).toBe('john@gmail.com');
});

test('getRole returns Employee', () => {
    const employee = new Employee('John', '1', 'john@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})