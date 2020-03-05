// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { //getName Method
        return this.name;

    }
    getId() {
        return this.id;

    }

    getEmail() {
        return this.email; //return stops executing the function and if there is a value it returs that value.
    }
    getRole() {
        return "Employee"
    }
}
module.exports = Employee; //exporting the name of the class