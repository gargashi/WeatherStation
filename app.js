// Initialise the Storage class
const storage=new Storage();

// get Stored Location data
const weatherLocation=storage.getLocationData();

// Initialise the weather class
const weather=new Weather(weatherLocation.city, weatherLocation.country);

// Initialise the UI class
const ui=new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{

  const city=document.getElementById('city').value;
  const country=document.getElementById('country').value;

  // Change Location
  weather.changeLocation(city, country);

  // Set Location in Local Storage
  storage.setLocationData(city, country);

  // Get and Display Weather
  getWeather();

  // Close the Modal(jQuery)
  $('#locModal').modal('hide');

})

function getWeather(){
  weather.getWeather()
    .then(results=>{
      ui.paint(results);
    })
    .then(err=>console.log(err))
  }