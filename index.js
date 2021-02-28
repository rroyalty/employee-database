const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const htmlGen = require('./htmlGen/htmlGen')

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const employeeList = [];
let id = 1;

const newEmployeeGen = async (role) => {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the ${role}'s name?`,
                validate: (name) => {
                    if (name === "") return `Please input a name.`;
                    else return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: `What is ${role}'s e-mail address?`,
                validate: (email) => {
                    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(!reg.test(email) || email === "") return `Please input a valid email.`;
                    else return true;
                }
            }
        ]).then(async (data) => {
                const _data = data; 
                switch(role) {
                    case 'manager':
                        await inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'office',
                                    message: `What is the ${role}'s office number?`,
                                    validate: (office) => {
                                        if (office === "") return `Please input an office number.`;
                                        else return true;
                                    }
                                }]).then((data) => {
                                        const newManager = new Manager(data.office, _data.name, id, _data.email);
                                        employeeList.push(newManager);
                                        console.log(newManager.getClass());
                                    }
                                )
                    break;
                    case 'engineer':
                        await inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'github',
                                    message: `What is the ${role}'s github username?`,
                                    validate: (github) => {
                                        if (github === "") return `Please input a github username.`;
                                        else return true;
                                    }
                                }]).then((data) => {
                                        const newEngineer = new Engineer(data.github, _data.name, id, _data.email);
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
                                    message: `What is the ${role}'s school?`,
                                    validate: (school) => {
                                        if (school === "") return `Please input a school.`;
                                        else return true;
                                    }
                                }]).then((data) => {
                                        const newIntern = new Intern(data.school, _data.name, id, _data.email);
                                        employeeList.push(newIntern);
                                    }
                                )
                    break;
                }
                id++;
                generalMenu();
            } 
        )
}

const generateHTML = (employeeList) => {
    let htmlText = htmlGen.top
    let UAT = "";
    let UAV = "";
    let icon = "";
    employeeList.forEach(element => {
        switch (element.getClass()) {
            case 'Manager':
                UAT = `Office`;
                UAV = `<p>${element.office}</p>`;
                icon = `bullhorn`;
            break;
            case 'Engineer':
                UAT = `Github`;
                UAV = `<br><a href="https://github.com/${element.github}" target="_blank">${element.github}</a>`;
                icon = `calculator`;
            break;
            case 'Intern':
                UAT = `School`;
                UAV = `<p>${element.school}</p>`;
                icon = `baby`;
            break;
        }
        htmlText = `${htmlText}\n${htmlGen.employee(element.getClass(), element.id, element.name, element.email, icon, UAT, UAV)}`
    });
    htmlText = `${htmlText}\n${htmlGen.bottom}`;

    fs.writeFile('./index.html', htmlText, (err) => {
        err ? console.log(err, "Something went wrong :(") : console.log('Team created - check the folder named *final* to see the finished product. ')
      })
}

const generalMenu = () => {
    inquirer
        .prompt([{
            type: 'list',
            name: 'next',
            message: 'What would you like to do now?',
            choices: ["Preview Employee List", "Add Engineer to Team", "Add Intern to Team", "Export HTML Page"]
        }]).then(async (data) => {
                switch (data.next) {
                    case "Preview Employee List":
                        console.log(employeeList);
                        generalMenu();
                    break;
                    case "Add Engineer to Team":
                        await newEmployeeGen('engineer');
                    break;
                    case "Add Intern to Team":
                        await newEmployeeGen('intern');
                    break;
                    case "Export HTML Page":
                        generateHTML(employeeList);
                    break;
                    
                }
            })

}

console.log(`Welcome to Ryan's Employee Page Generator.
To start, we'll input the information for the manager of the team:\n`);

newEmployeeGen('manager');