const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github, role, name, id, email) {
        super(role, name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;
