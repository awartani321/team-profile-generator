const inquirer = require("inquirer");

const teamList = [];

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/htm-generator");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

async function promptManager() {
    console.log("Team's manager information.");

    const res = await inquirer
        .prompt([
            //name
            {
                type: "input",
                name: "name",
                message: "Manager's name?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Manager's name again.");
                        return false;
                    }
                },
            },
            //id
            {
                type: "input",
                name: "id",
                message: "Manager's id?",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Manager's id again.");
                        return false;
                    }
                },
            },
            //email
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: (val) => {
                    if (val && validateEmail(val)) {
                        return true;
                    } else {
                        console.log("Manager's email again.");
                        return false;
                    }
                },
            },
            //office
            {
                type: "input",
                name: "office",
                message: "Manager's office number?",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Manager's office number. again");
                        return false;
                    }
                },
            }

        ]);

    const manager = new Manager(res.name, res.id, res.email, res.office);
    teamList.push(manager);

    await promptMembers();

    generateHTMLPages();
}


async function promptEngineer() {
    console.log("Please enter information about the Engineer.");
    const res = await inquirer
        .prompt([
            //name
            {
                type: "input",
                name: "name",
                message: "Enginneer Name?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Engineer's name again.");
                        return false;
                    }
                },
            },
            //id
            {
                type: "input",
                name: "id",
                message: "Engineer's id?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Engineer's id again.");
                        return false;
                    }
                },
            },
            //email
            {
                type: "input",
                name: "email",
                message: "Engineer's email?",
                validate: (val) => {
                    if (val && validateEmail(val)) {
                        return true;
                    } else {
                        console.log("Engineer's email again.");
                        return false;
                    }
                },
            },
            //gitHub
            {
                type: "input",
                name: "github",
                message: "Engineer's GitHub?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Engineer's gitHub again.");
                        return false;
                    }
                },
            },
        ]);

    const engineer = new Engineer(res.name, res.id, res.email, res.github);

    return engineer;
}

async function promptIntern() {
    console.log("Please enter information about the Intern.");
    const res = await inquirer
        .prompt([
            //name
            {
                type: "input",
                name: "name",
                message: "Intern Name?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Intern's name again.");
                        return false;
                    }
                },
            },
            //id
            {
                type: "input",
                name: "id",
                message: "Intern's id?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Intern's id again.");
                        return false;
                    }
                },
            },
            //email
            {
                type: "input",
                name: "email",
                message: "Intern's email?",
                validate: (val) => {
                    if (val && validateEmail(val)) {
                        return true;
                    } else {
                        console.log("Intern's email again.");
                        return false;
                    }
                },
            },
            //school
            {
                type: "input",
                name: "school",
                message: "Intern's School?",
                validate: (val) => {
                    if (val) {
                        return true;
                    } else {
                        console.log("Intern's school again.");
                        return false;
                    }
                },
            },
        ]);

    const intern = new Intern(res.name, res.id, res.email, res.school);

    return intern;
}

async function promptMembers() {
    while (true) {
        const res = await inquirer
            .prompt([
                {
                    type: "list",
                    name: "role",
                    message: "What team member would you like to add next?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "Exit",
                    ],
                },
            ]);

        if (res.role == "Exit")
            break;

        if (res.role == "Engineer") {
            const enegineer = await promptEngineer();
            teamList.push(enegineer);
        }

        if (res.role == "Intern") {
            const intern = await promptIntern();
            teamList.push(intern);
        }
    }

}

async function generateHTMLPages() {
    await generateHTML(teamList);
}


promptManager();
