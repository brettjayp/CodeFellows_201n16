/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
'use strict';

// constants, elements from HTML
const elFirstAndPike = document.getElementById('shopFirstAndPike');
const elTokyo = document.getElementById('shopTokyo');
const elDubai = document.getElementById('shopDubai');
const elParis = document.getElementById('shopParis');
const elLima = document.getElementById('shopLima');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let allShops = [];

// shop constructor
function Shop (name, parent, min, max, avg) {
    this.shopName = name;
    this.parent = parent;
    this.minCustPerHour = min;
    this.maxCustPerHour = max;
    this.avgCookiesPerCustomer = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.ttlCookiesPerDay = 0;

    allShops.push(this);
}

Shop.prototype.doCalculations = function(){
    for (let i = 0; i < hours.length; ++i){
        this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
        this.ttlCookiesPerDay = this.ttlCookiesPerDay + this.cookiesPerHour[i];
    }
};
Shop.prototype.renderList = function(){
    addEl('lh', this.shopName, this.parent);
    for (let i = 0; i < hours.length; ++i) {
        addEl('li', `${hours[i]}, Cookies: ${this.cookiesPerHour[i]}`, this.parent);
    }
    addEl('li', `Total Sales: ${this.ttlCookiesPerDay}`, this.parent);
}

new Shop ('Seattle', elFirstAndPike, 23, 65, 6.3);
new Shop ('Tokyo', elTokyo, 3, 24, 1.2);
new Shop ('Dubai', elDubai, 11, 38, 3.7);
new Shop ('Paris', elParis, 20, 38, 2.3);
new Shop ('Lima', elLima, 2, 16, 4.6);

function renderShops() {
    for (let i = 0; i < allShops.length; ++i){
        allShops[i].doCalculations();
        allShops[i].renderList();
    }
}
renderShops();

// helper function, add a new element
function addEl(element, content, parent){
    var newElement = document.createElement(element);
    if(content){
        var newContent = document.createTextNode(content);
        newElement.appendChild(newContent);
    }
    parent.appendChild(newElement);
    return newElement;
} 
// helper function, return random whole number based on min and max parameters
function randomMinMax(min, max){
    return Math.floor((Math.random() * (max - min)) + min);
}

// end of line, do not proceed
