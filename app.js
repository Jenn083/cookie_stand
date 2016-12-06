var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
var firstAndPike = {

  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.4,
  cookiesSoldPerHour: [],

  randCustPerHour: function () {
    console.log('before running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
    for(var i = 0; i< hours.length;i++){
      var randomCustomersPerHour =  Math.ceil(((Math.random()*this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      var cookiesPerHour = Math.ceil(randomCustomersPerHour * this.avgCookiesPerHour);
      this.cookiesSoldPerHour.push(cookiesPerHour);
      // console.log(this.cookiesSoldPerHour);
      //Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log('after running loop in randCustPerHour method: ' + this.cookiesSoldPerHour);
  },
  sumTotal: function() {
    var sum =0;
    for(var i=0; i < this.cookiesSoldPerHour.length;i++) {
      sum += this.cookiesSoldPerHour[i];
    }
    return sum;
  },
  render: function() {
    this.randCustPerHour();// before you render so that there's content to render
    var ulEl = document.createElement('ul');
    ulEl.textContent = 'Data';
    document.body.appendChild(ulEl);

    for(var i = 0; i< hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesSoldPerHour[i];
      ulEl.appendChild(liEl);

    }
    var pEl =document.createElement('p');
    pEl.textContent = 'Total: ' + this.sumTotal();
    document.body.appendChild(pEl);
  }

}


firstAndPike.render();
firstAndPike.randCustPerHour();
firstAndPike.cookiesSoldPerHour;
