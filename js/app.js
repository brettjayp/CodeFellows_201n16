'use strict';

//console.log('proof of life');

var userInfo= prompt ("What is your name?");
//console.log('userInfo: ' , userInfo);

alert("welcome " + userInfo);

prompt ("Are you ok with this coding thing?");

userInfo= userInfo.toLowerCase();
//userInfo= userInfo.toUpperCase();

//console.log('userInfo: ' , userInfo);

if(userInfo.toLowerCase()==='yes' 
|| "y") 
{
    alert ("Great this guys is doing good");
    //console.log ('I like it too');
}


else {
    //console.log('you should check it out');
    alert ("Do not worry. we are on the same path");


}

alert("Thank you " + userInfo + " for your time. Good bye");
