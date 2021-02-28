const Employee = require('./employee');

class Manager extends Employee {
    constructor(office, name, id, email) {
        super(name, id, email);
        this.office = office;
    }

    getOffice() { return this.office };
    getClass() {return this.constructor.name}
}

module.exports = Manager;