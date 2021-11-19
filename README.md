# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This app provides the user with the ability to post tweets to a Tweet feed. This app was built with Javascript, jQuery, AJAX on the front-end, and with Express and Node on the back-end. The contents of the app were built using HTML and CSS styling. 

# Final Product

## Core Features
- Start by writing a tweet in the tweet box and clicking on "Tweet". This will "Submit" the tweet to the back-end via AJAX.
- A successful POST request will then GET the tweet object back from the back-end and update the feed without having to refresh the page. 
- Error messages will be displayed if an empty tweet or a tweet longer than 140 characters is being submitted. 
- This app uses responsive design and will adjust depending on the display size. 

## Screenshots

**Main Tweeter Page**

!["Screenshot of main Tweeter page"](https://github.com/kliang1194/tweeter/blob/master/public/images/Tweeter-Main-Page.png?raw=true)

**Main Tweeter Page with an Error Message when Submitting an Empty Tweet**

!["Screenshot of main Tweeter page with error message"](https://github.com/kliang1194/tweeter/blob/master/public/images/Tweeter-Error.png?raw=true)

**Condensed Tweeter Page for Mobile View**

!["Screenshot of small main Tweeter page"](https://github.com/kliang1194/tweeter/blob/master/public/images/Tweeter-Main-Page-Small.png?raw=true)

**Condensed Tweeter Page for Mobile View with an Error Message when Submitting a Tweet that is Too Long**

!["Screenshot of small main Tweeter page with error message"](https://github.com/kliang1194/tweeter/blob/master/public/images/Tweeter-Error-Small.png?raw=true)


## Getting Started
1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies
- Express
- Node 5.10.x or above
- nodemon
- chance
- md5
