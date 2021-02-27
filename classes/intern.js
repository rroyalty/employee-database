const Employee = require('./employee');

class Intern extends Employee {
    constructor(school, role, name, id, email) {
        super(role, name, id, email);
        this.school = school;
    }
}

module.exports = Intern;