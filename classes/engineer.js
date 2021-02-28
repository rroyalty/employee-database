const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() { return this.github };
    getClass() {return this.constructor.name}
}

module.exports = Engineer;
