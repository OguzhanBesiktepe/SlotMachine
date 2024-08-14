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

//Step 4: Defining our Slot Machine Variables (Global)
// This is listed at the top so we can change these variables as needed.
// It will be in an Organized Structure with variables listing different amount for the payouts.

const ROWS = 3; // There will be 3 Rows in this Machine
const COLS = 3; // There will be 3 Columns in this Machine.

//Creating our Symbols using Objects in JS.

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

// How much each Symbol is Worth in Value. 

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,   
}

// Step 1: User Depositing Money.

// function deposit that will prompt the user to enter an amount of money
const deposit = () => {
    // while will have this to keep looping until a valid result is returned from user.
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

// Step 3: Collecting a Bet Amount:

//creating a function with parameter (non-constant variable) balance & lines
// Again this will be similar to Step 2 with some Parameter changes:
const getBet = (balance, lines) => {
    while (true){
        const bet = prompt("Enter the total bet per line: ")
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || (numberBet > balance / lines)) {
            console.log("Invalid bet, try again.")
            } else {
                return numberBet;
            }
        }
};

// Step 4 (Continuing): Randomly Spinning the Slot Machine:

const spin = () => { //creating a function called spin
    const symbols = []; //creating an empty array.
    
    //Creating a For Loop that will create 2 constants (symbol and count) which will take notice of our SYMBOL_COUNTS global variables listed previously at the top.
    for (const [symbol, count]of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i< count; i++){
            symbols.push(symbol); //insert new element into the array.
        }

    }

   const reels = []; //Nested Array
   for (let i = 0; i < COLS; i++){
        reels.push([]);
    const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length) //Math.random will grab a random Symbols we have (3) 
            const selectedSymbol = reelSymbols[randomIndex]; //Then select with our Array
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
   }

   return reels;
};

// changing this variable to let which is not-constant (changing). We will need a balance for the user to store.
let balance = deposit(); 
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines); //passing 2 parameters
const reels = spin();