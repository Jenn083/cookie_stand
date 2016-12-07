'use strict'
var hours =['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];
var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.3,
  cookiesSoldPerHour: [],
//totalCookiesSoldPerHour: [],?
  randCustPerHour: function () {
    console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
    for(var i = 0; i < hours.length; i++){
      var randomCustomersPerHour =  Math.floor(((Math.random() * this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      //console.log(this.cookiesSoldPerHour);
      //Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum = 0;
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },
  render: function() {
    this.randCustPerHour();// before you render so that there's content to render
    var ulEl = document.createElement('ul');
    ulEl.textContent = '1st and Pike';
    document.body.appendChild(ulEl);

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    var liEle = document.createElement('li');
    liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEle);
  }

}
firstAndPike.render();
firstAndPike.randCustPerHour();
firstAndPike.cookiesSoldPerHour;


var seaTacAirport = {

  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerHour: 1.2,
  cookiesSoldPerHour: [],

  randCustPerHour: function () {
    console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
    for(var i = 0; i < hours.length; i++){
      var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      // console.log(this.cookiesSoldPerHour);
      //Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum = 0;
    for(var i = 0; i < this.cookiesSoldPerHour.length;i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },
  render: function() {
    this.randCustPerHour();// before you render so that there's content to render
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'SeaTac Airport';
    document.body.appendChild(ulEl);

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    var liEle = document.createElement('li');
    liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEle);
  }

}
seaTacAirport.render();
seaTacAirport.randCustPerHour();
seaTacAirport.cookiesSoldPerHour;


var seattleCenter = {

  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHour: 3.7,
  cookiesSoldPerHour: [],

  randCustPerHour: function () {
    console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
    for(var i = 0; i < hours.length; i++){
      var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      // console.log(this.cookiesSoldPerHour);
      //Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum = 0;
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },
  render: function() {
    this.randCustPerHour();// before you render so that there's content to render
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Seattle Center';
    document.body.appendChild(ulEl);

    for(var i = 0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    var liEle = document.createElement('li');
    liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEle);
  }

}
seattleCenter.render();
seattleCenter.randCustPerHour();
seattleCenter.cookiesSoldPerHour;

var capitalHill = {

  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHour: 3.7,
  cookiesSoldPerHour: [],

  randCustPerHour: function () {
    console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
    for(var i = 0; i < hours.length; i++){
      var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      // console.log(this.cookiesSoldPerHour);
      //Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum = 0;
    for(var i = 0; i < this.cookiesSoldPerHour.length;i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },
  render: function() {
    this.randCustPerHour();// before you render so that there's content to render
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Captial Hill';
    document.body.appendChild(ulEl);

    for(var i = 0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    var liEle = document.createElement('li');
    liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEle);
  }

}
capitalHill.render();
capitalHill.randCustPerHour();
capitalHill.cookiesSoldPerHour;


var alki = {

  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerHour: 3.7,
  cookiesSoldPerHour: [],

  randCustPerHour: function () {
    console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
    for(var i = 0; i< hours.length; i++){
      var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      // console.log(this.cookiesSoldPerHour);
      //Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum = 0;
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },
  render: function() {
    this.randCustPerHour();// before you render so that there's content to render
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Alki';
    document.body.appendChild(ulEl);

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':  ' + this.cookiesSoldPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);

    }
    var liEle = document.createElement('li');
    liEle.textContent = 'Total:   ' + this.sumTotal() + ' cookies';
    ulEl.appendChild(liEle);
  }

}
alki.render();
alki.randCustPerHour();
alki.cookiesSoldPerHour;
