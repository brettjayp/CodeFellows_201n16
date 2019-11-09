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

// shop object literals
let shopFirstAndPike = {
    parent: elFirstAndPike,
    title: 'Location: Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    ttlCookiesForDay: 0,
    
    render: function() {
        addEl('lh', this.title, this.parent);
        for(let i = 0; i < hours.length; ++i) {
            this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
            this.ttlCookiesForDay = this.ttlCookiesForDay + this.cookiesPerHour[i];
            addEl('li', `${hours[i]}, Cookies: ${this.cookiesPerHour[i]}`, this.parent);
        }
    }
};
let shopTokyo = {
    parent: elTokyo,
    title: 'Location: Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerCustomer: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    ttlCookiesForDay: 0,

    render: function() {
        addEl('lh', this.title, this.parent);
        for(let i = 0; i < hours.length; ++i) {
            this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
            this.ttlCookiesForDay = this.ttlCookiesForDay + this.cookiesPerHour[i];
            addEl('li', `${hours[i]}, Cookies: ${this.cookiesPerHour[i]}`, this.parent);
        }
    }
};
let shopDubai = {
    parent: elDubai,
    title: 'Location: Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiesPerCustomer: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    ttlCookiesForDay: 0,

    render: function() {
        addEl('lh', this.title, this.parent);
        for(let i = 0; i < hours.length; ++i) {
            this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
            this.ttlCookiesForDay = this.ttlCookiesForDay + this.cookiesPerHour[i];
            addEl('li', `${hours[i]}, Cookies: ${this.cookiesPerHour[i]}`, this.parent);
        }
    }
};
let shopParis = {
    parent: elParis,
    title: 'Location: Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiesPerCustomer: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    ttlCookiesForDay: 0,

    render: function() {
        addEl('lh', this.title, this.parent);
        for(let i = 0; i < hours.length; ++i) {
            this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
            this.ttlCookiesForDay = this.ttlCookiesForDay + this.cookiesPerHour[i];
            addEl('li', `${hours[i]}, Cookies: ${this.cookiesPerHour[i]}`, this.parent);
        }
    }
};
let shopLima = {
    parent: elLima,
    title: 'Location: Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiesPerCustomer: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    ttlCookiesForDay: 0,

    render: function() {
        addEl('lh', this.title, this.parent);
        for(let i = 0; i < hours.length; ++i) {
            this.customersPerHour.push(randomMinMax(this.minCustPerHour, this.maxCustPerHour));
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
            this.ttlCookiesForDay = this.ttlCookiesForDay + this.cookiesPerHour[i];
            addEl('li', `${hours[i]}, Cookies: ${this.cookiesPerHour[i]}`, this.parent);
        }
    }
};

// function, render name of store to lh, render hours of operation to li, under shopFirstAndPike
function renderShop(location){
    addEl('lh', 'Shop: First and Pike', location);
    for (let i = 0; i < hours.length; ++i) {
        addEl('li', hours[i], location);
    }
}

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

// FUNCTION CALLS!
shopFirstAndPike.render();
shopTokyo.render();
shopDubai.render();
shopParis.render();
shopLima.render();

// end of line, do not proceed
