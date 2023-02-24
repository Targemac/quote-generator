
// ------------------------------

const quotes = [
  "push yourself",
  "fill your cup before drifting",
  "before you share",
  "God has not forgotten you",
];

function tweetQuote(quote) {
  const quoteWrapper = document.getElementById("quoteWrapper");
  let numb_of_quotes = quote.length;

  let randNumb = Math.floor(Math.random() * numb_of_quotes);

  quote.map((val, index, array) => {
    if (index === randNumb) {
      quoteWrapper.innerHTML = val;
    }
  });
}
setInterval(() => {
  tweetQuote(quotes);
}, 2000);
