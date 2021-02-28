const Employee = require('./employee');

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() { return this.school};
    getClass() {return this.constructor.name}
}

module.exports = Intern;