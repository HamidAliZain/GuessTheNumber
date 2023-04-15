import inquirer from "inquirer";
import figlet from "figlet";
import gradient from "gradient-string";
// Instruction For User 
console.log(gradient.pastel.multiline(`
Welcome To Guessing Game 
Instruction:
Guess The Number from 1 to 10
If you guess the right number you wil get 10 point`));
// Good Luck Section//
setTimeout(() => {
    figlet.text('Good Luck ', {
        font: 'Roman',
        horizontalLayout: 'universal smushing',
        verticalLayout: 'universal smushing',
        width: 100,
    }, function (err, data) {
        console.log(gradient.pastel.multiline(data));
    });
}, 1000);
 
setTimeout(() => {
    // Game Function
    async function GuessTheNumber() {
        let score = 0;
        let condition = true;
        let starTheGame = await inquirer.prompt({
            name: 'Enter',
            type: 'confirm',
            message: 'Press Enter To Start'
        });
        //Generate random Number //
 
        while (condition) {
            let generatedNum = Math.floor(Math.random() * 10);
            console.log(generatedNum);
    
            let UserNumber = await inquirer.prompt({
                name: 'UserNumber',
                type: 'number',
                message: 'Guess The Number from 1 to 10'
            });

            if (isNaN(UserNumber.UserNumber)) {
                condition = true
            } else {

                if (UserNumber.UserNumber == generatedNum) {
                    score += 10;
                    console.log(gradient('blue', 'blue')(`Your score is ${score}`));
                }
                else {
                    condition = false;
                    console.log(gradient('red', 'red')( `Your score is ${score} Try agian 😢😢 `));
                }
            }
        }
    }
    console.log(GuessTheNumber());
}, 2000);
