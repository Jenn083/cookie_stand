'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
var allStores = []//contains store objects

function Store(location,minCustPerHour,maxCustPerHour,avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalCookies = 0;
  this.cookiesSoldPerHour = [];//contains 14 numbers; total cookies/hour= rand cust/hour* avg cookies/cust

  this.calCookiesPerHour = function() {//loop through 14 times; 6am-8pm
    for (var i =0; i < hours.length; i++) {
      var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      var cookiesPerHourSold = Math.ceil(randomCustomersPerHour * this.avgCookiesPerCust);
      this.cookiesSoldPerHour.push(cookiesPerHourSold);
    }
  }

  this.sumTotal = function () { //this function gives me total # of cookies at a location.
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
    return this.totalCookies; // daily total at a location
  };

  this.calCookiesPerHour();//called this function
  this.sumTotal(); //called this function
  // if store exist
  var data = false;
  for (var i=0; i<allStores.length;i++) {
    if(allStores[i].location === location) {
      data = true;
      allStores[i] = this; //if location is the same as the new location, then set the new location to allStores[i]
      break;
    }
  }

  if (!data) {  // if data is false then
    allStores.push(this);//push the new data into allStores array.
  }

  this.render = function () {//make render function so that when you call render() it will do this calculation
    var storeTable = document.getElementById('storeJs');// <table id=storeJs></table> grab id and assign to storeTable
    var trEl = document.createElement('tr'); //<tr></tr> created the row tag

    tdEl = document.createElement('td');//<td></td> created the data tag
    tdEl.textContent = this.location;//add content to data tag; all locations
    trEl.appendChild(tdEl);//append content to <td> tag

    for (var i = 0; i < hours.length; i++) {//looping through hours array
      var tdEl = document.createElement('td'); //create data tag
      tdEl.textContent = this.cookiesSoldPerHour[i];//add content into data tag; at each hour add # of cookies sold that hour. 14 times
      trEl.appendChild(tdEl);//append the data into data tag
    }
//outside of for loop
    tdEl = document.createElement('td');//add data tag
    tdEl.textContent = this.sumTotal();//add content to data tag; the sum of each store/day
    trEl.appendChild(tdEl);

    storeTable.appendChild(trEl);//append the whole row to the table
  }
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('Sea Tac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 23, 2.3);
new Store('Alki', 2, 16, 4.6);


function makeHeaderRow () { //function to make header row

  var storeTable = document.getElementById('storeJs');//grab elementbyid storeJS
  var trEl = document.createElement('tr');//make tr tag
  var thEl = document.createElement('th');//make th tag(same as td)
  thEl.textContent = ' ';//create empty content
  trEl.appendChild(thEl)[0];//append the empty content to posistion [0]

  for (var i = 0; i < hours.length; i++) {//loop through the hours
    thEl = document.createElement('th');//add header tag
    thEl.textContent = hours[i];//add content to header tag which is all the hours
    trEl.appendChild(thEl);//append the header content to the row
  }

  thEl = document.createElement('th');//add header tag
  thEl.textContent = 'Daily Total';//add content to the header tag
  trEl.appendChild(thEl);//take header and append to the row

  storeTable.appendChild(trEl);//append the entire row to the table
}

function makeAllStoreRow () {//make function to filing in calculations
  for (var i = 0; i < allStores.length; i++) {//loop through all the stores
    allStores[i].render();//and calling the render function so that it will do calculations to allStores
  }
}


function makeFooterRow () {//function to make footer row
  var storeTable = document.getElementById('storeJs');//grab this id for this table
  var trEl= document.createElement('tr');//create tr tag and assign it to var trEl
  var thEl = document.createElement('th');//create th tag and assign it to var trEl
  thEl.textContent = 'Total Cookies Per Hour';//add content
  trEl.appendChild(thEl);//append footer element to the table row
  storeTable.appendChild(trEl);//append the entire footer row to the table

  for(var i=0; i <hours.length; i++) {//loop through the hours array
    var hourTotal = 0;//assign 0 to hourTotal
    for(var j = 0; j <allStores.length; j++) {//then loop through the allStores array

      hourTotal += allStores[j].cookiesSoldPerHour[i];// add the allStores array with the cookiesSoldPerHour array to get the total hourTotal

    }
    //storeTable = document.getElementById('storeJs');//
    thEl = document.createElement('th');//
    thEl.textContent = hourTotal;//add another footer content for hourTotal
    trEl.appendChild(thEl);//add the footer element to the table row tag
    storeTable.appendChild(trEl);//append the row to the tabel
  }
}//end of makeFooterRow();


var scForm = document.getElementById('salmon-cookie-form');
var clearTable = document.getElementById('storeJs')
//var clearForm = document.getElementById('salmon-cookie-form');


function handlesSubmitButton(event) {//create event(form) handler

  event.preventDefault();
  if (!event.target.location.value || !event.target.minCookies.value || !event.target.maxCookies.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
  }

  var newStore = new Store(event.target.location.value, event.target.minCookies.value, event.target.maxCookies.value,event.target.avgCookies.value);
  event.target.location.value = null;
  event.target.minCookies.value = null;
  event.target.maxCookies.value = null;
  event.target.avgCookies.value = null;

  allStores.push(newStore);
  globalRender();
}
scForm.addEventListener('submit', handlesSubmitButton);

clearTable.addEventListener('click', function() {
  scForm.innerHTML = '';

});
function globalRender() {
  makeHeaderRow();
  makeAllStoreRow();
  makeFooterRow();
}

globalRender();
//create event listener
