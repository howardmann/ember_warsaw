import Ember from 'ember';

// This component is designed to be standalone and can be rendered in any template
export default Ember.Component.extend({
  // We call init and super here because we are overriding the component framework to have it exist with its own properties
  init: function(){
    this._super();
    this.setup();
  },
  actions: {
    getWeather(){
      // google maps geolocater API, returns current user latitude and longitude
      let googleURL = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBZK8nJUgGjYtWGPlB5nvhQjKuuUtvjBms"
      // darksky weather forecast api returns weather when given latitude and longitude
      let apiURL = "https://api.darksky.net/forecast/438668b8945bed8564ce3ecc62112a27";

      // Ajax google post request to return lat and long, then darsky get request to fetch weather
      $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBZK8nJUgGjYtWGPlB5nvhQjKuuUtvjBms")      
        .then(data => {
          return $.ajax({
            url: `${apiURL}/${data.location.lat},${data.location.lng}`,
            type: "GET",
            dataType: "jsonp"
          })
        })
        .then(data =>{
          this.set('temp', data.currently.temperature);
          this.set('timezone', data.timezone);
          this.set('summary', data.daily.summary);
        })
    }
  },
  // Override default component with custom setup function (can be named anything) to set properties accessible by component only
  setup(){
    this.setProperties({
      temp: 'temp',
      timezone: 'timezone',
      summary: 'summary'
    })
  }
});
