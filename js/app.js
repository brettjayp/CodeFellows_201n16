/* eslint-disable indent */ /* eslint-disable no-trailing-spaces */ /* eslint-disable no-unused-vars */
'use strict';

// constants, elements from HTML
const elCookieTable = document.getElementById('cookieTable');
const elEmployeeTable = document.getElementById('employeeTable');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let allShops = [];

// shop constructor and prototypes/methods
function Shop (name, min, max, avg){
    this.shopName = name;
    this.minCustPerHour = min;
    this.maxCustPerHour = max;
    this.avgCookiesPerCustomer = avg;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.ttlCookiesPerDay = 0;
    this.tossersPerHour = [];

    allShops.push(this);
}
Shop.prototype.doCalculations = function(){
    for (let i = 0; i < hours.length; ++i){
        this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
        this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
        this.ttlCookiesPerDay = this.ttlCookiesPerDay + this.cookiesPerHour[i];
    }
};
Shop.prototype.renderCookies = function(){
    let row = addEl('tr', false, elCookieTable);
    addEl('th', this.shopName, row);
    for (let i = 0; i < hours.length; ++i){
        addEl('td', this.cookiesPerHour[i], row);
    }
    addEl('td',this.ttlCookiesPerDay, row);
};
Shop.prototype.makeTossers = function(){
    // calculate tossers per hour
    for(let i = 0; i < this.cookiesPerHour.length; ++i){
        let tossers = Math.ceil(this.cookiesPerHour[i] / 20);
        while(tossers < 2){tossers++;}
        this.tossersPerHour.push(tossers);
    }
};
Shop.prototype.renderTossers = function(){
    let row = addEl('tr', false, elEmployeeTable);
    addEl('th', this.shopName, row);
    for(let i = 0; i < hours.length; ++i){
        addEl('td', this.tossersPerHour[i], row);
    }
};

new Shop ('Seattle', 23, 65, 6.3);
new Shop ('Tokyo', 3, 24, 1.2);
new Shop ('Dubai', 11, 38, 3.7);
new Shop ('Paris', 20, 38, 2.3);
new Shop ('Lima', 2, 16, 4.6);

// main function, render feature to page
function renderCookieTable(){
    let rowHours = addEl('thead', false, elCookieTable);
    addEl('th', false, rowHours);
    for (let i = 0; i < hours.length; ++i){
        addEl('th', hours[i], rowHours);
    }
    addEl('th', 'Total', rowHours);
    for (let i = 0; i < allShops.length; ++i){
        allShops[i].doCalculations();
        allShops[i].renderCookies();
    }
}
function renderEmployeeTable(){
    let rowHours = addEl('thead', false, elEmployeeTable);
    addEl('th', false, rowHours);
    for (let i = 0; i < hours.length; ++i){
        addEl('th', hours[i], rowHours);
    }
    for(let i = 0; i < allShops.length; ++i){
        allShops[i].makeTossers();
        allShops[i].renderTossers();
    }
}
renderCookieTable();
renderEmployeeTable();

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
