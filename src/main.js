// query selector variables go here 👇
//we are querying the poster classes from lines 13 - 15 in the HTML code, under the Main Poster Section - becayse we are querying the class, that is why we used the "." in front.
var randomPosterImg = document.querySelector('.poster-img');
var randomPosterTitle = document.querySelector('.poster-title');
var randomPosterQuote = document.querySelector('.poster-quote');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener('load', getPosterAssets)

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function getPosterAssets() {
  var randomAssetGroup = {
    randomImage: getRandomIndex(images),
    randomTitles: getRandomIndex(titles),
    randomQuotes: getRandomIndex(quotes)
  }
}

function displayPoster(poster) {
  // we're accessing the variable 'randomPosterImg, Quote, and title' 
  // we're accessing the src of the image and the innerHTML that lives originally in the html
  // which then we are assigning it to poster which represents the object in createPoster since we have to access the value of imageURL, quote and title.
  // pretty much it's saying hey target this from the html and assign it to the value of imageURL quote and title.
  randomPosterImg.src = poster.imageURL,
  randomPosterQuote.innerHTML = poster.quote,
  randomPosterTitle.innerHTML = poster.title
};

function randomPoster() {
  // this is where it gets fun
  // It calls the getPosterAssets() function to get a random index for the poster assets.
// It uses the random index to retrieve an image, title, and quote from the images, titles, and quotes arrays.
// It calls the createPoster() function with the retrieved image, title, and quote to create a currentPoster object.
// It calls the displayPoster() function to display the currentPoster object on a webpage.
// Finally, it returns the currentPoster object.
  var random = getPosterAssets();
  currentPoster = createPoster(images[random.randomImage], titles[random.randomTitles], quotes[random.randomQuotes]);
  displayPoster(currentPoster);
  return currentPoster;
}

/* Pseudocode:
***************Done*********************
DONE!!! Create a function that will return random assets:
- images
- titles
- quotes
DONE!!! We will need to use the getRandomIndex function to choose each random asset
NOPE - didn't need this because we just had to call the function to getRandomIndex and then populate that into an Objecty (We think we will need three separate for loops to run through the three different arrays)
**********************************************

Then, we will use the object from "getPosterAssets" to populate the arguments of the createPoster function (imageURL, title, quote) - will need to use an event listener as well

We have to do something with the outome of the object in "getPosterAssets" to convert the random index number to the string associated with that index number

We need to create another function that uses .innerHTML and .innerText, to change the values of the poster - will use .src to target the image URL

// function randomCover() {
//   randomPosterImg.innerText = getPosterAssets(randomAssetGroup.randomImage)
} */
