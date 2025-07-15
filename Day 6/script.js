const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quote");

const quotes = [
  "Believe in yourself!",
  "Code like there's no bug!",
  "Push yourself, because no one else is going to do it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones."
];

const colors = ["#f8c291", "#6a89cc", "#82ccdd", "#b8e994", "#f6b93b", "#e55039"];

quoteBtn.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  quoteDisplay.textContent = randomQuote;
  document.body.style.backgroundColor = randomColor;
});
