const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const employeeList = [];
let id = 1;

const newRoster = () => {

}

const newEmployeeGen = async (role) => {
    const newEmployee = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the ${role}'s name?`
            },
            {
                type: 'input',
                name: 'email',
                message: `What is ${role}'s e-mail address?`
            }
        ]).then(async (data) =>{
                const _data = data; 
                switch(role) {
                    case 'manager':
                        await inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'office',
                                    message: `What is the ${role}'s office number?`
                                }]).then((data) => {
                                        const newManager = new Manager(data.office, role, _data.name, id, _data.email);
                                        employeeList.push(newManager);
                                    }
                                )
                    break;
                    case 'engineer':
                        await inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'github',
                                    message: `What is the ${role}'s github page?`
                                }]).then((data) => {
                                        const newEngineer = new Engineer(data.github, role, _data.name, id, _data.email);
                                        employeeList.push(newEngineer);
                                    }
                                )
                    break;
                    case 'intern':
                        await inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'school',
                                    message: `What is the ${role}'s school?`
                                }]).then((data) => {
                                        const newIntern = new Intern(data.school, role, _data.name, id, _data.email);
                                        employeeList.push(newIntern);
                                    }
                                )
                    break;
                }
                id++;
            } 
        )
        
        console.log(employeeList);
        newEmployeeGen('intern');
}

newEmployeeGen('manager')