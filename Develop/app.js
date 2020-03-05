const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function newManager() {
    inquirer.prompt([

        {
            name: "mangFirstName",
            type: "input",
            message: "What is your Manager's Name?",
        },

        {
            message: "What is your Manger's ID",
            type: "input",
            name: "mangId"
        },

        {
            message: "What is your Manager's email?",
            type: "input",
            name: "mangEmail"
        },

        {
            message: "What is your Manager's Office number?",
            type: "input",
            name: "mangOfficeNumber"
        },

        {
            message: "Which type of team member would you like to add?",
            type: "list",
            choices: ["Engineer", "Intern", "I don't want to add another employee"],
            name: "teamMember"
        },
    ]).then(answers => {
        var newManager = new Manager(answers.mangFirstname, answers.mangId, answers.mangEmail, answers.mangOfficeNumber, answers.teamMember)
//create if statement to call team member
        newIntern()

    });
}
function newIntern() {
    inquirer.prompt([

        {
            message: "What is your intern's Name?",
            type: "input",
            name: "intFirstName"
        },

        {
            message: "What is your interns's id",
            type: "input",
            name: "intId"
        },

        {
            message: "What is your intern's email?",
            type: "input",
            name: "intEmail"
        },

        {
            message: "What is your intern's School?",
            type: "input",
            name: "intSchool"
        },

        {
            message: "Which type of team member would you like to add?",
            type: "list",
            choices: ["Engineer", "Manager", "I don't want to add another employee"],
            name: "intTeamMember"
        },

    ]).then(answers => {
        var newIntern = new Intern(answers.intFirstname, answers.intId, answers.intEmail, answers.intSchool, answers.intTeamMember)

        newEngineer()

    });
}
function newEngineer() {
    inquirer.prompt([

        {
            message: "What is your engineer's Name?",
            type: "input",
            name: "engFirstName"
        },

        {
            message: "What is your engineer's id",
            type: "input",
            name: "engId"
        },

        {
            message: "What is your engineer's email?",
            type: "input",
            name: "engEmail"
        },

        {
            message: "What is your engineer's GitHub username?",
            type: "input",
            name: "engOfficeNumber"
        },

        {
            message: "Which type of team member would you like to add?",
            type: "list",
            choices: ["Engineer", "Manager", "I don't want to add another employee"],
            name: "engTeamMember"
        },

    ]).then(function (answers) {
        var newEngineer = new Engineer(answers.engFirstname, answers.engId, answers.engEmail, answers.engOfficeNumber, answers.engTeamMember)
    })
}
newManager()


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```