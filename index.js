const fs = require('fs/promises');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const writeHtml = require('./src/page-template');
const employees = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your team managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'office',
        message : 'What is their office number?'
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]

const roleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: 'What is their postition?',
        choices: ['Engineer', 'Intern']
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is there ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github?'
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is there ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is their school?'
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]


function nextEmployee() {
    inquirer.prompt(roleQuestion).then(data => {
        if(data.role === 'Engineer') {
            inquirer.prompt(engineerQuestions).then(data => {
                console.log(data);
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                employees.push(engineer);
                if (data.newEmployee) {
                    nextEmployee(data);
                } else {
                    newFile();
                }
            });
        } else {
            inquirer.prompt(internQuestions).then(data => {
                console.log(data);
                const intern = new Intern(data.name, data.id, data.email, data.school)
                employees.push(intern);
                if (data.newEmployee) {
                    nextEmployee(data);
                } else {
                    newFile();
                }
            });
        }
    });
}

function manager() {
    inquirer.prompt(managerQuestions).then(data => {
        console.log(data);
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employees.push(manager);
        if(data.newEmployee) {
            nextEmployee();
        } else {
            newFile();
        }
    });
}

function newFile() {
    fs.writeFile('./dist/index.html', writeHtml(employees)).then(err => {
        if (err) {
            console.log('There was a problem with writing HTML');
        }
    });
    fs.copyFile('./src/style.css', './dist/style.css').then(err => {
        if (err) {
            console.log('There was a problem with copyin CSS.')
        }
    })
}

manager();