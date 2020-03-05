// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee"); //We need to import the Employee clsass from the Employee.js file

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() { /////////////This was not included on the README but identified in the ManagerTest.js
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}
//const Manager = new Manager(3401); (Mo's code used to validate the Manager class)
//manager.printInfo();  

module.exports = Manager