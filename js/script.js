//API KEY : AIzaSyDnkEl_UehdS23iDfq3rjdWyvvSuAnKhv8
//Getting Element from the DOM
let searchButton = document.querySelector('#searchButton');
let map = document.querySelector('#map');
let form = document.querySelector('#form');
let input = document.querySelector('#input');
let loader = document.querySelector('.loader');
let popUp = document.querySelector('.pop-up');
let searchSection= document.querySelector('.search-section');


//Map with Customizable Marker
//This function doesnt allow ES6 Arrow funtion It through error 'yd'
function initMap(){

    let Nigeria ={
        lat:9.120123,
        lng:7.388412
    }
    //Drawing a simple Map 
  map = new google.maps.Map(map,{zoom:6, center:Nigeria});
    //Drawing a marker on the map
  marker = new google.maps.Marker({position:Nigeria, map:map});

};







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