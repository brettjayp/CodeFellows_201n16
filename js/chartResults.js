'use strict';

function draw(){
  var canvas = document.getElementById('chartResults');
  var ctx = canvas.getContext('2d');
  for(let i = 0; i < products.length; ++i){
    nextBar(5, i);
  }
  // var chart = new Chart(ctx, {
  //   // products.forEach(function(n){
  //   //   nextBar(5, );
  //   });
  // });
};

function nextBar(x, y){
  ctx.fillRect(x, 5 + (y * 30), 300, 25);
};

// var ctx = document.getElementById('chartResults').getContext('2d');
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'line',

//   // The data for our dataset
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45]
//     }]
//   },

//   // Configuration options go here
//   options: {}
// });
