'use strict'
var hours =['','6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
var allStores = [];
function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.cookiesSoldPerHour = [];
  this.sum = 0;
  this.calcCookiesPerHour = function() {
    for(var i = 0; i < hours.length; i++){
      var randomCustomersPerHour =  Math.floor(((Math.random() * this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
    }
  }
  // this.sumTotal = function () {
  //   this.calcCookiesPerHour();
  //   for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
  //     this.sum += this.cookiesSoldPerHour[i];
  //   }
  //   return this.sum;
  // };
  // this.sumTotal();
  allStores.push(this);
}
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//function render() {

function makeHeaderRow() {
  var storeTable = document.getElementById('storeJs');
  var trEl = document.createElement('tr');
  for(var i=0; i<hours.length; i++) {
    var thEl = document.createElement('th');

    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // manual
  thEl = document.createElement('th');
  //thEl = document.createElement('th');
  thEl.textContent = 'Daily';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}
makeHeaderRow();


function fillContent(){
  // for loop hours
  // for j = 0, fill out name
  var storeTable = document.getElementById('storeJs');

  // totalCookiesPerHour = [];

  for (var i = 0; i < allStores.length; i++) {

    var trEl = document.createElement('tr');
    // var tdEl = document.createElement('td');
    var tdEl.textContent = allStores[i].locationName;
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);

    // allStores[i].calcCookiesPerHour();

    // go through loop of cookiesSoldPerHour
    //each col
    // var trEl = document.createElement('tr');
    // var tdEl = document.createElement('td');
    // var cookies = allStores[i].cookiesSoldPerHour[j];
    // if (totalCookiesPerHour[j]) {
    // totalCookiesPerHour[j] +=  cookies;
    // } else {
    // totalCookiesPerHour[j] = cookies;
    // }

    // tdEl.textContent = allStores[i].cookiesSoldPerHour[j];
    // trEl.appendChild(tdEl);
    // storeTable.appendChild(trEl);
    //
    //last column
    //var trEl = document.createElement('tr');
    // var tdEl = document.createElement('td');
    // allStores[i].sumTotal();
    // tdEl.textContent = allStores[i].sum
    // trEl.appendChild(tdEl);
    // storeTable.appendChild(trEl);
  }
  trEl = document.createElement('tr');
  //tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
  // j =1 to 12
  // loop through all hour from totalCookiesPerHour
  //var trEl = document.createElement('tr');
  // var tdEl = document.createElement('td');
  // tdEl.textContent = totalCookiesPerHour[i]
  // trEl.appendChild(tdEl);
  // storeTable.appendChild(trEl);

}
fillContent();
//}
//render();
//allStorestore.render();
//store.randCustPerHour();
//store.cookiesSoldPerHour;
//
//
//
//
//
// var firstAndPike = {
//   locationName: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesPerHour: 6.3,
//   cookiesSoldPerHour: [],
//
//   randCustPerHour: function () {
//     console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//     for(var i = 0; i < hours.length; i++){
//       var randomCustomersPerHour =  Math.floor(((Math.random() * this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//       //console.log(this.cookiesSoldPerHour);
//       //Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//   },
//   sumTotal: function() {
//     var sum = 0;
//     for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
//       sum += this.cookiesSoldPerHour[i];
//     }
//     return sum;
//   },
//   render: function() {
//     this.randCustPerHour();// before you render so that there's content to render
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = '1st and Pike';
//     document.body.appendChild(ulEl);
//
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//
//     }
//     var liEle = document.createElement('li');
//     liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
//     ulEl.appendChild(liEle);
//   }
//
// }
// firstAndPike.render();
// firstAndPike.randCustPerHour();
// firstAndPike.cookiesSoldPerHour;
//
//
// var seaTacAirport = {
//
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesPerHour: 1.2,
//   cookiesSoldPerHour: [],
//
//   randCustPerHour: function () {
//     console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//     for(var i = 0; i < hours.length; i++){
//       var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//       // console.log(this.cookiesSoldPerHour);
//       //Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//   },
//   sumTotal: function() {
//     var sum = 0;
//     for(var i = 0; i < this.cookiesSoldPerHour.length;i++) {
//       sum += this.cookiesSoldPerHour[i];
//     }
//     return sum;
//   },
//   render: function() {
//     this.randCustPerHour();// before you render so that there's content to render
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = 'SeaTac Airport';
//     document.body.appendChild(ulEl);
//
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//
//     }
//     var liEle = document.createElement('li');
//     liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
//     ulEl.appendChild(liEle);
//   }
//
// }
// seaTacAirport.render();
// seaTacAirport.randCustPerHour();
// seaTacAirport.cookiesSoldPerHour;
//
//
// var seattleCenter = {
//
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerHour: 3.7,
//   cookiesSoldPerHour: [],
//
//   randCustPerHour: function () {
//     console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//     for(var i = 0; i < hours.length; i++){
//       var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//       // console.log(this.cookiesSoldPerHour);
//       //Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//   },
//   sumTotal: function() {
//     var sum = 0;
//     for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
//       sum += this.cookiesSoldPerHour[i];
//     }
//     return sum;
//   },
//   render: function() {
//     this.randCustPerHour();// before you render so that there's content to render
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = 'Seattle Center';
//     document.body.appendChild(ulEl);
//
//     for(var i = 0; i< hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//
//     }
//     var liEle = document.createElement('li');
//     liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
//     ulEl.appendChild(liEle);
//   }
//
// }
// seattleCenter.render();
// seattleCenter.randCustPerHour();
// seattleCenter.cookiesSoldPerHour;
//
// var capitalHill = {
//
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesPerHour: 3.3,
//   cookiesSoldPerHour: [],
//
//   randCustPerHour: function () {
//     console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//     for(var i = 0; i < hours.length; i++){
//       var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//       // console.log(this.cookiesSoldPerHour);
//       //Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//   },
//   sumTotal: function() {
//     var sum = 0;
//     for(var i = 0; i < this.cookiesSoldPerHour.length;i++) {
//       sum += this.cookiesSoldPerHour[i];
//     }
//     return sum;
//   },
//   render: function() {
//     this.randCustPerHour();// before you render so that there's content to render
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = 'Captial Hill';
//     document.body.appendChild(ulEl);
//
//     for(var i = 0; i< hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//
//     }
//     var liEle = document.createElement('li');
//     liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
//     ulEl.appendChild(liEle);
//   }
//
// }
// capitalHill.render();
// capitalHill.randCustPerHour();
// capitalHill.cookiesSoldPerHour;
//
//
// var alki = {
//
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerHour: 3.7,
//   cookiesSoldPerHour: [],
//
//   randCustPerHour: function () {
//     console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//     for(var i = 0; i< hours.length; i++){
//       var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
//       this.cookiesSoldPerHour.push(cookiesPerHour);
//       // console.log(this.cookiesSoldPerHour);
//       //Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
//   },
//   sumTotal: function() {
//     var sum = 0;
//     for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
//       sum += this.cookiesSoldPerHour[i];
//     }
//     return sum;
//   },
//   render: function() {
//     this.randCustPerHour();// before you render so that there's content to render
//     var ulEl = document.createElement('ul');
//     ulEl.textContent = 'Alki';
//     document.body.appendChild(ulEl);
//
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//
//     }
//     var liEle = document.createElement('li');
//     liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
//     ulEl.appendChild(liEle);
//   }
//
// }
// alki.render();
// alki.randCustPerHour();
// alki.cookiesSoldPerHour;
//
