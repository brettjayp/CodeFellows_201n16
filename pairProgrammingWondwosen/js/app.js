'use strict';

//console.log('proof of life');

var userInfo= prompt ('What is your name?');
//console.log('userInfo: ' , userInfo);

alert('welcome ' + userInfo);

function guessingGame(question,ifCorrect,ifIncorrect){
    var answer= prompt(question).toLowerCase();
    console.log(answer);

    if(answer ==='yes' || answer === 'y') {
        alert (ifCorrect);
        correctAnswers ++;
    } else {
        alert (ifIncorrect);
    }
}

var correctAnswers = 0;

guessingGame('Are you ok with this coding thing?','Great you are doing good.','Do not worry, we are on the same path.');
guessingGame('Are you from Jamaica?','cool! I have been in Jamaica last year. you have a beautiful country','I thought you were from Jamica');
guessingGame('by the way, Are you married?','Great!','just like me');
guessingGame('Do you follow soccer matches?','Nice! I am a soccer fan too!','why? you should at least watch Champions league');
guessingGame('Do you like collecting stamps?','I had a great collection too!','So, what is your hobby?');

function guessNumber(aNumber){

    for (var i=0; i < 4 ; i++) {
        var userGuess= prompt ('Do you know what number I am thinking about?');
        userGuess= parseInt(userGuess);

        if(aNumber === userGuess) {
            alert ('Wow! you got it. it is ' + userGuess);
            correctAnswers++;
            break;
        } else if (aNumber < userGuess) {
            if (i === 3) {
                alert('The answer was ' + aNumber);
            } else {
                alert ('Too high guess lower number ');
            }
        } else {
            if (i === 3) {
                alert('The answer was ' + aNumber);
            } else {
                alert ('Too low guess higher number ');
            }
        }
    }
}

guessNumber(5);

if (correctAnswers === 1){
    alert('Thank you ' + userInfo + ' for your time. You have answered ' + correctAnswers + ' question correctly. Good bye');
} else {
    alert('Thank you ' + userInfo + ' for your time. You have answered ' + correctAnswers + ' questions correctly. Good bye');
}
