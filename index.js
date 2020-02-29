

var fs = require('fs');
var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "Name of Project?",
            name: "title"
        },
        {
            type: "input",
            message: "You are Participating in a ReadMe",
            name: "description"
        },
        {

            type: "checkbox",
            message: "License",
            name: "tableOfContents",
            choices: ["Apache 2.0", "BSD-3", "GNU", "MIT",]


        },
        {
            type: "input",
            message: "What is The Purpose of This Project ?",
            name: "usage"
        },
        {
            type: "input",
            message: "Why did you make this project?",
            name: "Why"
        },
        {
            type: "input",
            message: "Did you have any issues making this project?",
            name: "Issues"
        },
        {
            type: "input",
            message: "Are There any problems or bugs?",
            name: "tests"
        },
        {
            type: "input",
            message: "https://github.com/Jpvanderneut/HomeworkReadMe#readme",
            name: "questions",

            ///  

        }]).then(function (data) {



            fs.writeFile(generateMarkdown, JSON.stringify(data, null, '\t'), function (err) {

                if (err) {
                    return console.log(err);
                }

                console.log("Success!");
                // ("https://img.shields.io/eclipse-marketplace/last-update/https://jpvanderneut.github.io/GenerateReadMe/")
                // console.log(" https://api.github.com/jpvanderneut"),
            });
        });
