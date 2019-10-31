/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// declare global variables
var guessThreeDee, guessScubaDiving, guessTechJob, guessMOS, guessDog = '';

// establish y/n function for guessing game questions
function guessMe (varName, answer, question, ifCorrect, ifIncorrect) {
    varName = prompt(question).toLowerCase();
    console.log(`user input : ${varName}`);
    if (answer == 'y'){
        if (varName == 'y' || varName == 'yes') {
            alert(`${ifCorrect}`);
            console.log('This was the CORRECT answer.');
        } else if (varName == 'n' || varName == 'no') {
            alert(`${ifIncorrect}`);
            console.log('This was NOT the correct answer.');
        } else {
            alert('Please enter either a y/n or yes/no answer next time. Thank you!');
            console.log('This was an INVALID answer.');
        }
    } else {
        if (varName == 'n' || varName == 'no') {
            alert(`${ifCorrect}`);
            console.log('This was the correct answer.');
        } else if (varName == 'y' || varName == 'yes') {
            alert(`${ifIncorrect}`);
            console.log('This was NOT the CORRECT answer.');
        } else {
            alert('Please enter either a y/n or yes/no answer next time. Thank you!');
            console.log('This was an INVALID answer.');
        }
    }
    
}

alert('Hello, play game, about me');
console.log('user clicked ok on hello');

guessMe('guessThreeDee','y','I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?','Yes! I also have an Anycubic Photon, and have two more printers ordered.','Actually, I do! I also have another printer, and two more coming soon.');
guessMe('guessScubaDiving','y','I enjoy scuba diving. Do you think I\'m a divemaster?','Correct! I got certified as a divemaster while I lived on Oahu, I went on 70 dives while I was training!','I am, actually! I had a really great time getting the ceritification, I was living on Oahu at the time!');
guessMe('guessTechJob','y','I work in technology and enjoy it. Have I worked in a data center?','That\'s right! I was a data center technician for Amazon.','I have, in fact! I was an apprentice with Amazon as a data center technician.');
guessMe('guessMOS','y','I served in the military. Was I a grunt in the Army?','Great! I was an infantryman until April, 2018, stationed at JBLM.','Actually, yes, I was. I was station in JBLM until April last year as an infantryman.');
guessMe('guessDog','y','I have one dog. Is she a German shepherd and a Siberian husky?','She is, yes! She has so much energy! Her name is Thora.','Acutally I do! She\'s almost a year and half, and has so much energy. Her name is Thora.');

// guessThreeDee = prompt('I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?').toLowerCase();
// console.log(`${guessThreeDee} : input for guessThreeDee`);
// guessScubaDiving = prompt('I enjoy scuba diving. Do you think I\'m a divemaster?').toLowerCase();
// console.log(`${guessScubaDiving} : input for guessScubaDiving`);
// guessTechJob = prompt('I work in technology and enjoy it. Have I worked in a data center?').toLowerCase();
// console.log(`${guessTechJob} : input for guessTechJob`);
// guessMOS = prompt('I served in the military. Was I a grunt in the Army?').toLowerCase();
// console.log(`${guessMOS} : input for guessMOS`);
// guessDog = prompt('I have one dog. Is she a German shepherd and a husky?').toLowerCase();
// console.log(`${guessDog} : input for guessDog`);


// end of line, do not proceed
