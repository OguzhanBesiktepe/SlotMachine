//How will we code this project?

// 1. Deposit some money.
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount.
// 4. Spin the slot machine.
// 5. Check if the User Won.
// 6. Give the user their winnings.
// 7. Play Again

//How to run the code in our Terminal?
// node project.js in correct directory

// This will use the packages we installed earlier requiring node.js
const prompt = require("prompt-sync")();


// Step 1: User Depositing Money.

// function deposit that will prompt the user to enter an amount of money
const deposit = () => {
    // while will have this to keep looping untill a valid result is returned from user.
  while (true){
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount); // convert String to a Number

    // If the User does not enter a valid number OR enters a monetary amount less than 0
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        // Then Print...
        console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositAmount
        }
    }
};

// Step 2: Determine Number of Lines to Bet On.

//Below Code is Very Similar to its structure in Step 1.

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.")
            } else {
                return numberOfLines;
            }
        }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();