
//Getting Element from the DOM
let searchButton = document.querySelector('#searchButton');
let map = document.querySelector('#map');
let form = document.querySelector('#form');
let input = document.querySelector('#input');
let loader = document.querySelector('.loader');
let popUp = document.querySelector('.pop-up');
let searchSection= document.querySelector('.search-section');
let imageSlider = document.querySelector('.image-slider');
let celsius = document.querySelector('.Celsius');
let checkbox = document.querySelector('#checkbox');
let overlay = document.querySelector('.overlay');





//Add Event Listener
searchButton.addEventListener('click',($event)=>{
    $event.preventDefault();

    const pattern =/[a-zA-Z]/ig;
    const inputValue = input.value;
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

//Toggle Temperature Units

checkbox.addEventListener('change',($event)=>{

  if(celsius.innerHTML == 'Celsius'){
    celsius.innerHTML ="Fahrenheit";
  }else{
    celsius.innerHTML = "Celsius";
  }
});



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