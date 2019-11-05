//API KEY : AIzaSyDnkEl_UehdS23iDfq3rjdWyvvSuAnKhv8
//Getting Element from the DOM
let searchButton = document.querySelector('#searchButton');
let form = document.querySelector('#form');
let input = document.querySelector('#input');
let loader = document.querySelector('.loader');
let popUp = document.querySelector('.pop-up');
let secondSection= document.querySelector('.second-section');

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