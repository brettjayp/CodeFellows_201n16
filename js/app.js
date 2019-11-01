// /* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// declare global variables
var guessThreeDee, guessScubaDiving, guessTechJob, guessMOS, guessDog, userName = '';

// establish y/n function for guessing game questions
// Currently, this function is disabled. This is due to a class requirement.
// Once we are allowed to use functions again, this is a great start to refactoring my aboutMe questions into a function.
// Already works, just uncomment the function, and uncomment the 5 calls made below.
// 
// function guessMe (varName, answer, question, ifCorrect, ifIncorrect) {
//     varName = prompt(question).toLowerCase();
//     // console.log(`user input : ${varName}`);
//     while (!(varName === 'y' || varName === 'yes' || varName === 'n' || varName === 'no')) {
//         alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
//         // console.log('This was an INVALID answer. Try again.');
//         varName = prompt(question).toLowerCase();
//     }
//     if (answer === 'y'){
//         if (varName === 'y' || varName === 'yes') {
//             alert(`${ifCorrect}`);
//             // console.log('This was the CORRECT answer.');
//         } else if (varName === 'n' || varName === 'no') {
//             alert(`${ifIncorrect}`);
//             // console.log('This was NOT the correct answer.');
//         }
//     } else {
//         if (varName === 'n' || varName === 'no') {
//             alert(`${ifCorrect}`);
//             // console.log('This was the correct answer.');
//         } else if (varName === 'y' || varName === 'yes') {
//             alert(`${ifIncorrect}`);
//             // console.log('This was NOT the CORRECT answer.');
//         }
//     }
// }

// FORCED user interaction
alert('Hello, welcome to my page. Let\'s play a short guessing game!');
userName = prompt('First, what is your name?');
alert(`Thank you for coming to my webpage, ${userName}. Glad to have you here!`);
// console.log('user clicked ok on hello');
// guessMe('guessThreeDee','y','I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?','Yes! I also have an Anycubic Photon, and have two more printers ordered.','Actually, I do! I also have another printer, and two more coming soon.');
// guessMe('guessScubaDiving','y','I enjoy scuba diving. Do you think I\'m a divemaster?','Correct! I got certified as a divemaster while I lived on Oahu, I went on 70 dives while I was training!','I am, actually! I had a really great time getting the ceritification, I was living on Oahu at the time!');
// guessMe('guessTechJob','y','I work in technology and enjoy it. Have I worked in a data center?','That\'s right! I was a data center technician for Amazon.','I have, in fact! I was an apprentice with Amazon as a data center technician.');
// guessMe('guessMOS','y','I served in the military. Was I a grunt in the Army?','Great! I was an infantryman until April, 2018, stationed at JBLM.','Actually, yes, I was. I was stationed at JBLM until April last year as an infantryman.');
// guessMe('guessDog','y','I have one dog. Is she a German shepherd and a Siberian husky?',`She is, yes! She has so much energy! Her name is Thora.\nThank you for playing my game, ${userName}!`,`Acutally I do! She\'s almost a year and half, and has so much energy. Her name is Thora.\nThank you for playing my game, ${userName}!`);

guessThreeDee = prompt('I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?').toLowerCase();
// console.log(`user input : ${varName}`);
let answer = 'y';
while (!(guessThreeDee === 'y' || guessThreeDee === 'yes' || guessThreeDee === 'n' || guessThreeDee === 'no')) {
    alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
    // console.log('This was an INVALID answer. Try again.');
    guessThreeDee = prompt('I like 3D printing, and have a couple printers. Do I have a Prusa i3 MK3S?').toLowerCase();
}
if (answer === 'y'){
    if (guessThreeDee === 'y' || guessThreeDee === 'yes') {
        alert('Yes! I also have an Anycubic Photon, and have two more printers ordered.');
        // console.log('This was the CORRECT answer.');
    } else if (guessThreeDee === 'n' || guessThreeDee === 'no') {
        alert('Actually, I do! I also have another printer, and two more coming soon.');
        // console.log('This was NOT the correct answer.');
    }
} else {
    if (guessThreeDee === 'n' || guessThreeDee === 'no') {
        alert('Yes! I also have an Anycubic Photon, and have two more printers ordered.');
        // console.log('This was the correct answer.');
    } else if (guessThreeDee === 'y' || guessThreeDee === 'yes') {
        alert('Actually, I do! I also have another printer, and two more coming soon.');
        // console.log('This was NOT the CORRECT answer.');
    }
}

guessScubaDiving = prompt('I enjoy scuba diving. Do you think I\'m a divemaster?').toLowerCase();
// console.log(`user input : ${varName}`);
answer = 'y';
while (!(guessScubaDiving === 'y' || guessScubaDiving === 'yes' || guessScubaDiving === 'n' || guessScubaDiving === 'no')) {
    alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
    // console.log('This was an INVALID answer. Try again.');
    guessScubaDiving = prompt('I enjoy scuba diving. Do you think I\'m a divemaster?').toLowerCase();
}
if (answer === 'y'){
    if (guessScubaDiving === 'y' || guessScubaDiving === 'yes') {
        alert('Correct! I got certified as a divemaster while I lived on Oahu, I went on 70 dives while I was training!');
        // console.log('This was the CORRECT answer.');
    } else if (guessScubaDiving === 'n' || guessScubaDiving === 'no') {
        alert('I am, actually! I had a really great time getting the ceritification, I was living on Oahu at the time!');
        // console.log('This was NOT the correct answer.');
    }
} else {
    if (guessScubaDiving === 'n' || guessScubaDiving === 'no') {
        alert('Correct! I got certified as a divemaster while I lived on Oahu, I went on 70 dives while I was training!');
        // console.log('This was the correct answer.');
    } else if (guessScubaDiving === 'y' || guessScubaDiving === 'yes') {
        alert('I am, actually! I had a really great time getting the ceritification, I was living on Oahu at the time!');
        // console.log('This was NOT the CORRECT answer.');
    }
}

guessTechJob = prompt('I work in technology and enjoy it. Have I worked in a data center?').toLowerCase();
// console.log(`user input : ${varName}`);
answer = 'y';
while (!(guessTechJob === 'y' || guessTechJob === 'yes' || guessTechJob === 'n' || guessTechJob === 'no')) {
    alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
    // console.log('This was an INVALID answer. Try again.');
    guessTechJob = prompt('I work in technology and enjoy it. Have I worked in a data center?').toLowerCase();
}
if (answer === 'y'){
    if (guessTechJob === 'y' || guessTechJob === 'yes') {
        alert('That\'s right! I was a data center technician for Amazon.');
        // console.log('This was the CORRECT answer.');
    } else if (guessTechJob === 'n' || guessTechJob === 'no') {
        alert('I have, in fact! I was an apprentice with Amazon as a data center technician.');
        // console.log('This was NOT the correct answer.');
    }
} else {
    if (guessTechJob === 'n' || guessTechJob === 'no') {
        alert('That\'s right! I was a data center technician for Amazon.');
        // console.log('This was the correct answer.');
    } else if (guessTechJob === 'y' || guessTechJob === 'yes') {
        alert('I have, in fact! I was an apprentice with Amazon as a data center technician.');
        // console.log('This was NOT the CORRECT answer.');
    }
}

guessMOS = prompt('I served in the military. Was I a grunt in the Army?').toLowerCase();
// console.log(`user input : ${varName}`);
answer = 'y';
while (!(guessMOS === 'y' || guessMOS === 'yes' || guessMOS === 'n' || guessMOS === 'no')) {
    alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
    // console.log('This was an INVALID answer. Try again.');
    guessMOS = prompt('I served in the military. Was I a grunt in the Army?').toLowerCase();
}
if (answer === 'y'){
    if (guessMOS === 'y' || guessMOS === 'yes') {
        alert('Great! I was an infantryman until April, 2018, stationed at JBLM.');
        // console.log('This was the CORRECT answer.');
    } else if (guessMOS === 'n' || guessMOS === 'no') {
        alert('Actually, yes, I was. I was stationed at JBLM until April last year as an infantryman.');
        // console.log('This was NOT the correct answer.');
    }
} else {
    if (guessMOS === 'n' || guessMOS === 'no') {
        alert('Great! I was an infantryman until April, 2018, stationed at JBLM.');
        // console.log('This was the correct answer.');
    } else if (guessMOS === 'y' || guessMOS === 'yes') {
        alert('Actually, yes, I was. I was stationed at JBLM until April last year as an infantryman.');
        // console.log('This was NOT the CORRECT answer.');
    }
}

guessDog = prompt('I have one dog. Is she a German shepherd and a Siberian husky?').toLowerCase();
// console.log(`user input : ${varName}`);
answer = 'y';
while (!(guessDog === 'y' || guessDog === 'yes' || guessDog === 'n' || guessDog === 'no')) {
    alert('Please enter either a y/n or yes/no answer, thank you. Try again!');
    // console.log('This was an INVALID answer. Try again.');
    guessDog = prompt('I have one dog. Is she a German shepherd and a Siberian husky?').toLowerCase();
}
if (answer === 'y'){
    if (guessDog === 'y' || guessDog === 'yes') {
        alert(`She is, yes! She has so much energy! Her name is Thora.\nThank you for playing my game, ${userName}!`);
        // console.log('This was the CORRECT answer.');
    } else if (guessDog === 'n' || guessDog === 'no') {
        alert(`Acutally I do! She's almost a year and half, and has so much energy. Her name is Thora.\nThank you for playing my game, ${userName}!`);
        // console.log('This was NOT the correct answer.');
    }
} else {
    if (guessDog === 'n' || guessDog === 'no') {
        alert(`She is, yes! She has so much energy! Her name is Thora.\nThank you for playing my game, ${userName}!`);
        // console.log('This was the correct answer.');
    } else if (guessDog === 'y' || guessDog === 'yes') {
        alert(`Acutally I do! She's almost a year and half, and has so much energy. Her name is Thora.\nThank you for playing my game, ${userName}!`);
        // console.log('This was NOT the CORRECT answer.');
    }
}

// end of line, do not proceed
