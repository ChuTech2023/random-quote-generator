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
    source: "Azzedine Alaïa"
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
  htmlContent += '</p>';
  document.getElementById('quote-box').innerHTML = htmlContent;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);