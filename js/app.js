'use strict';

//console.log('proof of life');

/*var userInfo= prompt ("What is your name?");
//console.log('userInfo: ' , userInfo);

alert("welcome " + userInfo);

var aboutCoding= prompt ("Are you ok with this coding thing?").toLowerCase(); //aboutCoding= aboutCoding.toLowerCase();


//console.log('aboutCoding: ' , aboutCoding);

if(aboutCoding ==='yes' 
|| aboutCoding === "y") 

{
    alert ("Great you are doing good");
    //console.log ('I like it too');

}

else {
    
    alert ("Do not worry. we are on the same path");
    //console.log('you should check it out');

}

var aboutCountry= prompt ("Are you from Jamica?").toLowerCase(); //aboutCoding= aboutCoding.toLowerCase();

//prompt ("are you from Jamaica?");

if(aboutCountry ==='yes' 
|| aboutCountry === "y") 

{
    alert ("cool! I have been in Jamaica last year. you have a beautiful country");
    //console.log ('I like it too');

}

else {
    
    alert ("I thought yoy were from Jamica");
    console.log('you should check it out');

}

var aboutMarriage= prompt ("by the way, Are you from married?").toLowerCase(); //aboutCoding= aboutCoding.toLowerCase();

//prompt ("are you from Jamaica?");

if(aboutMarriage ==='yes' 
|| aboutMarriage === "y") 

{
    alert ("Great!");
    //console.log ('I like it too');

}

else {
    
    alert ("just like me");
    console.log('you should check it out');

}

var whatAboutSoccer= prompt ("Do you follow soccer matches?").toLowerCase(); //aboutCoding= aboutCoding.toLowerCase();

//prompt ("are you from Jamaica?");

if(whatAboutSoccer ==='yes' 
|| whatAboutSoccer === "y") 

{
    alert ("Nice! I am a soccer fan too!");
    //console.log ('I like it too');

}

else {
    
    alert ("why? you should at least watch Champions league");
    console.log('you should check it out');

}

var aboutHobby= prompt ("Do you like collecting stamps?").toLowerCase(); //aboutCoding= aboutCoding.toLowerCase();

//prompt ("are you from Jamaica?");

if(aboutHobby ==='yes' 
|| aboutHobby === "y") 

{
    alert ("I had a great collection too!");
    //console.log ('I like it too');

}

else {
    
    alert ("So, what is your hobby?");
    console.log('you should check it out');

}*/

/*console.log("before parseint" +typeof userGuess)
console.log("after parseint " + typeof userGuess)*/

var myNumber=5;
//var yourNumber=0;

for (var i=0; i < 4 ; i++) {
    
    var userGuess= prompt ("Do you know what number I am thinking about?")
    userGuess= parseInt(userGuess)

    if(myNumber === userGuess)  {
    alert ("Wow! you got it. it is " + userGuess);
        //console.log("hello")

        break;
    }

    if(myNumber < userGuess) {
        alert ("Too high guess lower number ");
    
    }

     if(myNumber > userGuess) {
        alert ("Too low guess higher number ");        
    }

    //if(myNumber === userGuess){break;}
    /*else {
        
        alert ("Please try again");

    }*/
}
    //alert ("outside the for loop ");




//5alert("Thank you " + userInfo + " for your time. Good bye");


