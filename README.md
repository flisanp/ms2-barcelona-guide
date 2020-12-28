
`python3 -m http.server`

# Barcelona City Guide

[A live version of the page can be viewed here]

![mockup image]

This website is a city guide to Barcelona and aims to provide information about the city to users who are planning to visit or are currently visiting Barcelona. Users can navigate through Google Maps to get information about tourist attractions, restaurants, hotels and shops.


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
I wanted the site to be easy navigated with a clean and minimalistic design. The colors I’ve used for the project is a light grey, #777777, and a warm terracotta, #E2725B. I chose these colors because they are easy to read on screen and also the two most common colors on clay that’s used for pottery which gives the site an earthy tone and a thought through theme.  
The images used throughout the site is carefully choosen and is of great importance to showcase the ceramist work and to give a feeling about who she is. The photos of her work is unified in their visual appearence to give a professional touch to the site and the photos of the ceramist is ment to be more personalized. The purpose of the hero image on the landing page is to give a calm first impression and also show the skills of the ceramist. 
All images sourced via [Unsplash](https://unsplash.com/) and [Pexels](https://www.pexels.com/).

#### Wireframes
- [Home](https://github.com/flisanp/ms1-ceramic-studio/blob/1c78496558ba3f71e3a4b053decec4315fc89053/readme%20assets/wireframes/home.png) 
- [Gallery](https://github.com/flisanp/ms1-ceramic-studio/blob/1c78496558ba3f71e3a4b053decec4315fc89053/readme%20assets/wireframes/gallery.png) 
- [About](https://github.com/flisanp/ms1-ceramic-studio/blob/1c78496558ba3f71e3a4b053decec4315fc89053/readme%20assets/wireframes/about.png) 
- [Stockists](https://github.com/flisanp/ms1-ceramic-studio/blob/1c78496558ba3f71e3a4b053decec4315fc89053/readme%20assets/wireframes/stockists.png) 
- [Contact](https://github.com/flisanp/ms1-ceramic-studio/blob/1c78496558ba3f71e3a4b053decec4315fc89053/readme%20assets/wireframes/contact.png) 

# Features

**Header** - A fixed header that exists on every page to make it easy accessible at all time. The logo is located to the left and by clicking it the user returns to the home page. The navigation menu is located to the right for the user to easy navigate through the different pages.  

**Navbar** - Each page features a responsive Bootstrap navbar that’s collapsed to a burger icon when viewing on smaller screens. The navbar has an hover effect so when the user hovers over the different pages the text changes color. The same color is used to show which page the user is currently on.

**Home** - The home page features a hero image with the text "Jane Smith Ceramic Studio, Handcrafted Homeware" and a call to action button that guides the user to her shop. The image shows some of the ceramic items that she makes and this, in combination with the text, provides the user information on what the website is about.
I wanted the ceramist to somehow be able to sell her work through the website but since we haven't learned the technologies to implement that yet I decided that I'll show her work in an image gallery and let people place orders through the contact form. This didn't feel right with what I wanted to achieve and after having discussed the issue with my mentor we talked about adding a link to an online materketplace outside the page, like Etsy. I think this solution made the website gain clearer purpose.

**Gallery** - The gallery page features a masonry gallery with images of all her work. When you click the images they opens in a fancybox.

**About** - The about page features a photo of the ceramist to present the person who’s making the items. The page also provides a short text that gives some information about who she is and her thoughts about her work. You can also read that she’s available for collaborations.

**Stockists** - The stockist page features an unordered list with links to all her stockists so that users easily can access their websites and get information on where to purchase her items.

**Contact** - The contact page features a form where the user can enter their name, email address and a message. The page also features another photo of the ceramist.

**Footer** - A fixed footer that exists on every page. Located in the center of the footer are four social media icons with links to the ceramist social media pages. The links have the same hover effects as the navbar and changes color when hovering over them.

#### Features Left To Implement
- A webshop so that customers easily can buy her work without beeing redirected to Etsy.com.

- The forms functionality.

# Technologies Used


- HTML5 and CSS3
- [GitPod](https://www.gitpod.io) - The developer used GitPod for their IDE while building the website.
- [GitHub](https://github.com) - This project uses GitHub to store the projects code after being pushed from Git.
- [Bootstrap](https://getbootstrap.com) - This project uses Bootstrap to make the site responsive and to implement features such as the navbar and the buttons.
- [FontAwesome](https://fontawesome.com) - This project uses FontAwesome for social media icons.
- [Google Fonts](https://fonts.google.com) - This project uses Work Sans from Google Fonts.
- [Balsamiq](https://balsamiq.com) - The developer used Balsamiq to create wireframes.
- [DevTools](https://developers.google.com/web/tools/chrome-devtools) - The developer has used DevTools to test responsiveness and diagnose problems. The tool **Lighthouse** has been used to improve the website's quality. 
- [Tinypng](https://tinypng.com) - The developer used Tinypng for compressing images.
- [Freeformatter](https://www.freeformatter.com/) - The developer used Freeformatter for beautifying HTML and CSS code.
- [Fancybox](https://fancyapps.com/fancybox/3/) - This project uses Fancybox for image gallery.
- [A11y](https://color.a11y.com) - The developer used A11y for checking the websites color contrast accessibility 
- [Am I Responsive?](http://ami.responsivedesign.is/) - The developer used Am I Responsive? for creating the mockup image in the beginning of this README file.
- [InDesign](https://www.adobe.com/se/products/indesign.html) The developer used InDesign for creating the logo image.

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

 - Mobile responsiveness for about page not worked as intended.
Image appears too small and does not move to underneath the text.
	- changed setting from `col-6` to `col-12 col-lg-6` 

 - Mobile responsiveness for stockists page not worked as intended.
Image appears too small and does not move to underneath the text.
	- changed setting from `col-6` to `col-12 col-lg-6` 

 - Mobile responsiveness for contact page not worked as intended.
Image appears too small and does not move to underneath the text.
	- changed setting from `col-6` to `col-12 col-lg-6` 

 - Header remained transparent when scrolling which made the menu difficult to read.
	- Added `bg-white` to `navbar` class.

 - Unable to customize color on navbar menu when hovering.
	- Added `!important;`  to `.menu a`

 - Unable to customize color on active pages.
	- Added `!important;`  to `.active`

 - Send Button in the form on the contact page was hidden behind the image on small devices.
   - Removed `position:absolute` from `.button-text-form`
	
 - Mobile responsiveness for hero image not working + Mobile responsiveness for hero text not working. Text size does not decrease and is overlapping.
    - Added class name `hero-container` to `<div class="container-fluid">` and linked the image with CSS instead of `<img>` element in the html like I did first. Added class name `jumbotron` from Bootstrap to my section element and placed text and button inside that section instead of in seperate `div` elements like I did from the beginning.


#### HTML Testing
https://validator.w3.org/
No errors or warnings to show.

#### CSS Testing 
https://jigsaw.w3.org/css-validator/
No errors or warnings to show.

# Deployment
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
1. Navigate to flisanp repositories.
2. Select the one that is called ms1-ceramic-studio from the list.
3. Click on settings in the menu that is located to the top right.
4. Scroll down to "GitHub Pages"
5. Under "Source", Select Master Branch from the drop-down menu.
6. Click Save and the website is now deployed.

### How To Run The Code Locally
1. Log inte Gitpod with your account.
2. Navigate to the [repository](https://github.com/flisanp/ms1-ceramic-studio).
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








