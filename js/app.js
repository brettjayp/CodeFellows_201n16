/* eslint-disable indent */ /* eslint-disable no-trailing-spaces */ /* eslint-disable no-unused-vars */ /* eslint-disable no-multi-spaces */
'use strict';
// constants, elements from HTML
const elCookieTable = document.getElementById('cookieTable');
const elEmployeeTable = document.getElementById('employeeTable');
const elFormNew = document.getElementById('formNew');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const adjustments = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
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
    this.ttlTosserHrs = 0;
    allShops.push(this);
}
// calculate and store customersPerHour, cookiesPerHour, and ttlCookiesPerDay
Shop.prototype.doCalculations = function(){
    while (this.cookiesPerHour.length < hours.length){
        for (let i = 0; i < hours.length; ++i){
            this.customersPerHour.push((randomMinMax(this.minCustPerHour, this.maxCustPerHour)));// * adjustments[i]);
            this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer));
            // I have NO IDEA why, but I occasionally get 0's returned after my Math logic. So to force a value, even it it's below the theoretical minimum, I'm forcing the code to keep running the above two lines, replacing the previous values of course, until I get a value > 0. I use a while loop to accomplish this.
            while (this.cookiesPerHour[i] === 0){
                this.customersPerHour[i] = (randomMinMax(this.minCustPerHour, this.maxCustPerHour)) * adjustments[i];
                this.cookiesPerHour [i] = Math.floor(this.customersPerHour[i] * this.avgCookiesPerCustomer);
            }
            this.ttlCookiesPerDay = this.ttlCookiesPerDay + this.cookiesPerHour[i];
        }
    }
};
// renders data to the cookies table (shop name, cookies per hour, cookies per day)
Shop.prototype.renderCookies = function(){
    let row = addEl('tr', false, elCookieTable);
    addEl('th', this.shopName, row);
    for (let i = 0; i < hours.length; ++i){
        addEl('td', this.cookiesPerHour[i], row);
    }
    addEl('td',this.ttlCookiesPerDay, row);
};
// calculates and stores how many tossers are needed per hour, with a minimum of two tossers
Shop.prototype.makeTossers = function(){
    while (this.tossersPerHour.length < hours.length){
        for(let i = 0; i < this.cookiesPerHour.length; ++i){
            this.tossersPerHour.push(Math.ceil(this.cookiesPerHour[i] / 20));
            while(this.tossersPerHour[i] < 2){this.tossersPerHour[i]++;}
            this.ttlTosserHrs += this.tossersPerHour[i];
        }
    }
};
// renders data to the tossers table (shop name, tossers per hour)
Shop.prototype.renderTossers = function(){
    let row = addEl('tr', false, elEmployeeTable);
    addEl('th', this.shopName, row);
    for(let i = 0; i < hours.length; ++i){
        addEl('td', this.tossersPerHour[i], row);
    }
    addEl('td', this.ttlTosserHrs, row);
};
// creating persistent shops
new Shop ('Seattle', 23, 65, 6.3);
new Shop ('Tokyo', 3, 24, 1.2);
new Shop ('Dubai', 11, 38, 3.7);
new Shop ('Paris', 20, 38, 2.3);
new Shop ('Lima', 2, 16, 4.6);
// do all of cookie table, and render to the page
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
    let rowTotals = addEl('thead', false, elCookieTable);
    addEl('th', 'Total', rowTotals);
    for (let i = 0; i < hours.length; ++i){
        let ttlCookiesPerHour = 0;
        for (let j = 0; j < allShops.length; ++j){
            ttlCookiesPerHour += allShops[j].cookiesPerHour[i];
        }
        addEl('td', ttlCookiesPerHour, rowTotals);
    }
    let totalAll = 0;
    for (let i = 0; i < allShops.length ; ++i){
        totalAll += allShops[i].ttlCookiesPerDay;
    }
    addEl('th', totalAll, rowTotals);
}
// do all of employee table, and render to the page
function renderEmployeeTable(){
    let rowHours = addEl('thead', false, elEmployeeTable);
    addEl('th', false, rowHours);
    for (let i = 0; i < hours.length; ++i){
        addEl('th', hours[i], rowHours);
    }
    addEl('th', 'Total', rowHours);
    for(let i = 0; i < allShops.length; ++i){
        allShops[i].makeTossers();
        allShops[i].renderTossers();
    }
    let rowTotals = addEl('thead', false, elEmployeeTable);
    addEl('th', 'Total', rowTotals);
    for(let i = 0; i < hours.length; ++i){
        let ttlTossersPerHour = 0;
        for (let j = 0; j < allShops.length; ++j){
            ttlTossersPerHour += allShops[j].tossersPerHour[i];
        }
        addEl('td', ttlTossersPerHour, rowTotals);
    }
    let totalAll = 0;
    for (let i = 0; i < allShops.length; ++i){
        totalAll += allShops[i].ttlTosserHrs;
    }
    addEl('th', totalAll, rowTotals);
}
// creates a NEW location from form input
function createNew(event){
    event.preventDefault();
    document.getElementsByTagName('table')[0].innerHTML = '';
    document.getElementsByTagName('table')[1].innerHTML = '';
    let name = event.target.name.value;
    let min = event.target.min.value;
    let max = event.target.max.value;
    let avg = event.target.avg.value;
    new Shop(name,min,max,avg);
    renderCookieTable();
    renderEmployeeTable();
}
elFormNew.addEventListener('submit', createNew);

// all major functions called
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
