#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const Persons = new Person();
const programStart = async (Person) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Whom would like to interect with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.Select == "staff") {
            console.log("You approach the staff room. Please feel free to ask any question.");
        }
        else if (ans.Select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you wish:"
            });
            const student = Person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                Persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(Persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Existing student list:");
                console.log(Persons.students);
            }
        }
        else if (ans.Select == "exit") {
            console.log("Exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(Persons);
