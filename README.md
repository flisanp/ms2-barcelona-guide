
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

1. As a first time visitor to Barcelona I would like to see where the tourist attractions are located.
2. As a traveller who is planning to visit Barcelona I would like to find a good hotel for my visit.
3. As a traveller visiting Barcelona I would like to see a map over the city to find out if there’s any restaurants located close to my hotel.
4. As a traveller aiming to visit Barcelona I would like to see the weather forecast to better plan my packing for the trip.
5. 
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

**Header** - A fixed header that exists on every page to make it easy accessible at all time. The logo is located to the left and by clicking it the user returns to the home page. The navigation menu is located to the right for the user to easy navigate through the different pages.  

**Navbar** - Each page features a responsive Bootstrap navbar that’s collapsed to a burger icon when viewing on smaller screens. The navbar has an hover effect so when the user hovers over the different pages the text changes color. The same color is used to show which page the user is currently on.

**Home** - The home page features a hero image with the text "Barcelona, city guide" and four call to action buttons that guides the user to the different categories on the map. The image shows a picture over Parc Güell that is one of the main attractions to visit when you’re in Barcelona. 

**Contact** - The contact page features a form where the user can enter their name, email address and a message. The page also features another photo of the ceramist.

**Footer** - A fixed footer that exists on every page. Located in the center of the footer are four social media icons. The links have the same hover effects as the navbar and changes color when hovering over them.

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

# Testing

#### I Manually Tested The Following Features
- Logo image in header navigates back to Home page on every site. 
- Links in navbar takes you to the correct pages.
- Hover effect on links in navbar.
- Action effect on actual site your visiting.
- All links works and opens in a new tab window.
- The form checks if it has the correct input before submitting.
- Responsiveness looks nice on all major device sizes.
- All links to social media sites opens in a new tab window.

#### Testing User Stories 

1. As a potential customer I want to visit her shop to find out what products I can buy. ![user story 1](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/shop.png)
    - On the landing page is a call to action button that says "SHOP NOW" which leads you to her shop on Etsy. The button is in a terracotta color to clearly stand out from the background. On every page is a navbar on the top right with a link to the SHOP for easy navigation at all time.
2. As a fan of the ceramist I would like to find where the nearest stockists are located so that I can purchase her products. ![user story 2](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/stockists.png)
    - On every page is a navbar on the top right with a link to the STOCKIST page for easy navigation at all time. On the Stockist page you'll find a list with links to all the stores who keeps her products and where the stores are located.
3. As a fan of the ceramist I would like to find her social media sites so that I can keep updated about her work. ![user story 3](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/socialmedia.png)
    - In the footer on all pages are links to her four social media sites which makes them clearly visible at all time.
4. As a curious new visitor to the website I would like to know more information about the ceramist and her work. ![user story 4](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/about.png)
    - On every page is a navbar on the top right with a link to the ABOUT page for easy navigation at all time. On the About page you can read a bit about her background, the thoughts behind the products the makes and that she does custom work on request. 
5. As a follower on social media I need to find her shop so that I can buy the product I saw in her latest Instagram post. ![user story 5](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/shop.png)
   - On the landing page is a call to action button that says "SHOP NOW" which leads you to her shop on Etsy. The button is in a terracotta color to clearly stand out from the background. On every page is also a navbar on the top right with a link to the SHOP for easy navigation at all time.
6. As a retailer I would like to view her collection of products to see if it's something I would buy for my store. ![user story 6](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/gallery.png)
    - On every page is a navbar on the top right with a link to the GALLERY page for easy navigation at all time. The gallery features images of her work that opens in a fancybox when clicked. 
7. As a retailer I want to find the contact information so that I can get in touch with her for business inquiries. ![user story 7](https://github.com/flisanp/ms1-ceramic-studio/blob/master/readme%20assets/screenshots/contact.png)
    - On every page is a navbar on the top right with a link to the CONTACT page for easy navigation at all time. On the page is a contact form for a quick way to get in touch with the ceramist.

#### During Development I Fixed The Following Bugs

- Google Maps would not load properly.
    - InitMap being called in the `<body>` instead of as a callback function: `<body onload="initMap()">`

- Trouble with linking buttons to map and showing the correct markers.
    - markers.push(marker) code was in the wrong place, moved it to inside the preceding for loop.

- Info window on markers would not work



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
The content of the website is fictional but to seek information and inspiration from other ceramists I have visitied these sites:

https://madokarindal.com

https://www.catherinedixceramics.com

https://www.handandfire.com

https://www.victoriamorrispottery.com

https://www.epocaceramic.com

**Code**

[Code credit](https://github.com/TravelTimN/ci-milestone01-ucfd/blob/master/photos.html) for adding Fancybox to image gallery

[Stack Overflow](https://stackoverflow.com/) was used for solving a issue to override btn color in Bootstrap: https://stackoverflow.com/questions/28261287/how-to-change-btn-color-in-bootstrap

[w3schools.com](https://www.w3schools.com) provided device breakpoints in CSS: https://www.w3schools.com/css/css_rwd_mediaqueries.asp) 


#### Media

- Hero Image on Home page by [Vitor Monteiro on Unsplash](https://unsplash.com/@vitorhugomonteiro) 
- All photos on Gallery page by [Tom Crew on Unsplash](https://unsplash.com/@tomcrewceramics)
- Photo on Stockist page by [Tom Crew on Unsplash](https://unsplash.com/@tomcrewceramics)
- Photo on Contact page by [Gustavo Fring on Pexels](https://www.pexels.com/sv-se/foto/ljus-kvinna-konst-kreativ-4241339/)
- Photo on About page by [Gustavo Fring on Pexels](https://www.pexels.com/sv-se/@gustavo-fring)
- Text written with inspiration from [Victoria Morris](https://www.victoriamorrispottery.com) and [Madoka Rindals](https://madokarindal.com)
- Logo in Header made by me

#### Acknowledgements
  
   - Mentor Sinead O'Brien for valuable feedback throughout the project.
   - Friends and family for good input and for testing the usability of the site and responsiveness on different devices.








