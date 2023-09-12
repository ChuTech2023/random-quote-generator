/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * This is `quotes` array with quote objects
***/
const quotes = [
  {
    quote: `If you love something, wear it all the time... Find things that suit you. That's how you look extraordinary.`,
    source: " Vivienne Westwood",
    citation: "Town& Country Mag"
  },
  {
    quote: `I want people to see the dress, but focus on the woman.`,
    source: "Vera Wang"
  },
  {
    quote: 'The joy of dressing is an art.',
    source: "John Galliano",
    year: "1994"
  },
  {
    quote: 'When in doubt, wear red.',
    source: " Bill Blass"
  },
  {
    quote: 'I make clothes. Women make fashion.',
    source: "Azzedine Alaïa",
    tags: ['Fashion', 'Couture']
  },
  {
    quote: 'We must never confuse elegance with snobbery.',
    source: "Yves Saint Laurent"
  }
];


/***
 * `getRandomQuote` function generates a random number within the range of the quotes 
 * array and returns a random quote
***/
const getRandomQuote = () => {
  const randomNumber = parseInt(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/* getRandomColor function to change page background color */

const getRandomColor = () => {
  // generating a random number and converting it to an integar, range of 255
  const r = parseInt(Math.random() * 256);
  const g = parseInt(Math.random() * 256);
  const b = parseInt(Math.random() * 256);
  //using three generated random numbers to create rgb color 
  const rgbcolor = `rgb(${r}, ${g}, ${b})`;
  return rgbcolor;
}

/***
 * `printQuote` function takes a random quote and generates html content from
 * the quote data and it prints the html into the quote-box element
***/
const printQuote = () => {
  const randomQuote = getRandomQuote();
  let htmlContent = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source">${randomQuote.source} 
  `
  if (randomQuote.citation) {
    htmlContent += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    htmlContent += `<span class="year"> ${randomQuote.year} </span>`;
  }
  if (randomQuote.tags) {
    htmlContent += `<span class="tags"> ${randomQuote.tags} </span>`;
  }
  htmlContent += '</p>';
  document.getElementById('quote-box').innerHTML = htmlContent;
  // Selects the body and what it contains and sets a random background color return by getRandomColor
  document.querySelector('body').style.backgroundColor = getRandomColor();
}

// source: https://www.w3schools.com/js/js_timing.asp
setInterval(function () {
  printQuote()
}, 10000)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);