'use strict';

console.log('proof of life');

var userLike= prompt ("Do you like stranger things?");
//console.log('userLike: ', userLike);

userLike= userLike.toLowerCase();

console.log('userLike: ' , userLike);

if(userLike.toLowerCase()==='yes') {
    console.log ('I like it too');
}
else {
    console.log('you should check it out');
}