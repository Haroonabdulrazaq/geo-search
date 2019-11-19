
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
let lnglatResult = document.querySelector('.lnglat-result')



apiRequest.onreadystatechange = ()=>{
  if(apiRequest.status == '404'){
          
            popUp.setAttribute('style', 'display:none');
            weatherError.classList.add('errorMessage');      
  return  weatherError.innerHTML = '<br>City not found';
          
  }
  if(apiRequest.readyState === 4){
    weatherError.innerHTML =  "";
    const response = JSON.parse(apiRequest.response);
    windResult.textContent = `${response.wind.speed}m/s`;
    humidityResult.textContent  = `${response.main.humidity}%`;
    precipitationResult.textContent  = `${response.weather[0].main}`;
    lnglatResult.textContent = `${response.coord.lon}, ${response.coord.lat}`;
    temperatureResult.textContent  =`${Math.floor((response.main.temp)-273)}C`;
    //Tempearture
   let temperatureCalc = Math.floor((response.main.temp)-273);//Default is in Kelvin subtracting 273 gives equivalent in Celsius and also approx
   //temperatureResult.textContent  = ` ${temperatureCalc}C`

//Function converting Celsisus to Fahrenheit
const convertToFahrenheit =(fahrenheit)=>{
  return fahrenheit = (temperatureCalc * 9/5) +32;
 }

//Function converting Celsisus to Fahrenheit
const convertToCelsius = (celsius)=>{
  return celsius = (convertToFahrenheit() - 32) * 5/9;
}


//Toggle between Temperature Units
checkbox.addEventListener('change',($event)=>{
  if(celsius.innerHTML == 'Celsius'){
    celsius.innerHTML ="Fahrenheit:";
    temperatureResult.textContent  = ` ${convertToFahrenheit()}F`;
    
  }else{
    celsius.innerHTML = "Celsius"; 
    temperatureResult.textContent  = ` ${Math.floor(convertToCelsius())}C`;
  }
});

  }

}









// HTTP End
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
 
      overlay.addEventListener('mouseover',()=>{
        if(myIndex == 1){
          overlay.innerHTML = 'Dubai UAE';
        }
        else if(myIndex == 2 ){
          overlay.innerHTML = 'Eifel-Tower Paris';
        }
        else{
          overlay.innerHTML = 'Golden Gate California';
        }
      overlay.classList.add('allow');
    
      });
        
  mySlides[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}



//Map with Customizable Marker
//This function doesnt allow ES6 Arrow funtion It through error 'yd'
// Labels for the custom marker
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

//Initializing function for the map and event listener for clicks on Map
function initMap(){
//Location using longitude and latitude
    let Nigeria ={
        lat:9.120123,
        lng:7.388412
    }

    //NOTE: map has been called at the top of this document
  map = new google.maps.Map(map,{zoom:6, center:Nigeria});
  
  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

    // Add a marker at the center of the map.
    addMarker(Nigeria, map);

}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });

}

  google.maps.event.addDomListener(window, 'load', initMap);