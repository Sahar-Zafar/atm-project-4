#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgCyanBright("Welcome to ATM!"));
let currentBalance = 10000;
let pinCode = 9086;
let pinAnswer = await inquirer.prompt([
    {
        name: "myPin",
        type: "number",
        message: "Please enter four digit pincode:",
    },
]);
if (pinAnswer.myPin === pinCode) {
    console.log("Correct pincode.");
    let actionAns = await inquirer.prompt([
        {
            name: "Action",
            type: "list",
            message: "Please select one option: ",
            choices: ["Check balance", "Withdraw", "Fast Cash", "Deposit Cash"],
        },
    ]);
    if (actionAns.Action === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your withdraw amount: ",
            },
        ]);
        currentBalance -= amountAns.amount;
        console.log(`${amountAns.amount} has been excluded from your account. Now your remaining account balance is: ${currentBalance} `);
    }
    ;
    if (actionAns.Action === "Check balance") {
        console.log(`Your current account balance is: ${currentBalance} `);
    }
    ;
    if (actionAns.Action === "Fast Cash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select an option",
                choices: ["7000", "5000", "3000", "1000"],
            },
        ]);
        currentBalance -= cashAmount.fastCash;
        console.log(`${cashAmount.fastCash} has been excluded from your account. Now your remaining account balance is: ${currentBalance}`);
    }
    ;
    if (actionAns.Action === "Deposit Cash") {
        let cashAdd = await inquirer.prompt([
            {
                name: "cashIncrement",
                type: "number",
                message: "Please enter deposit amount: "
            },
        ]);
        currentBalance += cashAdd.cashIncrement;
        console.log(`${cashAdd.cashIncrement} has been added in your current account. Now your new account balance is: ${currentBalance} `);
    }
    ;
}
else {
    console.log("Incorrect! Please enter correct pincode.");
}
;
