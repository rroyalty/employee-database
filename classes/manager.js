const Employee = require('./employee');

class Manager extends Employee {
    constructor(office, role, name, id, email) {
        super(role, name, id, email);
        this.office = office;
    }
}

module.exports = Manager;