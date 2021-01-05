
`python3 -m http.server`

# Barcelona City Guide

[A live version of the page can be viewed here](https://flisanp.github.io/ms2-barcelona-guide/)

![mockup image]

This website is a city guide to Barcelona and aims to provide information about the city to users who are planning to visit or are currently visiting Barcelona. Users can navigate through Google Maps to get top picks for restaurants, tourist attractions, hotels and shops.


# UX

#### The Goals For This Website Is To: 
- Be user-friendly.
- Give users information about the city of Barcelona.
- Give users information about interesting places to visit during their stay.
- Let users know about good restaurants, shops and hotels.
- Provide a map with markers so that users easy can navigate and find what they are looking for.
- Provide the citys weather information.

#### User Stories

1. As a first time visitor to Barcelona I would like to see where the best tourist attractions are located.
2. As a traveller who is planning to visit Barcelona I would like to find a good hotel for my visit.
3. As a traveller visiting Barcelona I would like to see a map over the city to find out if there’s any restaurants located close to my hotel.
4. As a traveller aiming to visit Barcelona I would like to see the weather forecast to better plan my packing for the trip.
5. As a traveller who is planning to visit Barcelona with friends I would like to have an easy way to share the site with tips that I found.
6. 


#### Design 
My main colors for the project is yellow, #FFCE0A, and blue, #11466A, and are supposed to represent the sun and the ocean as this is something I strongly associate with Barcelona. The yellow can also be found in the flag of Catalonia and the blue is recurring in Gaudís mosaic which can be seen scattered over large parts of the city. In fact you can hardly talk about Barcelona without mentioning Gaudí and that is why I have choosen the iconic image over Parc Güell as my hero image that will greet you when you enter the site. 
I wanted the design to be easy navigated and for the user to immdiately understand what the purpose of the site is. Four different buttons with categories that are linked straight to the map depending on what you’re intrested in finding in the city. For example if you’re intrested in finding restaurants you click on the button called EAT and you will get locations on the map for my top picks. When you click on the markers you will open a info window with the name of the restaurant and a link to the website.


#### Wireframes
- [Home]
- [Gallery]
- [About] 
- [Stockists]
- [Contact]

# Features

**Navbar** - Each page features a responsive Bootstrap navbar that’s collapsed to a burger icon when viewing on smaller screens. The navbar has an hover effect so when the user hovers over the different pages the text changes color. The same color is used to show which page the user is currently on.

**Home** - The home page features a hero image with the text "Barcelona, city guide" and four call to action buttons that guides the user to the different categories on the map. The image shows a picture over Parc Güell that is one of the main attractions to visit when you’re in Barcelona. 

**Contact** - The contact page features a form where the user can enter their name, email address and a message. 

**Footer** - Exists on every page. Located in the center of the footer are four social media icons. The links have the same hover effects as the navbar and changes color when hovering over them.

#### Features Left To Implement


# Technologies Used

- HTML5 and CSS3
- [GitPod](https://www.gitpod.io) - The developer used GitPod for their IDE while building the website.
- [GitHub](https://github.com) - This project uses GitHub to store the projects code after being pushed from Git.
- [Bootstrap](https://getbootstrap.com) - This project uses Bootstrap to make the site responsive and to implement features such as the navbar and the buttons.
- [FontAwesome](https://fontawesome.com) - This project uses FontAwesome for social media icons.
- [Google Fonts](https://fonts.google.com) - This project uses Montserrat and Lora from Google Fonts.
- [Balsamiq](https://balsamiq.com) - The developer used Balsamiq to create wireframes.
- [DevTools](https://developers.google.com/web/tools/chrome-devtools) - The developer has used DevTools to test responsiveness and diagnose problems. The tool **Lighthouse** has been used to improve the website's quality. 
- [Tinypng](https://tinypng.com) - The developer used Tinypng for compressing images.
- [Freeformatter](https://www.freeformatter.com/) - The developer used Freeformatter for beautifying HTML and CSS code.
- [A11y](https://color.a11y.com) - The developer used A11y for checking the websites color contrast accessibility 
- [Am I Responsive?](http://ami.responsivedesign.is/) - The developer used Am I Responsive? for creating the mockup image in the beginning of this README file.
- [InDesign](https://www.adobe.com/se/products/indesign.html) The developer used InDesign for creating the favicon.
- [Addthis](https://www.addthis.com)

# Testing

#### I Manually Tested The Following Features


#### Testing User Stories 

1. As a first time visitor to Barcelona I would like to see where the best tourist attractions are located. ![user story 1]
    - On the landing page is a call to action button that says "DISCOVER" which leads you to the map with the location markers for the attractions. 
2. As a traveller who is planning to visit Barcelona I would like to find a good hotel for my visit. ![user story 2]
    - On the landing page is a call to action button that says "SLEEP" which leads you to the map with the location markers for the hotels. 
3. As a traveller visiting Barcelona I would like to see a map over the city to find out if there’s any restaurants located close to my hotel. ![user story 3]
    - On the landing page is a call to action button that says "EAT" which leads you to the map with the location markers for the restaurants. 
4. As a traveller aiming to visit Barcelona I would like to see the weather forecast to better plan my packing for the trip. ![user story 4]
    - In the navbar on the top right is a WEATHER link where the user can find a 3 day forecast.

#### During Development I Fixed The Following Bugs

- Google Maps would not load properly.
    - InitMap being called in the `<body>` instead of as a callback function: `<body onload="initMap()">`

- Trouble with linking buttons to map and showing the correct markers.
    - markers.push(marker) code was in the wrong place, moved it to inside the preceding for loop.

- Info window on markers only shows last location.
    - changed marker and infowindow to const types instead of var. They need to be const as per the google documentation.

- Contrasting issues

- Menu on mobile overlapping text on the landing page



#### HTML Testing
https://validator.w3.org/
No errors or warnings to show.

#### CSS Testing 
https://jigsaw.w3.org/css-validator/
No errors or warnings to show.

#### JS Testing
https://jshint.com/

# Deployment
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
1. Navigate to flisanp repositories.
2. Select the one that is called ms2-barcelona-guide from the list.
3. Click on settings in the menu that is located to the top right.
4. Scroll down to "GitHub Pages"
5. Under "Source", Select Master Branch from the drop-down menu.
6. Click Save and the website is now deployed.

### How To Run The Code Locally
1. Log inte Gitpod with your account.
2. Navigate to the [repository](https://github.com/flisanp/ms2-barcelona-guide).
3. Click the green GitPod button on the top right.
4. A new workspace will be created.

# Credits

#### Content

**Code**

Weather API
Google Maps API
https://www.addthis.com

[Stack Overflow](https://stackoverflow.com/) how to store icons for google map markers on local folder: https://stackoverflow.com/questions/12652287/using-a-local-folder-how-to-store-google-markers

[w3schools.com](https://www.w3schools.com) provided code for scroll to top button: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp



#### Media

- Hero Image on Home page by [Vitor Monteiro on Unsplash](https://unsplash.com/@vitorhugomonteiro) 
- Map icons from http://map-icons.com
- Favicon made by me

#### Acknowledgements




