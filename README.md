# geo-search 

Geo-Search is a tool that allows people to search for places and extract information such as timezone, map and local weather conditions like temperature, wind speed, humidity, and precipitation.
# Getting Started
To get started on your Local machine you can go to https://haroonabdulrazaq.github.io/geo-search/ Or Clone to your local machine from Github github.com/Haroonabdulrazaq/geo-search. The system is a webpage which includde resources like the CSS,JS,img folder. The index.html is divided into Five sections First Header section, Second Map section, Third Search section, Fourth notable Landmarks section, Fifth is the Footer. 
The map section Includes a Map with customize map marker the marker is suppose to change base on User's search. when the user navigates to the Search Input and Inputs the location of interest the system should provide the Local weather condition of the place and also the geographical coordinate(Longitude and Latitude) of the location. The notable landmark section shows images of notable Landmark such that when a user mouseover or clicks(for mobile user) on the images the name appears on the image. The footer contains the Social media links of the developer and also a section where you can support or contribute to the project and also leave comment. the third section in footer is a navigation button that makes it easier to navigate back to the top of the project.

# Prerequisite
Eslint using Airbnb Style guide. This guide gives detail of how to intsall and use Eslint with the specified style guide (Airbnb) https://medium.com/@Tunmise/set-up-eslint-with-airbnb-style-guide-in-5-minutes-d7b4cc5707f8 .

# Classes Functions 
Classes-None

Functions -
onreadystatechange - This function makes an API call and also handles the result that is returned from the server
convertToFahrenheit - This function converts the Temperature returned by the openweather map API into Fahrenheit
convertToCelsius -  This function converts the Temperature returned by the openweather map API into Celsius
carousel() - This function changes the notable landmark image in 4s It's an automatic image slider and it also includes names of the notable landmark that appears on the image during mouseover or clicks for (Mobile users)
initMap() - This function initialize the map from google MAP API
addMarker(location, map)  - This function includes a customized map maker this marks where a user has clicked on labeling them from A-Z



# Deployment
THe system is deployed on github pages using gh-pages you can access url:  https://haroonabdulrazaq.github.io/geo-search/
# Built with
HTML
CSS
JavaScript

# Author
Haroon Abdulrazaq

# Acknowlegdment
Anifowose Habeeb
Yusuf Abdulkareem
W3Schools
Google API
Openclassrooms
