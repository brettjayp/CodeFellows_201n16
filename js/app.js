/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// declare global variables
var guessThreeDee, guessScubaDiving, guessTechJob, guessMOS, guessDog = '';

// establish y/n function for guessing game questions
function guessMe (variable, answer, question, ifYes, ifNo) {
    variable = prompt(question).toLowerCase();
    console.log(`user input : ${variable}`);
}

alert('Hello, play game, about me');
console.log('user clicked ok on hello');

guessThreeDee = prompt('I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?').toLowerCase();
console.log(`${guessThreeDee} : input for guessThreeDee`);
guessScubaDiving = prompt('I enjoy scuba diving. Do you think I\'m a divemaster?').toLowerCase();
console.log(`${guessScubaDiving} : input for guessScubaDiving`);
guessTechJob = prompt('I work in technology and enjoy it. Have I worked in a data center?').toLowerCase();
console.log(`${guessTechJob} : input for guessTechJob`);
guessMOS = prompt('I served in the military. Was I a grunt in the Army?').toLowerCase();
console.log(`${guessMOS} : input for guessMOS`);
guessDog = prompt('I have one dog. Is she a German shepherd and a husky?').toLowerCase();
console.log(`${guessDog} : input for guessDog`);


// end of line, do not proceed
