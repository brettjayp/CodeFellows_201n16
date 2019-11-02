// /* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// declare global variables
let guessThreeDee, guessScubaDiving, guessTechJob, guessMOS, guessDog, userName = '';
let tallyCorrect = 0;

// establish y/n function for guessing game questions
// Currently, this function is disabled. This is due to a class requirement.
// Once we are allowed to use functions again, this is a great start to refactoring my aboutMe questions into a function.
// Already works, just uncomment the function, and uncomment the 5 calls made below.
// 
function guessMe (varName, answer, question, ifCorrect, ifIncorrect) {
    varName = prompt(question).toLowerCase();
    // console.log(`user input : ${varName}`);
    while (!(varName === 'y' || varName === 'yes' || varName === 'n' || varName === 'no')) {
        alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
        // console.log('This was an INVALID answer. Try again.');
        varName = prompt(question).toLowerCase();
    }
    if (answer === 'y'){
        if (varName === 'y' || varName === 'yes') {
            alert(`${ifCorrect}`);
            tallyCorrect++;
            // console.log('This was the CORRECT answer.');
        } else if (varName === 'n' || varName === 'no') {
            alert(`${ifIncorrect}`);
            // console.log('This was NOT the correct answer.');
        }
    } else {
        if (varName === 'n' || varName === 'no') {
            alert(`${ifCorrect}`);
            tallyCorrect++;
            // console.log('This was the correct answer.');
        } else if (varName === 'y' || varName === 'yes') {
            alert(`${ifIncorrect}`);
            // console.log('This was NOT the CORRECT answer.');
        }
    }
}

// FORCED user interaction
alert('Hello, welcome to my page. Let\'s play a short guessing game!');
userName = prompt('First, what is your name?');
alert(`Thank you for coming to my webpage, ${userName}. Glad to have you here!`);
// console.log('user clicked ok on hello');
guessMe('guessThreeDee','y','I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?','Yes! I also have an Anycubic Photon, and have two more printers ordered.','Actually, I do! I also have another printer, and two more coming soon.');
guessMe('guessScubaDiving','y','I enjoy scuba diving. Do you think I\'m a divemaster?','Correct! I got certified as a divemaster while I lived on Oahu, I went on 70 dives while I was training!','I am, actually! I had a really great time getting the ceritification, I was living on Oahu at the time!');
guessMe('guessTechJob','y','I work in technology and enjoy it. Have I worked in a data center?','That\'s right! I was a data center technician for Amazon.','I have, in fact! I was an apprentice with Amazon as a data center technician.');
guessMe('guessMOS','y','I served in the military. Was I a grunt in the Army?','Great! I was an infantryman until April, 2018, stationed at JBLM.','Actually, yes, I was. I was stationed at JBLM until April last year as an infantryman.');
guessMe('guessDog','y','I have one dog. Is she a German shepherd and a Siberian husky?',`She is, yes! She has so much energy! Her name is Thora.\nThank you for playing my game, ${userName}!`,`Acutally I do! She\'s almost a year and half, and has so much energy. Her name is Thora.\nThank you for playing my game, ${userName}!`);



// 
// QUESTION SIX:
// - Takes in a NUMERIC input as the answer, prompting the user to guess a number
// - Four chances to answer
// - Uses alert to indicate if guess is too high or too low
// - After all attempts exhausted, gives the user the answer
// 
let randomNumber = Math.floor(Math.random() * 100);
let randomNumberAttempt = 0;
console.log(`randomNumber game: random number assigned is: ${randomNumber}`);
for (randomNumberAttempt; randomNumberAttempt < 4; randomNumberAttempt++) {
    let randomNumberGuess = prompt('Let\'s play a short game! Try to guess a number, up to 100. You\'ll have 4 attempts, good luck!');
    while (isNaN(randomNumberGuess)) {
        alert(`Woah, ${userName}! This is a numbers game, and you entered ${randomNumberGuess} instead. Please enter a number! Remember, guess from 0 to 100.`);
        randomNumberGuess = prompt('Try to guess a number again, up to 100. Good luck!');
    }
    if (parseInt(randomNumberGuess) === randomNumber) {
        alert(`Great job, ${userName}! You guessed it right! Have you thought about being a street performer? You could do some great math tricks!`);
        tallyCorrect++;
        break;
    } else if (randomNumberGuess < randomNumber - 10 && randomNumberAttempt < 3) {
        alert(`Hey, great guess ${userName}, but you're not very close. Your guess was more that 10 too low.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, try again!`);
    } else if (randomNumberGuess < randomNumber - 10 && randomNumberAttempt === 3) {
        alert(`Hey, great guess ${userName}, but you're not very close. Your guess was more that 10 too low.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, the answer was ${randomNumber}.`);
    } else if (randomNumberGuess > randomNumber + 10 && randomNumberAttempt < 3) {
        alert(`Hey, great guess ${userName}, but you're not very close. Your guess was more that 10 too high.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, try again!`);
    } else if (randomNumberGuess > randomNumber + 10 && randomNumberAttempt === 3) {
        alert(`Hey, great guess ${userName}, but you're not very close. Your guess was more that 10 too high.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, the answer was ${randomNumber}.`);
    } else if (randomNumberGuess < randomNumber && randomNumberAttempt < 3) {
        alert(`Oh darn, you're so close ${userName}! Your guess was a little bit low.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, try again!`);
    } else if (randomNumberGuess < randomNumber && randomNumberAttempt === 3) {
        alert(`Oh darn, you're so close ${userName}! Your guess was a little bit low.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, the answer was ${randomNumber}.`);
    } else if (randomNumberGuess > randomNumber && randomNumberAttempt < 3) {
        alert(`Oh darn, you're so close ${userName}! Your guess was a little bit high.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, try again!`);
    } else if (randomNumberGuess > randomNumber && randomNumberAttempt === 3) {
        alert(`Oh darn, you're so close ${userName}! Your guess was a little bit high.\nYou've guessed ${randomNumberAttempt + 1} out of 4 times, the answer was ${randomNumber}.`);
    } else if (randomNumberGuess + 10 < randomNumber) {
        alert('return if randomNumberGuess + 10 < randomNumber is met');
    }
}

// 
// QUESTION SEVEN:
// - Could have many possible correct answers, stored in an array.
// - User has 6 attempts.
// - Guesses end either upon exhaustion of 6 attempts, or user guessing any correct answer.
// - Upon ending the game (win or lose), display all the correct answers to the user.
// - Consider using a loop of some sort for this question.
// 
let cookieIngredients = ['salmon', 'water', 'cornmeal', 'oatmeal', 'baking powder'];
let cookieAttempts = 0;
let cookieGuesses = [];
// console.log(`cookieIngredients game: array values are ${cookieIngredients}`);
alert(`${userName}, one of the labs we're going to do in this class is called Salmon Cookies. I've found a recipe online for them.\nHow about we play a guessing game? Try to guess one of the ingredients in salmon cookies!\nI'll give you six attempts.`);
let cookieGuess = prompt('Can you guess one of the ingredients in salmon cookies?').toLowerCase();
console.log(`In the cookieIngredients game, the user just guessed: ${cookieGuess}.`);
cookieGuesses.push(cookieGuess);
for (cookieAttempts; cookieAttempts < 6; cookieAttempts++) {
    if (cookieIngredients.indexOf(cookieGuess) > -1) {
        alert(`Wow, great job ${userName}! You must be pretty good in a kitchen already if you were able to guess that!\nThe ingredients for the salmon cookies I found online are: ${cookieIngredients}\nIt took you ${cookieAttempts + 1} attempts to guess correctly.`);
        tallyCorrect++;
        cookieAttempts = 6;
    } else if (cookieAttempts < 5) {
        cookieGuess = prompt(`Sorry ${userName}, that's not one of the ingredients. You've guessed ${cookieAttempts + 1} out of 6 times. You can keep guessing!`).toLowerCase();
        console.log(`In the cookieIngredients game, the user just guessed: ${cookieGuess}.`);
        cookieGuesses.push(cookieGuess);
    } else if (cookieAttempts === 5) {
        alert(`Bummer ${userName}, you've guessed 6 times, and that still wasn't correct. Thank you for playing though!\nThe ingredients in the cookies I found are: ${cookieIngredients}`);
    }
}

// 
// Just a simple alert to tell the visitor that I was keeping score, and what their score was.
alert(`${userName}, I'm sorry I didn't tell you this before, but I've been keeping a score of how many questions you were able to answer correctly.\nOut of 7 questions you could answer, you scored ${tallyCorrect}.`);


// end of line, do not proceed
