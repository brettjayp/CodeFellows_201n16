'use strict';

// DOM objects
const displayEl = document.getElementById('displayContainer');
let catalog = [];
let lastThree = [-1, -1, -1];
let newThree = [-1, -1, -1];
let rounds = [0, 25]; // [current round, total rounds]
let jaySawn = [];

// PIMARY CONSTRUCTOR FUNCTION: This is our constructor function to build new products for the main feature. They each will be pushed to the catalog[] array.
// Playing around with using class instead of the traditional constructor function we're already using
class Product {
  constructor(title, source, alt) {
    // this.title, this.alt, this.src = title, alt, `../assets/${source}`;
    this.title = title;
    this.alt = alt;
    this.src = `../assets/${source}`;
    this.displayCount = 0;
    this.clickCount = 0;
    catalog.push(this);
  }
}
// random number helper
let randomMinMax = (min, max) => Math.floor((Math.random() * ((max - min))) + min);

// Here we build out catalog of products
new Product('bag', 'bag.jpg', 'An R2-D2 suitcase');
new Product('banana', 'banana.jpg', 'A banana slicer');
new Product('bathroom', 'bathroom.jpg', 'A tablet mount on a toilet paper holder');
new Product('boots', 'boots.jpg', 'A pair of pointless rain boots with open toes');
new Product('breakfast', 'breakfast.jpg', 'An all-in-one breakfast machine');
new Product('bubblegum', 'bubblegum.jpg', 'Bubblegum designed to look like meatballs');
new Product('chair', 'chair.jpg', 'A very uncomfortable tall chair');
new Product('cthulhu', 'cthulhu.jpg', 'An action figure of Cthulhu');
new Product('dog-duck', 'dog-duck.jpg', 'na');
new Product('dragon', 'dragon.jpg', 'na');
new Product('pen', 'pen.jpg', 'na');
new Product('pet-sweep', 'pet-sweep.jpg', 'na');
new Product('scissors', 'scissors.jpg', 'na');
new Product('shark', 'shark.jpg', 'na');
new Product('sweep', 'sweep.png', 'na');
new Product('tauntaun', 'tauntaun.jpg', 'na');
new Product('unicord', 'unicorn.jpg', 'na');
new Product('usb', 'usb.gif', 'na');
new Product('water-can', 'water-can.jpg', 'na');
new Product('wine-glass', 'wine-glass.jpg', 'na');

// // // CALL OUR FEATURE FUNCTION // // //
showThree();
// // // CALL OUR FEATURE FUNCTION // // //

// on completions of clicks:
function onComplete(){
  if(localStorage.getItem('busMallCatalog')){
    // let getJaySawn = localStorage.getItem('busMallCatalog');
    jaySawn = JSON.parse(localStorage.getItem('busMallCatalog'));
    for(let i = 0; i < catalog.length; ++i){
      jaySawn[i].displayCount+= catalog[i].displayCount;
      jaySawn[i].clickCount+= catalog[i].clickCount;
    }
  } else{
    catalog.forEach(function(n){
      jaySawn.push(n);
    });
    // jaySawn.push(catalog);
  }
  console.log(jaySawn);
  let setJaySawn = [];
  setJaySawn.push(JSON.stringify(jaySawn));
  console.log(`have stringified jaySawn:\n${setJaySawn}`);
  localStorage.setItem('busMallCatalog', setJaySawn);

  drawChart();
}

// EVENTS: We'll add an event listener that is active while our overall click count does not exceed our determined rounds. Upon reaching the limit, we will remove it.
displayEl.addEventListener('click', onClick);
// EVENTS: FUNCTION: On a valid click, we'll identify the object, increase its clickCount, increase the round count, and show three new products. If we've arrived at our round limit, we'll remove the event listener after rendering the
function onClick(event){
  let clickedId = event.target.id;
  let position = 0;
  if(clickedId === 'imageOne'){
    position = 1;
  } else if(clickedId === 'imageTwo'){
    position = 2;
  }
  ++catalog[newThree[position]].clickCount;
  ++rounds[0];
  if(rounds[0] < rounds[1]){
    showThree();
  } else if(rounds[0] >= rounds[1]){
    displayEl.removeEventListener('click', onClick);
    onComplete();
  }
}
// PRIMARY FUNCTION: Show three new products to the page. They will not repeat any of the previous round's images, and there will be no duplicates displayed. We also reset the newThree[] array and overwrite the lastThree[] array for tracking and to assist in avoiding repeats and duplicates.
function showThree(){
  lastThree = [newThree[0], newThree[1], newThree[2]];
  newThree = [-1, -1, -1];

  displayEl.innerHTML = '';

  randomProduct(0);
  randomProduct(1);
  randomProduct(2);
}
// PRIMARY FUNCTION: By using renderProduct() and randomMinMax(), select a random product and render it to the page, dependent on position (0, 1, 2). Also set the current newThree[] position to reflect which image is being shown, and increment that image's displayCount value.
function randomProduct(position){
  let integer = randomMinMax(0, catalog.length);
  if(position === 0){
    while(integer === lastThree[0] || integer === lastThree[1] || integer === lastThree[2]){
      integer = randomMinMax(0, catalog.length);
    }
  } else if(position === 1){
    while(integer === lastThree[0] || integer === lastThree[1] || integer === lastThree[2] || integer === newThree[0]){
      integer = randomMinMax(0, catalog.length);
    }
  } else if(position === 2){
    while(integer === lastThree[0] || integer === lastThree[1] || integer === lastThree[2] || integer === newThree[0] || integer === newThree[1]){
      integer = randomMinMax(0, catalog.length);
    }
  }
  newThree[position] = integer;
  renderProduct(catalog[integer], position);
  ++catalog[integer].displayCount;
}
// PRIMARY FUNCTION: Render a product image to the page, dependent on position (0, 1, 2).
function renderProduct(source, position){
  let newImg = document.createElement('img');
  if(position === 0){
    newImg.id = 'imageZero';
    newImg.src = source.src;
    newImg.alt = source.alt;
    newImg.title = source.title;
    displayEl.appendChild(newImg);
  } else if(position === 1){
    newImg.id = 'imageOne';
    newImg.src = source.src;
    newImg.alt = source.alt;
    newImg.title = source.title;
    displayEl.appendChild(newImg);
  } else if(position === 2){
    newImg.id = 'imageTwo';
    newImg.src = source.src;
    newImg.alt = source.alt;
    newImg.title = source.title;
    displayEl.appendChild(newImg);
  }
  return newImg;
}

// RENDER FUNCTION: chart.js function to render chart
function drawChart(){
  let dataViews = [];
  let dataClicks = [];
  let labels = [];
  jaySawn.forEach(function(n){
    dataViews.push(n.displayCount);
    dataClicks.push(n.clickCount);
    labels.push(n.title);
  });
  let canvas = document.getElementById('chartResults');
  let ctx = canvas.getContext('2d');
  /* eslint-disable-next-line no-unused-vars */ /* eslint-disable-next-line no-undef */
  let chartCatalog = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Views',
        data: dataViews,
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
      }, {
        label: 'Clicks',
        data: dataClicks,
        backgroundColor: 'rgba(0, 0, 255, 0.2)'
      }],
    },
  });
}
