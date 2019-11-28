
//Getting Element from the DOM
const searchButton = document.querySelector('#searchButton');
let map = document.querySelector('#map');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const loader = document.querySelector('.loader');
const popUp = document.querySelector('.pop-up');
const searchSection= document.querySelector('.search-section');
const imageSlider = document.querySelector('.image-slider');
const celsius = document.querySelector('.Celsius');
const checkbox = document.querySelector('#checkbox');
const overlay = document.querySelector('.overlay');
let weatherError = document.querySelector('#weather-error');

 let globalLat = null; 
 let globalLng = null; 

// Make HTTP network Request to get local weather condition
const apiRequest = new XMLHttpRequest();

form.addEventListener('submit',($event)=>{
  $event.preventDefault();  //Prevent Page Refresh
  let inputValue = input.value;
  apiRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&APPID=c845f0083c427e569e8d829e46019dbc' );
  apiRequest.send();


 
 // RegEx to enforce/check user inputs
  const pattern =/[a-zA-Z]/ig;

  if( inputValue.match(pattern)){
      error.innerHTML ='';
     popUp.setAttribute('style', 'display:block');
     
  }else{    
      error.innerHTML = '<br>Invalid input';
      error.classList.add('errorMessage');
      popUp.setAttribute('style', 'display:none');

      //After an Invalid Input
      form.reset();
      input.focus();

  }

});


//Getting DOM Element to print the weather result
let windResult = document.querySelector('.wind-result');
let humidityResult = document.querySelector('.humidity-result');
let precipitationResult = document.querySelector('.precipitation-result');
let temperatureResult = document.querySelector('.temperature-result');
let lnglatResult = document.querySelector('.lnglat-result');
let PostalcodeResult =  document.querySelector('.Postalcode-result');


apiRequest.onreadystatechange = ()=>{
  if(apiRequest.status == '404'){      
            popUp.setAttribute('style', 'display:none');
            weatherError.classList.add('errorMessage');      
  return  weatherError.innerHTML = '<br>City not found';
          
  }
  if(apiRequest.readyState === 4){
    weatherError.innerHTML =  "";
//Saving the API response in response variable
    const response = JSON.parse(apiRequest.response);

    windResult.textContent = `${response.wind.speed}m/s`;
    humidityResult.textContent  = `${response.main.humidity}%`;
    precipitationResult.textContent  = `${response.weather[0].main}`;
    lnglatResult.textContent = `${response.coord.lon}, ${response.coord.lat}`;
    PostalcodeResult.textContent = `${response.id}`;
    temperatureResult.textContent  =`${Math.floor((response.main.temp)-273)}C`;

    //Testing
    globalLng  = parseInt(response.coord.lon);
    globalLat =  parseInt(response.coord.lat);

    //Tempearture
   let temperatureCalc = Math.floor((response.main.temp)-273);//Default is in Kelvin subtracting 273 gives equivalent in Celsius and also approx

//Function converting Celsisus to Fahrenheit
const convertToFahrenheit =(fahrenheit)=>{
  return fahrenheit = (temperatureCalc * 9/5) + 32;
 }

//Function converting Celsisus to Fahrenheit
const convertToCelsius = (celsius)=>{
  return celsius = (convertToFahrenheit() - 32) * 5/9;
}

//Toggle between Temperature Units

checkbox.addEventListener('change',($event)=>{
  if(celsius.innerHTML == 'Celsius:'){
    celsius.innerHTML ="Fahrenheit:";

    temperatureResult.textContent  = ` ${convertToFahrenheit()}F`;
    
  }else{
    celsius.innerHTML = "Celsius:"; 
    
    temperatureResult.textContent  = ` ${Math.floor(convertToCelsius())}C`;
  }
});


  }

}

//Image Slider
 
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var mySlides = document.getElementsByClassName("mySlides");
  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";   
}
  myIndex++;
  if (myIndex > mySlides.length) {myIndex = 1}  
  mySlides[myIndex-1].style.display = "block";
 
//Event Listener to change the overlay when Mouseover a landmark

      overlay.addEventListener('mouseover',()=>{
        if(myIndex == 1){
          overlay.innerHTML = 'Dubai UAE';
        }
        else if(myIndex == 2 ){
          overlay.innerHTML = 'Eiefel-Tower Paris';
        }
        else{
          overlay.innerHTML = 'Golden-Gate California';
        }
  overlay.classList.add('appear');
    
      });
        
  setTimeout(carousel, 4000); // Change image every 4 seconds
}




//Geocode
//Map with Customizable Marker
//This function doesnt allow ES6 Arrow funtion It trows error 'yd'
// Labels for the custom marker
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

let markerPos = {
  lat: -34.397, 
  lng: 150.644

}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center:markerPos
  });

  var geocoder = new google.maps.Geocoder();

  document.getElementById('searchButton').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('input').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}








// //Initializing function for the map and event listener for clicks on Map
// function initMap(){

// //Location using longitude and latitude
// let Nigeria ={//globalLat,globalLng 
//   lng:9.120123,
//   lat:7.388412
  
// }
//     //NOTE: map has been called at the top of this document
//   map = new google.maps.Map(map,{zoom:6, center:Nigeria});
  
  // // This event listener calls addMarker() when the map is clicked.
  // google.maps.event.addListener(map, 'click', function(event) {
  //   addMarker(event.latLng, map);
  // });

  //   // Add a marker at the center of the map.
  //   addMarker(Nigeria, map);

// }

// // Adds a marker to the map.
// function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   var marker = new google.maps.Marker({
//     position: location,
//     label: labels[labelIndex++ % labels.length],
//     map: map
//   });

// }

//   google.maps.event.addDomListener(window, 'load', initMap);
