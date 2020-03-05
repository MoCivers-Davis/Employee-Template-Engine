// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee"); //We need to import the Employee clsass from the Employee.js file

class Engineer extends Employee{ //we want Engineer to have all of the properties and methods of the Employee class so we have to extends
    constructor(name, id, email, github) {
       super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer 