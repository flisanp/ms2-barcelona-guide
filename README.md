
`python3 -m http.server`

# Barcelona City Guide

[A live version of the page can be viewed here](https://flisanp.github.io/ms2-barcelona-guide/)

![mockup image]

This website is a city guide to Barcelona and aims to provide information about the city to users who are planning to visit or are currently visiting Barcelona. Users can navigate through Google Maps to get top picks for restaurants, tourist attractions, hotels and shops.


# UX

#### The Goals For This Website Is To: 
- Be user-friendly.
- Give users information about the best places in the city of Barcelona.
- Let users know about good restaurants, shops and hotels.
- Give users information about interesting places to visit during their stay.
- Provide a map with markers so that users easy can navigate and find what they are looking for.
- Provide the citys weather forecast.
- Make it easy for users to share the site.
- Have the possibility to ask questions and to give feedback and tips to the site owner.

#### User Stories

1. As a first time visitor to Barcelona I would like to see where the best tourist attractions are located.
2. As a traveller who is planning to visit Barcelona I would like to find a good hotel for my visit.
3. As a traveller visiting Barcelona I would like to see a map over the city to find out if there’s any restaurants located close to my hotel.
4. As a traveller aiming to visit Barcelona I would like to see the weather forecast to better plan my packing for the trip.
5. As a traveller who is planning to visit Barcelona with friends I would like to have an easy way to share the site with tips that I've found to my travel companions.
6.  


#### Design 
My main colors for the project is yellow, #FFCE0A, and blue, #11466A, and are supposed to represent the sun and the ocean as this is something I strongly associate with Barcelona. The yellow can also be found in the flag of Catalonia and the blue is recurring in Gaudís mosaic which can be seen scattered over large parts of the city. In fact you can hardly talk about Barcelona without mentioning Gaudí and that is why I have choosen the iconic image over Parc Güell as my hero image that will greet you when you enter the site. 
I wanted the design to be easy navigated and for the user to immidately understand what the purpose of the site is. 
I therefore choose to have a headline that clearly states that it is a travel guide to Barcelona and underneath that I have four call to action buttons with different categories depending on what you want to do in the city. The buttons are linked straight to a Google map and shows markers for different categories. Each category has it's own markers with icons that clearly states what category they have clicked so that will be no confusion when you're on the map. All markers open an info window when you click on them and in that info window you will find the name of the location followed by some further information about the place such as for instance a link to their website which will make it easy for the user to get more information about places they find interesting. When you click on a new info window the previous one closes so that the map don't gets cluttered. I wanted to map to be easy to navigate on and that is why I choose to have it in full screen. 
I also wanted to have a weather forecast so that users can plan their packing and activities accordingly, this is located at the bottom of the page but there is also a link called WEATHER in the navbar so that users easy can find it at all time.

#### Wireframes
- [Home](https://github.com/flisanp/ms2-barcelona-guide/blob/dcc81e89b6d7e1616048e4a225dd56327a590af4/readme%20assets/wireframes/home.png)
- [Map](https://github.com/flisanp/ms2-barcelona-guide/blob/dcc81e89b6d7e1616048e4a225dd56327a590af4/readme%20assets/wireframes/map.png)
- [Weather](https://github.com/flisanp/ms2-barcelona-guide/blob/dcc81e89b6d7e1616048e4a225dd56327a590af4/readme%20assets/wireframes/weather.png) 
- [Contact](https://github.com/flisanp/ms2-barcelona-guide/blob/dcc81e89b6d7e1616048e4a225dd56327a590af4/readme%20assets/wireframes/contact.png)

# Features

**Navbar** - Each page features a responsive Bootstrap navbar that’s collapsed to a burger icon when viewing on smaller screens. The navbar has an hover effect so when the user hovers over the different pages the text changes color. The same color is used to show which page the user is currently on. The navbar has links to the landing page *HOME*, the weather forecast *WEATHER* and to the contact form *CONTACT*.

**Home** - The landing page features a hero image with a photo of one of Barelonas main attractions Parc Güell. On top of the photo is a heading with the text Barcelona city guide to clearly state what the site is about. 
Underneath the heading is four *Call to action buttons* that are linked to a *Google map*. The map, which is the most significant feature on the site, is located undeneath the buttons and gives a view over Barcelona. When the user clicks on a button different *markers* appear on the map and every marker has an icon that clearly indicates which category the user is currently viewing. When the user clicks on a marker they open a *info window* where they can find the name of the location and the prime information. In every info window there is a link to the locations website so the user easy can navigate to find out more about the places they are intrested in. When you scroll down on the page a scroll to top button appears that gives the user a shortcut to the top of the page. 
In the bottom left corner the user can find a toggle *share button* that expands when they click it and provides the user  with several ways to share the site on different social media platforms. They also have the possibility to send it by mail or to print it. 

**Weather** - The *weather forecast* is located below the map and also reachable at all times through a link in the navbar. It's displaying a 7 day forecast over Barcelona with distinct icons whick gives the user an indication of what the weather will look like the following week. To the left it displays the current weather.

**Contact** - The *contact form* is reachable through the navbar at all times. The user can give feedback, tips or ask questions and when filled out properly it will send an email to the site owner through Mailchimp.

**Footer** - Exists on the bottom of every page. Located in the center of the footer are four icons with links to the sites social media platforms. The links have the same hover effects as the navbar and changes color when hovering over them.

#### Features Left To Implement
Even though I wanted to have a clean site where you'll just find the top picks in every category there could be many more features added to provide the user with more functionality and to simplify their planning, for instance: 
- More locations on the map
- More categories such as beaches/nightlife/things to do with kids
- Book hotels/flights/tours through the site
- Timetables for tourist buses

# Technologies Used

- HTML5, CSS3 and Javascript
- [GitPod](https://www.gitpod.io) - The developer used GitPod for their IDE while building the website.
- [GitHub](https://github.com) - This project uses GitHub to store the projects code after being pushed from Git.
- [Bootstrap](https://getbootstrap.com) - This project uses Bootstrap to make the site responsive and to implement features such as the navbar and the buttons.
- [FontAwesome](https://fontawesome.com) - This project uses FontAwesome for social media icons.
- [Google Fonts](https://fonts.google.com) - This project uses Montserrat and Lora from Google Fonts.
- [Balsamiq](https://balsamiq.com) - The developer used Balsamiq to create wireframes.
- [DevTools](https://developers.google.com/web/tools/chrome-devtools) - The developer has used DevTools to test responsiveness and diagnose problems. The tool **Lighthouse** has been used to improve the website's quality. 
- [Tinypng](https://tinypng.com) - The developer used Tinypng for compressing images.
- [Freeformatter](https://www.freeformatter.com/) - The developer used Freeformatter for beautifying the code.
- [A11y](https://color.a11y.com) - The developer used A11y for checking the websites color contrast accessibility 
- [Am I Responsive?](http://ami.responsivedesign.is/) - The developer used Am I Responsive? for creating the mockup image in the beginning of this README file.
- [InDesign](https://www.adobe.com/se/products/indesign.html) The developer used InDesign for creating the favicon.
- [Addthis](https://www.addthis.com) The developer used Addthis for the toggle share button.
- [Mailchimp](https://mailchimp.com) The developer used Mailchimp to create the contact form.


# Testing

#### I Manually Tested The Following Features
- Links in navbar works and takes you to the correct pages.
- Buttons on landing page takes you to the map and shows the right markers.
- Info window opens when markers being clicked.
- Previous info window close when clicking on a new marker.
- Links in info window works and open the correct page in a new window.
- Hover effect on links in navbar.
- All links works and opens in a new tab window.
- Scroll to top button appears on scroll and takes you to the top of the page.
- Toggle sharing button works and shares the site accordingly.
- The form checks if it has the correct input before submitting.
- Response message showing when submitting a message through the contact form.
- Mail being sent when submitting the contact form.
- Links to social media platforms works and opens in a new tab window.

#### Testing User Stories 

1. As a first time visitor to Barcelona I would like to see where the best tourist attractions are located. ![user story 1]
    - On the landing page is a call to action button that says "DISCOVER" which leads you to the map that shows markers for the  different locations. The user can click on each marker which opens a info window where the user can find the main information and be directed to a website for further reading.
2. As a traveller who is planning to visit Barcelona I would like to find a good hotel for my visit. ![user story 2]
    - On the landing page is a call to action button that says "SLEEP" which leads you to the map that shows markers for different hotels. The user can click on each marker which opens a info window where the user can find the main information and be directed to a website for further reading.
3. As a traveller visiting Barcelona I would like to see a map over the city to find out if there’s any restaurants located close to my hotel. ![user story 3]
    - On the landing page is a call to action button that says "EAT" which leads you to the map that shows markers for different hotels. The user can click on each marker which opens a info window where the user can find the main information and be directed to a website for further reading.
4. As a traveller aiming to visit Barcelona I would like to see the weather forecast to better plan my packing for the trip. ![user story 4]
    - In the navbar on the top right is a link that says WEATHER where the user can find a 7 day weather forecast.
5. As a traveller who is planning to visit Barcelona with friends I would like to have an easy way to share the site with tips that I've found to my travel companions. ![user story 4]
    - In the bottom left on every page is a toggle sharing button that will link the site through all of the most popular social media platforms. The user can also email the link or print it.


#### During Development I Fixed The Following Bugs

- Google Maps would not load.
    - InitMap being called in the `<body>` instead of as a callback function: `<body onload="initMap()">`

- Info window on markers only shows last location.
    - changed marker and infowindow to const types instead of var. They need to be const as per the google documentation.

- Issue with previous info window not closing when clicking on a new marker.
  ![issue markers](https://github.com/flisanp/ms2-barcelona-guide/blob/cfa92c0d8d9a5cc97cad92a519cafd2c45419fb6/readme%20assets/bugs/issue-markers.png)


    - I got an error in consol declaring that `infoObj`was not defined: 
    ![not defined error](https://github.com/flisanp/ms2-barcelona-guide/blob/cfa92c0d8d9a5cc97cad92a519cafd2c45419fb6/readme%20assets/bugs/not-defined-error.png)

     - Defined `var infoObj= [];`and it worked.
    ![not defined solution](https://github.com/flisanp/ms2-barcelona-guide/blob/cfa92c0d8d9a5cc97cad92a519cafd2c45419fb6/readme%20assets/bugs/not-defined-solution.png)


- Links in navbar was difficult to read because overlapping text on pages.
![menu links overlapping](https://github.com/flisanp/ms2-barcelona-guide/blob/cfa92c0d8d9a5cc97cad92a519cafd2c45419fb6/readme%20assets/bugs/menu-links-overlapping.png)
   - Added the bootstrap class `bg-white` to the navbar.

- Some contrasting issues where found when I tested the webpage in [A11y](https://color.a11y.com) 
![contrasting issues](https://github.com/flisanp/ms2-barcelona-guide/blob/cfa92c0d8d9a5cc97cad92a519cafd2c45419fb6/readme%20assets/bugs/contrasting-issue.png)

- Menu overlapping text on the landing page when checking responsiveness on mobile
![menu overlapping](https://github.com/flisanp/ms2-barcelona-guide/blob/cfa92c0d8d9a5cc97cad92a519cafd2c45419fb6/readme%20assets/bugs/menu-overlapping.png)



#### HTML Testing
https://validator.w3.org/


#### CSS Testing 
https://jigsaw.w3.org/css-validator/


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

To find information about the best locations I've used the following sources:

[Time Out](https://www.timeout.com/barcelona)

[Condé Nast Traveller](https://www.cntraveler.com/destinations/barcelona)

**Code**

[Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)

[Google Maps tutorial for markers](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)

[Google Maps tutorial for info windows](https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple)

Weather forecast API: [Visual Crossing](https://www.visualcrossing.com/weather-data)

Fixed width button: [Stack Overflow](https://stackoverflow.com/questions/11050269/fixed-width-buttons-with-bootstrap)

How to store icons for google map markers on local folder: [Stack Overflow](https://stackoverflow.com/questions/12652287/using-a-local-folder-how-to-store-google-markers)

Scroll to top button: [w3schools.com](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)


#### Media

- Hero Image on Home page by [Vitor Monteiro on Unsplash](https://unsplash.com/@vitorhugomonteiro) 
- Icons for markers on map from [Map icons](http://map-icons.com)
- Favicon made by me

#### Acknowledgements

- To tutor support for guiding through bug issues
- To mentor Sinead O'Brien for helpful feedback



